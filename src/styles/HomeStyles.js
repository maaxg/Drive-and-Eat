import {StyleSheet, Dimensions} from 'react-native'
const COLOR_DEFAULT_THEME = '#56CCF2'
export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        height: 800,
        width: '100%',
      },
      loginView:{
        backgroundColor: '#FFF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      
      },
      logo:{
        width: 300,
        height: 300,
      },
      input:{
        paddingLeft: 20,
        width: '80%',
        height: 60,
        margin: '5%',
        borderWidth: 0.4,
        color: COLOR_DEFAULT_THEME,
        backgroundColor: '#FFF',
        borderColor: COLOR_DEFAULT_THEME,
        borderRadius: 8
      },
      loginButton:{
          width: '50%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          backgroundColor: '#FFF',
          borderColor: COLOR_DEFAULT_THEME
      },
      doLogin:{
        color: COLOR_DEFAULT_THEME,
        fontSize: 22,
        fontFamily: 'sans-serif-condensed'
        
      }
     
})