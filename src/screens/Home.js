import React, {useState, useRef, useContext} from 'react'
import {View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {styles} from '../styles/HomeStyles'
import DrawerBottom from '../components/DrawerBottom'
import {UserContext} from '../context/UserContext'
import HamburguerButton from '../components/HamburguerButton'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; 
import Geolocation from '@react-native-community/geolocation'

import Login from './login/Login'
const COLOR_DEFAULT_THEME = '#56CCF2'
const Home = ({ navigation }) => {

    const {theme, logged, login} = useContext(UserContext)
    const [region, setRegion] = useState({})
    function getCurrentPosition()
    {
    Geolocation.getCurrentPosition(
        async (position) => {
          console.log("wokeeey");
          console.log(position);
          setRegion({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => { setLoad(false); setError({ error: error.message }) },
  
        { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
      );

    }
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
                onMapReady={() => getCurrentPosition()}
                region={{
                    latitude: region.latitude,
                    longitude: region.logitude,
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