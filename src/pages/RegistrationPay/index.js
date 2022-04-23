import React from 'react';

import {
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    Keyboard,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

import { styles } from './styles';

import { useRoute } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../styles/theme';
import { InputRegistration } from '../../components/InputRegistration';

import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react/cjs/react.development';
import { savePayment } from '../../Storage';

export const RegistrationPay = () => {

    const Route = useRoute();

    const { data } = Route.params;


    const [nomeBoleto, setNomeBoleto] = useState('');
    const [vencBoleto, setVencBoleto] = useState('');
    const [valorBoleto, setValorBoleto] = useState('');
    const [dataBarCode, setDataBarCode] = useState('');

    const setDataCode = () => {
        setDataBarCode(data);
    };

    useEffect(() => {
        setDataCode();
    }, []);


    const hundleSavePay = async () => {

        const payment = {
            nomeBoleto,
            vencBoleto,
            valorBoleto,
            dataBarCode,
            extract: false
        };

        if (nomeBoleto != '' && vencBoleto != '' && valorBoleto != '' && dataBarCode != '') {
            await savePayment(payment);
            navigation.navigate('Main')

        } else {
            alert('Opss! Preencha todos os campos por favor!')
        }


    };

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'position' : 'height'} enabled>

                <StatusBar translucent barStyle='dark-content' />

                <View style={styles.areaBack}>
                    <MaterialCommunityIcons name="arrow-left" size={32} color={theme.colors.inputs} onPress={() => navigation.navigate('Main')} />
                </View>

                <View style={styles.content}>

                    <Text style={styles.txtTitle}>Preencha os dados {'\n'} do boleto</Text>

                    <InputRegistration icon='file' placeholder='Nome do boleto' onchangetext={text => setNomeBoleto(text)} />
                    <InputRegistration icon='venc' placeholder='Vencimento' onchangetext={text => setVencBoleto(text)} />
                    <InputRegistration icon='val' placeholder='Valor' onchangetext={text => setValorBoleto(text)} />
                    <InputRegistration icon='code' placeholder='Código' value={dataBarCode} />

                </View>

                <View style={styles.areaButtons}>
                    <TouchableOpacity style={styles.btnNo} onPress={() => navigation.navigate('Main')}>
                        <Text style={styles.txtBtnNo}>Cancelar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnYes} onPress={hundleSavePay}>
                        <Text style={styles.txtBtnYes}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        </View>
    );
}