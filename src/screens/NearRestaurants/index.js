import React, { useState, useEffect, useContext } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Restaurants from '../../components/Restaurants'
import { styles } from './styles'
import { Header } from 'react-native-elements'
import { UserContext } from '../../context/UserContext'
import HamburguerButton from '../../components/HamburguerButton/index'
const NearRestaurants = ({ navigation }) => {
    const { theme } = useContext(UserContext)
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Header
                    backgroundColor={theme}
                    placement={"right"}
                    leftComponent={() => {
                        return (
                            <View style={styles.hamburguerContainer}>
                                <HamburguerButton press={() => { navigation.openDrawer(); }} top={10} />
                            </View>
                        )
                    }}
                    centerComponent={{
                        text: "Hey, some restaurants near you",
                        style: styles.title
                    }}
                />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Restaurants fromNear={true} />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default NearRestaurants