import React, {useContext} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import UserInfo from '../../components/UserInfo';
import {UserContext} from '../../context/UserContext';
import HamburguerButton from '../../components/HamburguerButton';
import {styles} from './styles';
const Profile = ({navigation}) => {
  const {theme, email, phone} = useContext(UserContext);
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={[styles.contanier, {backgroundColor: theme}]}>
        <UserInfo />
        <HamburguerButton press={() => navigation.openDrawer()} />
        <Text style={styles.email}>Email: {email}</Text>
        <Text style={styles.phone}>Telefone: {phone}</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={[styles.visitedPlaces, {color: theme}]}>
          Alguns Lugares que você já visitou:
        </Text>
        <View style={styles.rowContanier}>
          <View style={styles.card} />
          <View style={styles.card} />
          <View style={styles.card} />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, {borderColor: theme}]}
        onPress={() => {
          navigation.navigate('ScreenThree');
        }}>
        <Text style={[styles.continue, {color: theme}]}>CONTINUAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Profile;
