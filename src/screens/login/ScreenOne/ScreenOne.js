import React, {useContext} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import {UserContext} from '../../../context/UserContext';
const ScreenOne = ({navigation}) => {
  const {name, setName} = useContext(UserContext);
  return (
    <View style={styles.scrollContainer}>
      <View style={styles.containerHello}>
        <Text style={styles.text}>Olá, :)</Text>
        <Text style={styles.text}>Seja Bem-Vindo(a)</Text>
      </View>
      <Text style={[styles.text, {marginBottom: '5%'}]}>
        Como Você se Chama?
      </Text>
      <TextInput
        value={name}
        onChangeText={(name) => setName(name)}
        placeholder={'Digite seu nome!'}
        style={styles.input}
        onSubmitEditing={() => navigation.navigate('ScreenTwo')}
      />
    </View>
  );
};

export default ScreenOne;
