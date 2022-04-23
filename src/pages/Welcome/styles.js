import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background
  },

  areaImage: {
    height: 315,
    width: '100%',
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontFamily: theme.fonts.lexendSemiBold,
    fontSize: 32,
    color: theme.colors.heading,
    textAlign: 'center',
    marginTop: 25
  },

  button: {
    width: 295,
    height: 56,
    flexDirection: 'row',
    backgroundColor: theme.colors.boxes,
    borderRadius: 5,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9E9EB'
  },

  txtButton: {
    fontFamily: theme.fonts.interRegular,
    fontSize: 15,
    color: '#666666',
    marginLeft: 50
  },

  areaIcon: {
    height: 56,
    width: 56,
    borderRightWidth: 1,
    borderRightColor: '#E9E9EB',
    position: 'absolute',
    left: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});