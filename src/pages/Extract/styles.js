import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.colors.background
    },

    areaTitleMyPays: {
        width: '88%',
        height: 80,
        marginTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.stroke,
        flexDirection: 'row'
    },

    txtMyPays: {
        fontFamily: theme.fonts.lexendSemiBold,
        fontSize: 23,
        color: theme.colors.heading
    },

    txtLength: {
        fontFamily: theme.fonts.interRegular,
        color: theme.colors.body,
        fontSize: 13
    },

    areaWithoutExtracts: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtWithoutExtracts:{
        fontFamily:theme.fonts.interRegular,
        fontSize:20,
        color:theme.colors.body,
        textAlign:'center',
        lineHeight:35
    }
});