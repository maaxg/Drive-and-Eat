import React, {useState, useRef, useContext} from 'react'
import {View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {styles} from '../styles/HomeStyles'
import DrawerBottom from '../components/DrawerBottom'
import {UserContext} from '../context/UserContext'
import HamburguerButton from '../components/HamburguerButton'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; 

import Login from './login/Login'
const COLOR_DEFAULT_THEME = '#56CCF2'
const Home = ({ navigation }) => {

    const {theme, logged, login} = useContext(UserContext)
   
    if(!logged)
    {
        return(
            <Login press={() => navigation.navigate("ScreenOne")}/>
            )
    }
    else
    {
        return(
            <View style={styles.container}>
                <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={StyleSheet.absoluteFillObject}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
                    />
    
                <HamburguerButton press={() => {navigation.openDrawer();}} />
                <DrawerBottom />
                
            
            </View>
            )
        }

}

export default Home