import React from 'react';

import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import { styles } from './styles';

import IconTrash from '../../assets/IconTrash.svg';

export const ModalCheck = ({ onPressno, onPressYes, onPressDelete, pay }) => {
    return (

        <View style={styles.container}>

            <View style={styles.areaModal}>

                <Text style={styles.txtModal}>O boleto <Text style={{ fontWeight: 'bold' }}>{pay.nomeBoleto}</Text>  {'\n'} no valor de <Text style={{ fontWeight: 'bold' }}>R$ {pay.valorBoleto}</Text> {'\n'} foi pago ?</Text>


                <View style={styles.actionsArea}>
                    <TouchableOpacity style={styles.btnNo} onPress={onPressno}>
                        <Text style={styles.txtBtnNo}>Ainda não</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnYes} onPress={onPressYes}>
                        <Text style={styles.txtBtnYes}>Sim</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.areaDelete} onPress={onPressDelete}>
                    <IconTrash />
                    <Text style={styles.txtDelete}>Deletar boleto</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}