import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:theme.colors.background
    },

    areaLengthPay: {
        width: '88%',
        height: 80,
        backgroundColor: theme.colors.secundary,
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: '19%'
    },

    areaTxtLength: {
        width: 170,
        height: 40,
    },

    txtLength: {
        fontFamily: theme.fonts.interRegular,
        fontSize: 13,
        color: theme.colors.background,
        lineHeight:20
    },

    areaTitleMyPays: {
        width: '88%',
        height: 80,
        marginTop: 40,
        justifyContent: 'center',
        borderBottomWidth:1,
        borderBottomColor:theme.colors.stroke
    },

    txtMyPays: {
        fontFamily: theme.fonts.lexendSemiBold,
        fontSize: 23,
        color: theme.colors.heading
    },

    txtNotPays:{
        fontFamily:theme.fonts.interRegular,
        fontSize:20,
        color:theme.colors.body,
        textAlign:'center',
        lineHeight:35
    }
});