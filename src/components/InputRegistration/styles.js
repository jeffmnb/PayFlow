import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 370,
        height: 60,
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor:theme.colors.stroke,
        marginBottom:15
    },

    areaIcon: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth:1,
        borderRightColor:theme.colors.stroke
    },

    txtInput:{
        width:'85%',
        paddingLeft:15,
        fontFamily:theme.fonts.interRegular,
        fontSize:15,
        color:theme.colors.body
    }
});