import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Restaurants from '../../components/Restaurants'
import { styles } from './styles'
import { Header } from 'react-native-elements'
import HamburguerButton from '../../components/HamburguerButton/index'
const NearRestaurants = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.hamburguerContainer}>
                <HamburguerButton press={() => { navigation.openDrawer(); }} />
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.title}>Restaurants near you</Text>
                <Restaurants fromNear={true} />
            </View>
        </View>
    )
}

export default NearRestaurants