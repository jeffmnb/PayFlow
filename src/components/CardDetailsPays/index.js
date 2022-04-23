import React from 'react';

import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { styles } from './styles';

export const CardDetailsPays = ({onpress, nome, valor, venc}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onpress}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <View>
                    <Text style={styles.txtName}>{nome}</Text>
                    <Text style={styles.txtDueDate}>Vence em {venc}</Text>
                </View>

                <Text style={styles.txtPrice}>R$ {valor}</Text>

            </View>

        </TouchableOpacity>
    );
}