import React, {useContext} from 'react';
import {UserContext} from '../../context/UserContext';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
const OutAndDevBtns = () => {
  const {theme, setLogged} = useContext(UserContext);
  async function logout() {
    await AsyncStorage.clear();
    setLogged(false);
  }
  return (
    <View>
      <TouchableNativeFeedback
        onPress={() => {
          logout();
        }}>
        <View style={styles.containDrawerOption}>
          <Icon
            name="logout"
            type="simple-line-icon"
            size={20}
            color={theme}
            containerStyle={{marginRight: '10%'}}
          />
          <Text style={styles.logout}>Logout</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
        onPress={() => {
          Alert.alert(
            'Hey, how are you?',
            "My name is Max, you can follow me in github if you want its 'maaxg'",
          );
        }}>
        <View style={styles.containDrawerOption}>
          <Icon
            name="user-secret"
            type="font-awesome"
            size={24}
            color={theme}
            containerStyle={{marginRight: '10%'}}
          />
          <Text style={styles.developer}>Developer</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  containDrawerOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#d6d4d4',
    borderWidth: 0.5,
    borderColor: '#000000',
    height: 35,
  },
  developer: {
    color: 'black',
    fontFamily: 'sans-serif-medium',
    fontSize: 22,
  },
  logout: {
    color: 'black',
    fontFamily: 'sans-serif-medium',
    fontSize: 22,
  },
});

export default OutAndDevBtns;
