import React, { useContext, useEffect } from 'react'
import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import { styles } from './RestaurantsStyles'
import { UserContext } from '../../context/UserContext'
import Card from '../../components/Card'
const Restaurants = () => {
    const { cards } = useContext(UserContext)

    
    return (
        cards !== undefined
            ?
                <View style={styles.first_container}>
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
            null
    )
}

export default Restaurants