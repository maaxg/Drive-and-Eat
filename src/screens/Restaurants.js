import React from 'react'
import {View, Text} from 'react-native'
import {styles} from '../styles/RestaurantsStyles'
import Card from '../components/Card'
const Restaurants = () =>
{
    return(
        <View style={styles.first_container}>
            <View style={styles.second_container}>
                <Card image={'Restaurant 1'} description={'Flor do Mar'} stars={'5'} distance={'0.5'}/>
                <Card image={'Restaurant 2'} description={'Chuva de Caju'} stars={'4.5'} distance={'0.1'}/>
            </View>
            <View style={styles.third_container}>
                <Card image={'Restaurant 3'} description={'Mar e Sol'} stars={'5'} distance={'0.3'}/>
                <Card image={'Restaurant 4'} description={'Sal e Brasa'} stars={'5'} distance={'0.4'}/>
            </View>
        </View>
    )
}

export default Restaurants