import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 370,
        height: 85,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        borderTopWidth:1,
        borderTopColor:theme.colors.stroke
    },

    txtName: {
        fontFamily: theme.fonts.lexendSemiBold,
        fontSize: 17,
        color: theme.colors.heading
    },

    txtDueDate: {
        fontFamily: theme.fonts.interRegular,
        fontSize: 13,
        color: theme.colors.body,
        marginTop:5
    },

    txtPrice:{
        fontFamily: theme.fonts.interMedium,
        fontSize: 16,
        color: theme.colors.heading,
    }
});