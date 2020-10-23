import React, {useContext, useState} from 'react'
import {View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import {styles} from './styles'
import {UserContext} from '../../../context/UserContext'
const ScreenThree = ({navigation}) =>{

    const {phone, setPhone, birth, setBirth, email, setEmail, } = useContext(UserContext)
    return (
     <ScrollView style={{flex: 1, backgroundColor: '#EF6E6E'}}>
        <View style={styles.scrollContainer}>
                <View style={styles.containerHello}>
                    <Text style={styles.text}>Você é IIINCRÍVEL!</Text>
                </View>
                <Text style={[styles.text]}>Agora preciso do seu</Text>
                <Text style={[styles.text, {textDecorationLine: 'underline', marginBottom: '5%'}]}>Email e número de Telefone</Text>
                <TextInput  value={email} onChangeText={email => setEmail(email)} 
                placeholder={"Digite seu email"} style={styles.input}/>
                <TextInput  value={phone} onChangeText={phone => setPhone(phone)}  
                placeholder={"Digite seu Telefone"} style={styles.input}/>
                <TextInput  value={birth} onChangeText={birth => setBirth(birth)}  
                placeholder={"Data de Nascimento"} style={styles.input}/>
                
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("ScreenFour")}}>
                    <Text style={[styles.text, {marginLeft: 0, color: '#EF6E6E', textAlign: 'center'}]}>CONTINUAR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

export default ScreenThree