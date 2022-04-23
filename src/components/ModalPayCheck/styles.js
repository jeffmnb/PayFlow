import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({

  areaModal: {
    width: '100%',
    height: 150,
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

  areaDelete: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop:'7%'
  },

  txtDelete: {
    fontFamily: theme.fonts.interRegular,
    fontSize: 15,
    color: theme.colors.delete,
    marginLeft: 16,
  }
});