import { StyleSheet } from 'react-native';

export const COLOR_PRIMARY = "#00FFC6"
export const COLOR_BACKGROUND = "#031821"
export const PAGE_PADDING = 20

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
        backgroundColor: COLOR_BACKGROUND,
        height: "100%",
        paddingHorizontal: PAGE_PADDING,
    },
    cont: {
      marginBottom: PAGE_PADDING,
    }
  });