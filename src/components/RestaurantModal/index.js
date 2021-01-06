import React, { useState } from 'react'
import { View, Modal, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Text } from 'react-native-elements'
import { styles } from './styles'
import { ActivityIndicator } from 'react-native'

const RestaurantModal = ({ modalVisibility, setModalVisibility, selectedRestaurant, theme }) => {

    return (
        <Modal style={styles.modal} visible={modalVisibility} transparent={true} animationType={"slide"}>
            <ScrollView style={{ flex: 1 }}>
                <View style={[styles.container, { borderColor: theme }]}>
                    <TouchableOpacity onPress={() => { setModalVisibility(false) }}>
                        <Icon name={"arrow-left"} size={30} color={theme} style={styles.icon} />
                    </TouchableOpacity>
                    <View style={styles.content}>
                        <Text h4 style={[styles.text, { color: theme, textAlign: 'center' }]}>{selectedRestaurant.name}</Text>
                        <Image source={{ uri: selectedRestaurant.photo }} style={styles.image}
                            onLoad={() => {
                                return (
                                    <View style={styles.load}>
                                        <ActivityIndicator size={'large'} animating={true} color={theme}/>
                                    </View>
                                )
                            }}
                        />
                        <View style={styles.textIcon}>
                            <Text h4 style={[styles.text, { color: theme }]}>Vicinity</Text>
                            <Icon name={"map-marker-alt"} size={30} color={theme} />
                        </View>
                        <Text style={styles.text}>{selectedRestaurant.vicinity}</Text>
                        <TouchableOpacity style={[styles.goToButton, { backgroundColor: theme }]}>
                            <View style={styles.goToButtonView}>
                                <Text style={styles.goToButtonText}>GO TO RESTAURANT</Text>
                                <Icon name={"car"} size={30} color={"#FFF"} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Modal>

    )
}

export default RestaurantModal