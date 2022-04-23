import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center'
    },

    areaBack: {
        width: '100%',
        marginTop: '15%',
        height: 55,
        paddingHorizontal: 15
    },

    txtTitle: {
        fontFamily: theme.fonts.lexendSemiBold,
        fontSize: 20,
        color: theme.colors.heading,
        textAlign: 'center',
        marginBottom: 50,
        marginTop: 30
    },

    areaButtons: {
        flexDirection: 'row',
        marginTop:30,
        justifyContent:'space-around'
    },


    btnNo: {
        width: 156,
        height: 55,
        backgroundColor: theme.colors.boxes,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: theme.colors.stroke,
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      txtBtnNo: {
        fontFamily: theme.fonts.interRegular,
        fontSize: 15,
        color: '#666666'
      },
    
      btnYes: {
        width: 156,
        height: 55,
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      txtBtnYes: {
        fontFamily: theme.fonts.interRegular,
        fontSize: 15,
        color: theme.colors.background
      },
});