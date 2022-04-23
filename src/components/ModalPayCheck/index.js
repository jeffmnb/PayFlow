import React from 'react';

import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { styles } from './styles';

import IconTrash from '../../assets/IconTrash.svg';

export const ModalPayCheck = ({ onPressDelete }) => {
    return (

        <View style={styles.container}>

            <View style={styles.areaModal}>

                <Text style={styles.txtModal}>Boleto pago : )</Text>

                <TouchableOpacity style={styles.areaDelete} onPress={onPressDelete}>
                    <IconTrash />
                    <Text style={styles.txtDelete}>Deletar dos extratos</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}