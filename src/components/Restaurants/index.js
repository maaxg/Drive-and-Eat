import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import {styles} from './RestaurantsStyles';
import {UserContext} from '../../context/UserContext';

import Card from '../CardRestaurant';
const Restaurants = ({fromNear}) => {
  const {cards} = useContext(UserContext);

  return cards !== undefined ? (
    <View style={styles.first_container}>
      <FlatList
        data={cards.slice(0, 10)}
        extraData={cards.slice(0, 10)}
        numColumns={2}
        maxToRenderPerBatch={4}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        renderItem={(item) => {
          return (
            <Card
              image={item.item.photo}
              description={item.item.name.toUpperCase()}
              stars={item.item.rating}
              distance={'1.0'}
            />
          );
        }}
      />
    </View>
  ) : cards !== undefined && fromNear === true ? (
    <View style={styles.first_container}>
      <FlatList
        data={cards}
        extraData={cards}
        numColumns={2}
        keyExtractor={(item) => item.id}
        scrollEnabled={true}
        renderItem={(item) => {
          return (
            <Card
              image={item.item.photo}
              description={item.item.name.toUpperCase()}
              stars={item.item.rating}
              distance={'0.5'}
            />
          );
        }}
      />
    </View>
  ) : null;
};

export default Restaurants;
