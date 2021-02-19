import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {UserContext} from '../../context/UserContext';
const UserInfo = () => {
  const {theme, name} = useContext(UserContext);
  return (
    <View style={[styles.userInfo, {backgroundColor: theme}]}>
      <Image
        source={require('../../../assets/img/my_pic.jpeg')}
        style={styles.image}
      />

      <Text style={[styles.userName, {color: '#FFF'}]}>{name}</Text>
      <Text style={styles.userPoints}>Points: 15,000</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  userInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF6E6E',
    paddingBottom: 20,
  },
  userName: {
    fontSize: 25,
  },
  userPoints: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#14fcf5',
  },
  image: {
    marginTop: '13%',
    resizeMode: 'contain',
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
export default UserInfo;
