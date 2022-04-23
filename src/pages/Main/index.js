import React, { useState } from 'react';

import {
    FlatList,
    Modal,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { Header } from '../../components/Header';

import { styles } from './styles';

import IconBarCodeLength from '../../assets/IconBarCodeLength.svg';
import theme from '../../styles/theme';
import { CardDetailsPays } from '../../components/CardDetailsPays';
import { ModalCheck } from '../../components/ModalCheck';
import { useCallback, useEffect } from 'react/cjs/react.development';
import { deletePay, loadPayments, PayCheck } from '../../Storage';
import { useFocusEffect } from '@react-navigation/core';

export const Main = () => {

    const [activeModal, setActiveModal] = useState(false);

    const [allPays, setAllPays] = useState([]);

    const [paySelected, setPaySelected] = useState('');

    const getAllPays = async () => {
        const response = await loadPayments();
        setAllPays(response);

        console.log(response);
    };

    const hundleSelectedPay = (item) => {
        setPaySelected(item);
        setActiveModal(true)
    };

    const hundleDelete = async () => {
        await deletePay(paySelected);
        setActiveModal(false);

        alert('Boleto apagado!')
        getAllPays();
    };

    const hundlePayCheck = async () => {
        await PayCheck(paySelected);
        setActiveModal(false);

        getAllPays();
    };

    useEffect(() => {

        getAllPays();
    }, [])

    useFocusEffect(useCallback(() => {
        getAllPays();
    }, []))

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />

            <Header />

            <View style={styles.areaLengthPay}>

                <View style={{
                    borderRightWidth: 1,
                    borderRightColor: theme.colors.inputs,
                    paddingRight: 30
                }}>
                    <IconBarCodeLength />
                </View>


                <View style={styles.areaTxtLength}>
                    <Text style={styles.txtLength}>{

                        allPays.length == 0

                            ? `Sem boletos a serem pagos ;)`
                            : `Você tem ${allPays.length}  boletos cadastrados para pagar` 
                }</Text>
                </View>
            </View>


            <View style={styles.areaTitleMyPays}>
                <Text style={styles.txtMyPays}>Meus boletos</Text>
            </View>


            {
                allPays.length == 0 && (
                    <View style={{ width: '100%', height: 300, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.txtNotPays}>Você não possui nenhum {'\n'} boleto a pagar 😎</Text>
                    </View>
                )
            }


            <View style={{ width: '100%', height: 400, alignItems: 'center' }}>
                <FlatList
                    keyExtractor={(item) => String(item.dataBarCode)}
                    data={allPays}
                    renderItem={({ item }) => (
                        <CardDetailsPays nome={item.nomeBoleto} valor={item.valorBoleto} venc={item.vencBoleto} onpress={() => hundleSelectedPay(item)} />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>


            <Modal visible={activeModal} transparent animationType='slide'>

                <TouchableOpacity activeOpacity={1} onPress={() => setActiveModal(false)} style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.7)'
                }} />

                <ModalCheck pay={paySelected} onPressno={() => setActiveModal(false)} onPressDelete={hundleDelete} onPressYes={hundlePayCheck} />
            </Modal>
        </View>
    );
}