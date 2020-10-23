import React, {useContext} from 'react'
import {Avatar} from 'react-native-elements';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {UserContext} from '../context/UserContext'
const UserInfo = () =>{
    const {theme} = useContext(UserContext)

   
        return(
            <View style={[styles.userInfo, {backgroundColor: theme}]}>
                    <Avatar size='large' avatarStyle={{marginTop: 10}}  rounded icon={{ name: 'user-circle-o', type: 'font-awesome', size: 80 }} />
                    <Text style={[styles.userName,  {color: '#FFF'}]}>Jhon Khalaham</Text>
                    <Text style={styles.userPoints}>Points: 15,000</Text>
            </View>
        )
    
}
const styles = StyleSheet.create({
    userInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EF6E6E',
        paddingBottom: 20,
      },
      userName:{
        fontSize: 25,
        },
    userPoints:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#14fcf5'
    },
})
export default UserInfo