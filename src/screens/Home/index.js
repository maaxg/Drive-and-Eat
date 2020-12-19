import React, { useState, useRef, useContext, useEffect } from 'react'
import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import { styles } from './HomeStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DrawerBottom from '../../components/DrawerBottom'
import { UserContext } from '../../context/UserContext'
import HamburguerButton from '../../components/HamburguerButton'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'

import Login from '../login/Login'
const COLOR_DEFAULT_THEME = '#56CCF2'
const Home = ({ navigation }) => {
    const [load, setLoad] = useState(false)
    const [error, setError] = useState()
    const { logged, getNearRestaurants, loadingRestaurants, isFirstTimeHome } = useContext(UserContext)
    const [region, setRegion] = useState({})
    const [restaurants, setRestaurants] = useState([])
    console.log(isFirstTimeHome)
    useEffect(() => {
        if(isFirstTimeHome){
            defineNearRests()
        }
    }, [isFirstTimeHome])
    async function defineNearRests() {
        setRestaurants(await getNearRestaurants())

    }
    function getCurrentPosition() {
        try {
            setLoad(true)
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
                (error) => {
                    setLoad(false);
                    setError({ error: error.message })
                    getCurrentPosition()
                },

                { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
                setLoad(false)
            );
        } catch (err) {
            console.log(err)
        }

    }
    if (!logged) {
        return (
            <Login press={() => navigation.navigate("ScreenOne")} />
        )
    }
    if (load || loadingRestaurants) {
        console.log("oioioi")
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <ActivityIndicator size={'large'} animating={true} color={"#144F66"} />
            </View>

        )

    }
    else {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={StyleSheet.absoluteFillObject}
                    onMapReady={() => getCurrentPosition()}
                    followsUserLocation={true}
                    region={{
                        latitude: -8.0306,
                        longitude: -34.9160,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    
                    <Marker
                        key={"1"}
                        coordinate={{ latitude: -8.0306, longitude: -34.9160 }}
                        title={"Here i'm"}
                        description={"Onde estou"}
                    >
                        <Image source={require("../../../assets/img/my_pic.jpeg")}
                                            style={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: 20,
                                            }}/>
                        </Marker>

                    {
                        restaurants != "" || restaurants !== undefined
                            ?
                            restaurants.map(item => {
                                return (
                                    <Marker
                                        pinColor={'blue'}
                                        key={item.place_id}
                                        coordinate={{ latitude: item.geometry.location.lat, longitude: item.geometry.location.lng }}
                                        title={item.name}
                                        description={item.vicinity}
                                    >
                                        <Image source={require("../../../assets/img/restaurant_icon.png")}
                                            style={{
                                                width: 30,
                                                height: 30
                                            }}
                                        />
                                    </Marker>

                                )
                            })
                            :
                            null
                    }

                </MapView>

                <HamburguerButton press={() => { navigation.openDrawer(); }} />
                {
                        restaurants != "" || restaurants !== undefined
                            ?
                            <DrawerBottom />
                            :
                            null
                }


            </View>
        )
    }

}

export default Home