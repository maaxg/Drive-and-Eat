import React, {useRef, useContext} from 'react'
import {View, Text} from 'react-native'
import {styles} from '../styles/DrawerContentStyles'
import {UserContext} from '../context/UserContext'
import Restaurants from './Restaurants'
const DrawerContent = () => {
    const {theme, name} = useContext(UserContext)
    return (
        <View style={{height: 700, backgroundColor: '#FFF', borderColor: theme, borderWidth: 1, borderTopRightRadius: 15, borderTopLeftRadius: 15,  alignItems: 'center'}}>
            <View style={styles.tabTop}/>
            <View style={styles.userInfoContainer}>
                <View style={{width: 100, height: 100, borderRadius: 50, borderWidth: 1, marginBottom: 20}}/>
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