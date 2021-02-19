import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {UserContext} from '../../context/UserContext';
import AsyncStorage from '@react-native-community/async-storage';

const ColorPalette = () => {
  const {setTheme} = useContext(UserContext);
  async function setThemeColor(theme) {
    setTheme(theme);
    await AsyncStorage.setItem('theme', theme);
  }
  return (
    <View style={styles.containerPallete}>
      <Text style={styles.themeText}>Choose your theme: </Text>
      <View style={styles.containerBtns}>
        <TouchableOpacity
          style={styles.buttonTheme}
          onPress={() => setThemeColor('#000000')}
        />
        <TouchableOpacity
          style={[styles.buttonTheme, {backgroundColor: '#EF6E6E'}]}
          onPress={() => setThemeColor('#EF6E6E')}
        />
        <TouchableOpacity
          style={[styles.buttonTheme, {backgroundColor: '#56CCF2'}]}
          onPress={() => setThemeColor('#56CCF2')}
        />
        <TouchableOpacity
          style={[styles.buttonTheme, {backgroundColor: '#2F80ED'}]}
          onPress={() => setThemeColor('#2F80ED')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerPallete: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeText: {
    fontSize: 16,
    marginLeft: '3%',
    marginRight: '30%',
  },
  containerBtns: {
    flexDirection: 'row',
    margin: '1%',
  },
  buttonTheme: {
    margin: '3%',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#000000',
  },
});
export default ColorPalette;
