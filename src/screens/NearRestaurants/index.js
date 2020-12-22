import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Restaurants from '../../components/Restaurants'
import { styles } from './styles'
import {Header} from 'react-native-elements'
const NearRestaurants = () => {
    return (
        <View style={styles.container}>
            <Header placement="left"
                    centerComponent={{ text: 'Hey, there are some restaurants near your check it out!', style: styles.title }}
                    rightComponent={{ icon: 'restaurant', color: '#fff' }}
               />
        
      
            <Restaurants fromNear={true}/>
        </View>
    )
}

export default NearRestaurants