import React, {useState, useContext} from 'react'
import {View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import {styles} from './styles'
import {UserContext} from '../../../context/UserContext'
const ScreenFour = ({navigation}) =>{
    const {password, setPassword} = useContext(UserContext)
    return (
     <ScrollView style={{flex: 1, backgroundColor: '#EF6E6E'}}>
        <View style={styles.scrollContainer}>
                <View style={styles.containerHello}>
                    <Text style={styles.text}>PERFEITO!</Text>
                </View>
                <Text style={[styles.text]}>Agora preciso que você</Text>
                <Text style={[styles.text, {textDecorationLine: 'underline', marginBottom: '5%'}]}>Digite uma Senha!</Text>
                <TextInput value={password} onChangeText={password => setPassword(password)} placeholder={"Senha"} style={styles.input}  secureTextEntry={true} passwordRules={'required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;'}/>
                <TextInput placeholder={"Confirmar Senha"} style={styles.input} secureTextEntry={true} passwordRules={'required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;'}/>
                
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("ScreenFive")}}>
                    <Text style={[styles.text, {marginLeft: 0, color: '#EF6E6E', textAlign: 'center'}]}>CONTINUAR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

export default ScreenFour