import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:185,
    backgroundColor:theme.colors.primary,
    paddingTop:'15%',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:25,
  },

  title:{
      fontFamily:theme.fonts.lexendRegular,
      fontSize:25,
      color: theme.colors.background,
      marginBottom:7
  },

  subTitle:{
      fontFamily:theme.fonts.interRegular,
      fontSize:14,
      color:theme.colors.boxes
  }
});