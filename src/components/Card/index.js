import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import {Icon}from 'react-native-elements'


const Card = ({image, description, stars, distance}) =>
{
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                {
                    image !== undefined
                    ?
                    <Image source={{uri: image}}
                    style={{
                        resizeMode: 'contain',
                        width: 150,
                        height: 150,
                        borderRadius: 8,
                    }}
                    />
                    :
                    <Text>Restaurant Pic</Text>
                }
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
        width: '50%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card:
    {
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').height / 5,
    },
    infos:
    {
        width: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text:{
        fontFamily: 'sans-serif-condensed',
        fontWeight: '200'
    },
    
})
export default Card