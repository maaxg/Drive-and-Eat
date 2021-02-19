import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card, Rating} from 'react-native-elements';

const CardRestaurant = ({image, description, stars, distance}) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>{description}</Card.Title>
        <Card.Divider />
        <View style={styles.card}>
          {image !== undefined ? (
            <Image source={{uri: image}} style={styles.image} />
          ) : (
            <Text>Restaurant Pic</Text>
          )}
        </View>
        <View style={styles.infos}>
          <Rating imageSize={20} readonly startingValue={parseFloat(stars)} />
        </View>
        <View style={styles.infos}>
          <Text style={styles.text}>{distance}KM from you</Text>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 320,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infos: {
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'sans-serif-condensed',
    fontWeight: '200',
  },
  image: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
    borderRadius: 8,
  },
});
export default CardRestaurant;
