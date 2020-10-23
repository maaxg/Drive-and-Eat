import React, {useState, useContext} from 'react'
import {View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {styles} from '../../styles/HomeStyles'
import {UserContext} from '../../context/UserContext'
import {login} from '../../db/userFunc'
const COLOR_DEFAULT_THEME = '#56CCF2'
const Login = ({press, navigation}) =>{
    const {email, setEmail, password, setPassword, setLogged } = useContext(UserContext)
    async function doLogin()
    {
        const user = await login(email, password)
        if(user !== undefined)
        {
            setLogged(true)
            console.log(user)
        }
    }

    return(
        <ScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
            <View style={styles.loginView}>
                <Image source={require('../../../assets/img/Logo_TourStop.png')} style={styles.logo} />
                <TextInput placeholderTextColor={COLOR_DEFAULT_THEME} placeholder={"Email"} value={email} onChangeText={email => setEmail(email)} style={styles.input}/>
                <TextInput placeholderTextColor={COLOR_DEFAULT_THEME} placeholder={"Password"} value={password} secureTextEntry={true} onChangeText={password => setPassword(password)} style={styles.input}/>
                <TouchableOpacity style={styles.loginButton} onPress={() => {doLogin()}}>
                    <Text style={styles.doLogin}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={(press)}>
                    <Text style={{fontSize: 25, textDecorationLine: 'underline', color: COLOR_DEFAULT_THEME, marginTop: '5%'}}>I dont have an account</Text>

                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Login