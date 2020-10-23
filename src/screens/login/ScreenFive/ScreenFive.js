import React, {useState, useContext} from 'react'
import {View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import {styles} from './styles'
import {register} from '../../../db/userFunc'
import {UserContext} from '../../../context/UserContext'
const ScreenFive = ({navigation}) =>{
    const {name, phone, birth,  email, password} = useContext(UserContext)
    async function conReg()
    {
        await register(name, email, password, birth, phone)
        //navigation.navigate("Home")
    }
    return (
     <ScrollView style={{flex: 1, backgroundColor: '#EF6E6E'}}>
        <View style={styles.scrollContainer}>
                <View style={styles.containerHello}>
                    <Text style={styles.text}>Incrível, {name}</Text>
                </View>
                <Text style={[styles.text]}>Um SMS de Confirmação</Text>
                <Text style={[styles.text, {marginBottom: '5%'}]}>Foi Enviado para Você</Text>
                <Text style={[styles.text, {fontSize: 20, marginBottom: '5%', fontWeight: '700'}]}>Digite o código que lhe foi enviado!</Text>
                <TextInput placeholder={"Código"} style={styles.input} keyboardType={"phone-pad"}/>
                
                
                <TouchableOpacity style={styles.button} onPress={() => {conReg()}}>
                    <Text style={[styles.text, {marginLeft: 0, color: '#EF6E6E', textAlign: 'center'}]}>CONTINUAR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

export default ScreenFive