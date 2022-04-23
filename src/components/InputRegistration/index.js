import React from 'react';

import {
    TextInput,
    View
} from 'react-native';

import { styles } from './styles';

import IconInputFile from '../../assets/IconInputFile.svg';
import IconInputVenc from '../../assets/IconInputVenc.svg';
import IconInputVal from '../../assets/IconInputVal.svg';
import IconInputCode from '../../assets/IconInputCode.svg';

import theme from '../../styles/theme';

export const InputRegistration = ({ icon, placeholder, onchangetext, value }) => {
    return (
        <View style={styles.container}>
            <View style={styles.areaIcon}>
                {
                    icon == 'file' ? <IconInputFile /> :
                        icon == 'venc' ? <IconInputVenc /> :
                            icon == 'val' ? <IconInputVal /> :
                                icon == 'code' && <IconInputCode />
                }
            </View>

            <TextInput placeholder={placeholder}
                placeholderTextColor={theme.colors.inputs}
                style={styles.txtInput}
                onChangeText={onchangetext}
                value={value}
            />
        </View>
    );
}