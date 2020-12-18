import React, {useRef, useContext} from 'react'
import {View, Text, Image} from 'react-native'
import {styles} from './DrawerContentStyles'
import {UserContext} from '../../context/UserContext'
import Restaurants from '../Restaurants'
const DrawerContent = (restaurants) => {
    const {theme, name} = useContext(UserContext)
    return (
        <View style={[styles.container, {borderColor: theme,}]}>
            <View style={styles.tabTop}/>
            <View style={styles.userInfoContainer}>
                <Image source={require("../../../assets/img/my_pic.jpeg")} style={styles.profilePic}/>
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userPoints}>Points: 15,000</Text>
                </View>
            </View>
                <View style={styles.restaurants}>
                    <Text style={{fontWeight: '200', fontSize: 25, }}>IT'S DINNER TIME!</Text>
                    <Text style={{fontWeight: '100', fontSize: 16, color: '#717171' }}>Restaurants near you</Text>
                    <Restaurants />
                </View>
        </View>
    )
}
export default DrawerContent