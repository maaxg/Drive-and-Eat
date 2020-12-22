import React, {useRef, useContext, useEffect, useState} from 'react'
import {View, Text, Image} from 'react-native'
import {styles} from './DrawerContentStyles'
import {UserContext} from '../../context/UserContext'
import Restaurants from '../../components/Restaurants'
const DrawerContent = (restaurants) => {
    const {theme, name} = useContext(UserContext)
    const [hour, setHour] = useState(null)
    useEffect(() =>{
        if(hour === null){
            getHour()
        }
    }, [hour])
    async function getHour(){
        const date = new Date()
        setHour(date.getHours())
    }
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
                    <Text style={{fontWeight: '200', fontSize: 25, }}>{
                    hour >= 6 && hour <= 11 ? "ITS BREAKFAST TIME!":
                    hour >=11 && hour <= 15 ? "ITS LUNCH TIME":
                    hour >= 15 && hour <= 18 ? "It's to a snack" :
                    hour >= 18 && hour <= 23 ? "ITS DINNER TIME":
                    "You want to eat something?"}</Text>
                    <Restaurants />
                </View>
        </View>
    )
}
export default DrawerContent