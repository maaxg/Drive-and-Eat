import React, {useState, useContext} from 'react'
import {View, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import {styles} from './styles'
import {UserContext} from '../../../context/UserContext'
const ScreenTwo = ({navigation}) =>{
    const {name} = useContext(UserContext)
    return (
      <View style={styles.scrollContainer}>
            <View style={styles.containerHello}>
                <Text style={styles.text}>Ooi, {name} :)</Text>
                <Text style={[styles.text, {marginBottom: '5%'}]}>Fico feliz que esteja aqui!</Text>
                <Text style={styles.text}>Preciso de mais algumas informações</Text>
            </View>
            <Text style={[styles.text, {marginBottom: '5%'}]}>Vamos Continuar?</Text>
            <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("ScreenThree")}}>
                <Text style={[styles.text, {marginLeft: 0, color: '#EF6E6E', textAlign: 'center'}]}>CONTINUAR</Text>
            </TouchableOpacity>
        </View>

    )
}

export default ScreenTwo