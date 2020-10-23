import React, {useContext} from 'react'
import {UserContext} from '../../context/UserContext'
import {View, Text, TouchableNativeFeedback, StyleSheet, Alert} from 'react-native'
import { Avatar, Divider, Icon, Overlay} from 'react-native-elements';
const OutAndDevBtns = () =>
{
    const {theme} = useContext(UserContext)
    return (
        <View>
            <TouchableNativeFeedback  onPress={() => {alert('Saindo...')}}>
                <View style={styles.containDrawerOption}>
                <Icon
                name='logout'
                type='simple-line-icon'
                size={20}
                color={theme}
                containerStyle={{ marginRight: '10%' }}
            />
                    <Text style={{ color: 'black', fontFamily: 'sans-serif-medium', fontSize: 22 }}>Logout</Text>
                </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={() => {Alert.alert("Hey, how are you?", "My name is Max, you can follow me in github if you want its 'maaxg'")}}>
                <View style={styles.containDrawerOption}>
                <Icon
                    name='user-secret'
                    type='font-awesome'
                    size={24}
                    color={theme}
                    containerStyle={{ marginRight: '10%' }}
                />
                    <Text style={{ color: 'black', fontFamily: 'sans-serif-medium', fontSize: 22 }}>Developer</Text>
                </View>
        </TouchableNativeFeedback>
    </View> 
    )
}

const styles = StyleSheet.create({
    containDrawerOption:
    {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        backgroundColor: '#d6d4d4',
        borderWidth: 0.5,
        borderColor: '#000000',
        height: 35,
    }
})

export default OutAndDevBtns