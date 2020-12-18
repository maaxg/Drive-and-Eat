import React, {useContext} from 'react'
import {View, Text, TouchableNativeFeedback, ScrollView, SafeAreaView, Linking} from 'react-native'
import DrawerContent from '../../screens/DrawerContent'
import {DrawerItem} from '@react-navigation/drawer'
import {styles} from '../DrawerDefaultComponent/DrawerDefaultComponent'
import { Icon } from 'react-native-elements';
import {UserContext} from '../../context/UserContext'

const DrawerDefaultItems = (props) =>
{
    const {theme}= useContext(UserContext)

    return(
        <DrawerItem 
                label={() =>(
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                     <Icon
                            name={`${props.iconName}`}
                            type='font-awesome'
                            size={24}
                            color={theme}
                            containerStyle={{ marginRight: '10%' }}
                        />
                    <Text style={{color: '#000', fontWeight: 'bold', fontSize: 18}}>{props.drawerName}</Text>
                </View>
                )}
                onPress={() => props.onPress()}
            />
       
    )
}

export default DrawerDefaultItems