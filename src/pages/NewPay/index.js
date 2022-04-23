import React, { useState, useEffect, useCallback } from 'react';
import { View, Vibration } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { useFocusEffect } from '@react-navigation/core';
import theme from '../../styles/theme';

export const NewPay = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const navigation = useNavigation();

    const askForCameraPermission = async () => {

        const { status } = await BarCodeScanner.getPermissionsAsync();
        setHasPermission(status == 'granted');
    };

    useEffect(() => {
        askForCameraPermission();
    }, []);

    useFocusEffect(useCallback(() => {
        setHasPermission(null);
        setScanned(false);
        askForCameraPermission();
    }, []))


    const hundleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        Vibration.vibrate();

        navigation.navigate('RegistrationPay', { data })

    };


    // if (hasPermission === null) {
    //     alert('Favor permitir o uso da camera')
    //     askForCameraPermission();
    // };


    // if (hasPermission == false) {
    //     alert('Você nao permitiu a camera');
    //     askForCameraPermission();
    // }

    return (
        <View style={styles.container}>

            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : hundleBarCodeScanned}
                barCodeTypes='interleaved2of5'
                style={{ width: 600, height: 800, marginTop:'32%' }}
            />

            <View style={{ position: 'absolute', width: 130, height: '100%', backgroundColor: theme.colors.primary, left: 0 }} />

            <View style={{ position: 'absolute', width: 130, height: '100%', backgroundColor: theme.colors.primary, right: 0 }} />

        </View>

    );
}
