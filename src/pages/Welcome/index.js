import React from 'react';

import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';

import ImageWelcome from '../../assets/ImageWelcome.svg';
import IconBarCode from '../../assets/IconBarCode.svg';
import IconInputCode from '../../assets/IconInputCode.svg';


export const Welcome = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.areaImage}>
                <View style={{ marginTop: '50%' }}>
                    <ImageWelcome />
                </View>
            </View>

            <View style={{ marginTop: '40%', alignItems: 'center' }}>
                <IconBarCode />

                <Text style={styles.title}> Organize seus {'\n'} boletos em um {'\n'} só lugar</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>

                    <View style={styles.areaIcon}>
                        <IconInputCode />
                    </View>

                    <Text style={styles.txtButton}>Quero começar !</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}