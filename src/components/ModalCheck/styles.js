import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({

  areaModal: {
    width: '100%',
    height: 310,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center'
  },

  txtModal: {
    fontFamily: theme.fonts.lexendRegular,
    fontSize: 20,
    color: theme.colors.heading,
    textAlign: 'center',
    marginTop: 30,
    lineHeight: 30
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

  actionsArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 35,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.stroke
  },

  areaDelete: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  txtDelete: {
    fontFamily: theme.fonts.interRegular,
    fontSize: 15,
    color: theme.colors.delete,
    marginLeft: 16
  }
});