import React from 'react';

import {
    Image,
    Text,
    View
} from 'react-native';

import { styles } from './styles';

export const Header = () => {
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.title}>Olá, <Text style={{ fontWeight: 'bold' }}>Jeferson</Text></Text>

                <Text style={styles.subTitle}>Mantenha suas contas em dia :)</Text>
            </View>

            <Image source={{ uri: 'https://github.com/jeffmnb.png' }} style={{ width: 60, height: 60, borderRadius: 5 }} />

        </View>
    );
}