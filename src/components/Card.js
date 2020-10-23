import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import {Icon}from 'react-native-elements'


const Card = ({image, description, stars, distance}) =>
{
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text>{image}</Text>
            </View>
                <View style={styles.infos}>
                    <Text style={styles.text}>{description}</Text>
                    <Text style={styles.text}> - {stars}</Text>
                    <Icon 
                        name='star'
                        type='font-awesome'
                        size={15}
                        color={'#f7cb07'}
                    />
                </View>
                <View style={styles.infos}>
                    <Text style={styles.text}>{distance}KM from you</Text>
                </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    card:
    {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').height / 5,
        margin: 10,
        backgroundColor: '#E1E1E1'
    },
    infos:
    {
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%'
    },
    text:{
        fontFamily: 'sans-serif-condensed',
        fontWeight: '200'
    },
    
})
export default Card