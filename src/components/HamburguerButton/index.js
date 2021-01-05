import React, {useContext} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'
import {UserContext} from '../../context/UserContext'

const HamburguerButton = ({navigation, press, top, left}) =>
{   
    console.log(top)
    const {theme} = useContext(UserContext)
    const styleTop = {backgroundColor: theme, top: top }
    return(
        <TouchableOpacity 
            onPress = {press}
        style={top === undefined ? [styles.toggleButton, {backgroundColor: theme}] : [styleTop, styles.toggleButtonNoTop]}>
            <Icon
                name='bars'
                type='font-awesome'
                size={30}
                color={'#FFF'}
                        />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    toggleButton:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', 
        top: 45, 
        left: 15, 
        width: 40, 
        height: 40,
        borderRadius: 20,  
        backgroundColor: '#FFF'
    },
    toggleButtonNoTop:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', 
        left: 15, 
        width: 40, 
        height: 40,
        borderRadius: 20,  
    },
})

export default HamburguerButton