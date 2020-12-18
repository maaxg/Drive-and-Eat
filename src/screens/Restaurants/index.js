import React, { useContext, useEffect } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
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
                    data={cards}
                    extraData={cards}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    scrollEnabled={true}
                    style={{ flex: 1, alignSelf: 'center' }}
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
                {/* <View style={styles.second_container}>
                   
                    <Card
                        image={cards[1].icon}
                        description={cards[1].name}
                        stars={cards[1].rating} distance={'0.1'} />
                </View>
                <View style={styles.third_container}>
                    <Card
                        image={cards[3].icon}
                        description={cards[3].name}
                        stars={cards[3].rating} distance={'0.3'} />
                    <Card
                        image={cards[4].icon}
                        description={cards[4].name}
                        stars={cards[4].rating} distance={'0.4'} />
                </View> */}
            </View>
            :
            null
    )
}

export default Restaurants