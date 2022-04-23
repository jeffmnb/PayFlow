import React, { useState } from 'react';

import {
    FlatList,
    StatusBar,
    Text,
    View,
    Modal,
    TouchableOpacity
} from 'react-native';

import { Header } from '../../components/Header';

import { styles } from './styles';

import { CardDetailsPays } from '../../components/CardDetailsPays';
import { useCallback, useEffect } from 'react/cjs/react.development';
import { deletePayCheks, loadPayCheks } from '../../Storage';
import { useFocusEffect } from '@react-navigation/core';
import { ModalPayCheck } from '../../components/ModalPayCheck';

export const Extract = () => {

    const [allPayCheks, setAllPayCheks] = useState({});

    const [activeModal, setActiveModal] = useState(false);

    const [paySelected, setPaySelected] = useState('');

    const getAllPayCheks = async () => {
        const response = await loadPayCheks();

        setAllPayCheks(response);
    };

    const hundleSelectedPay = (item) => {
        setPaySelected(item);
        setActiveModal(true)
    };

    const hundleDelete = async () => {
        await deletePayCheks(paySelected);
        setActiveModal(false);

        getAllPayCheks();
    };

    useEffect(() => {
        getAllPayCheks();
    }, [])

    useFocusEffect(useCallback(() => {
        getAllPayCheks();
    }, []))

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />

            <Header />


            <View style={styles.areaTitleMyPays}>
                <Text style={styles.txtMyPays}>Meus extratos</Text>

                <Text style={styles.txtLength}>{allPayCheks.length} pagos</Text>
            </View>

            {
                allPayCheks.length == 0

                && (
                    <View style={styles.areaWithoutExtracts}>
                        <Text style={styles.txtWithoutExtracts}>Você não possui nenhum {'\n'} extrato ainda 🙂</Text>
                    </View>
                )
            }

            <View style={{ width: '100%', height: 400, alignItems: 'center' }}>
                <FlatList
                    keyExtractor={(item) => String(item.dataBarCode)}
                    data={allPayCheks}
                    renderItem={({ item }) => (
                        <CardDetailsPays onpress={() => hundleSelectedPay(item)} nome={item.nomeBoleto} valor={item.valorBoleto} venc={item.vencBoleto} />
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>


            <Modal visible={activeModal} transparent animationType='slide'>

                <TouchableOpacity activeOpacity={1} onPress={() => setActiveModal(false)} style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.7)'
                }} />

                <ModalPayCheck pay={paySelected} onPressDelete={hundleDelete} />
            </Modal>
        </View>
    );
}