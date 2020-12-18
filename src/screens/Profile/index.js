import React, {useContext} from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import UserInfo from '../../components/UserInfo'
import {UserContext} from '../../context/UserContext'
import HamburguerButton from '../../components/HamburguerButton'
const Profile = ({navigation}) =>
{
    const {theme, email, phone} = useContext(UserContext)
    return(
        <ScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
            <View style={{height: 300, backgroundColor: theme, width: '100%'}}>
                <UserInfo />
                <HamburguerButton press={() => navigation.openDrawer()}/>
                <Text style={{fontFamily: 'RobotoCondensed-Regular', color:"#FFF", fontSize: 24, margin: '5%'}}>Email: {email}</Text>
                <Text style={{fontFamily: 'RobotoCondensed-Regular', color:"#FFF", fontSize: 24, marginLeft: '5%'}}>Telefone: {phone}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontFamily: 'RobotoCondensed-Regular', color:theme, fontSize: 24}}>Alguns Lugares que você já visitou:</Text>
                <View style={{flexDirection: 'row', margin: '2%', marginBottom: '20%'}}>
                    <View style={{width: '25%', height: 80, backgroundColor: 'gray', margin: '2%'}}/>
                    <View style={{width: '25%', height: 80, backgroundColor: 'gray', margin: '2%'}}/>
                    <View style={{width: '25%', height: 80, backgroundColor: 'gray', margin: '2%'}}/>
                </View>
            </View>
            <TouchableOpacity style={{  left: '10%',
                                        width: '80%', 
                                        height: 70,
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#FFF', 
                                        borderWidth: 0.5,
                                        marginBottom: '5%',
                                        borderColor: theme
        }} onPress={() => {navigation.navigate("ScreenThree")}}>
                <Text style={[{marginLeft: 0, color: theme, textAlign: 'center', fontSize: 28}]}>CONTINUAR</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
export default Profile