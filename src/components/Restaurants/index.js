import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import { styles } from './RestaurantsStyles'
import { UserContext } from '../../context/UserContext'
import Card from '../Card'
const Restaurants = (fromNear) => {
    const { cards } = useContext(UserContext)



    return (
        cards !== undefined
            ?
            <View style={styles.first_container}>
                <Text style={{ fontWeight: '100', fontSize: 18, color: '#717171', alignSelf: 'flex-start' }}>Restaurants near you</Text>
                <FlatList
                    data={cards.slice(0, 4)}
                    extraData={cards.slice(0, 4)}
                    numColumns={2}
                    maxToRenderPerBatch={4}
                    keyExtractor={item => item.id}
                    scrollEnabled={true}
                    renderItem={(item) => {
                        console.log(item.item.name)
                        return (
                            <Card
                                image={item.item.icon}
                                description={item.item.name}
                                stars={item.item.rating}
                                distance={'0.5'} />
                        )
                    }}
                />
            </View>
            :
            cards !== undefined && fromNear === true
                ?
                <View style={styles.first_container}>
                    <FlatList
                        data={cards}
                        extraData={cards}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        scrollEnabled={true}
                        renderItem={(item) => {
                            console.log(item.item.name)
                            return (
                                <Card
                                    image={item.item.icon}
                                    description={item.item.name}
                                    stars={item.item.rating}
                                    distance={'0.5'} />
                            )
                        }}
                    />
                </View>
                :
                null
    )
}

export default Restaurants