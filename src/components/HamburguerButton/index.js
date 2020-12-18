import React, {useContext} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Icon} from 'react-native-elements'
import {UserContext} from '../../context/UserContext'

const HamburguerButton = ({navigation, press}) =>
{
    const {theme} = useContext(UserContext)
    return(
        <TouchableOpacity 
            onPress = {press}
        style={[styles.toggleButton, {backgroundColor: theme}]}>
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
        top: 20, 
        left: 15, 
        width: 40, 
        height: 40,
        borderRadius: 20,  
        backgroundColor: '#FFF'
    }
})

export default HamburguerButton