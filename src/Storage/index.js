import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadPayments = async () => {
    const data = await AsyncStorage.getItem('payFlow:toPay');

    let storaged = data ? JSON.parse(data) : [];

    return storaged;
};

export const savePayment = async (pay) => {
    let storaged = await loadPayments();

    const newPay = pay;

    console.log(storaged);

    const hasSave = storaged.some(item => item.dataBarCode == pay.dataBarCode);

    if (hasSave) {
        return alert('Este boleto já está salvo.');
    };

    let hasPayCheck = await loadPayCheks();

    const dataHasPayCheck = hasPayCheck.some(item => item.dataBarCode == pay.dataBarCode);

    if (dataHasPayCheck) {
        return alert('Este boleto já esta como pago.');
    }

    storaged.push(newPay);

    await AsyncStorage.setItem('payFlow:toPay', JSON.stringify(storaged));

    alert('Salvo com sucesso!');
};


export const deletePay = async (pay) => {

    let storaged = await loadPayments();

    const getPay = storaged.filter((item) => {
        return item.dataBarCode !== pay.dataBarCode;
    });

    console.log(getPay);

    await AsyncStorage.setItem('payFlow:toPay', JSON.stringify(getPay));

};






export const PayCheck = async (pay) => {

    await deletePay(pay);

    let storaged = await loadPayCheks();

    const newPayCheck = pay;

    storaged.push(newPayCheck);

    await AsyncStorage.setItem('payFlow:payCheck', JSON.stringify(storaged));
};




export const loadPayCheks = async () => {
    const data = await AsyncStorage.getItem('payFlow:payCheck');

    let storaged = data ? JSON.parse(data) : [];

    console.log(storaged);

    return storaged;
};



export const deletePayCheks = async (pay) =>{

    let storaged = await loadPayCheks();

    const getPay = storaged.filter((item) => {
        return item.dataBarCode !== pay.dataBarCode;
    });

    await AsyncStorage.setItem('payFlow:payCheck', JSON.stringify(getPay));

};