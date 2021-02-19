import React, {useState, useRef, useContext, useEffect, useMemo} from 'react';
import {
  View,
  Image,
  StyleSheet,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import {styles} from './HomeStyles';
import DrawerBottom from '../../components/DrawerBottom';
import {UserContext} from '../../context/UserContext';
import HamburguerButton from '../../components/HamburguerButton';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import RestaurantModal from '../../components/RestaurantModal';
import MapViewDirections from 'react-native-maps-directions';
import Login from '../login/Login';
import {MAP_API_KEY} from '@env';
const Home = ({navigation}) => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState();
  const {logged, getNearRestaurants, loadingRestaurants, theme} = useContext(
    UserContext,
  );
  const [region, setRegion] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [firstTimeHome, setFirstTimeHome] = useState(true);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [goToRestaurant, setGoToRestaurant] = useState(false);
  const [restaurantToTravel, setRestaurantToTravel] = useState(null);
  const [hasLocationPermission, sethasLocationPermission] = useState(false);
  var prevRegion = usePrevious(region);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  console.log(selectedRestaurant);
  useEffect((prevProps, prevState) => {
    verifyLocationPermission();
    if (hasLocationPermission) {
      console.log('has permission!');
      getCurrentPosition();
    }
  });
  async function defineNearRests(latitude, longitude) {
    setRestaurants(
      await getNearRestaurants(setFirstTimeHome, latitude, longitude),
    );
  }
  async function verifyLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permissão concedida');
        sethasLocationPermission(true);
      } else {
        console.error('permissão negada');
        sethasLocationPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  }
  async function getCurrentPosition() {
    try {
      setLoad(true);
      await Geolocation.getCurrentPosition(
        async (position) => {
          console.warn('wokeeey');
          setRegion({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
          if (firstTimeHome) {
            defineNearRests(
              position.coords.latitude,
              position.coords.longitude,
            );
          }
        },
        (error) => {
          setLoad(false);
          setError({error: error.message});
          getCurrentPosition();
        },

        {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000},
        setLoad(false),
      );
    } catch (err) {
      console.log(err);
    }
  }
  if (!logged) {
    return <Login press={() => navigation.navigate('ScreenOne')} />;
  }
  if (load || loadingRestaurants) {
    console.log('oioioi');
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator size={'large'} animating={true} color={'#144F66'} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={StyleSheet.absoluteFillObject}
          onMapReady={() => {
            getCurrentPosition();
          }}
          followsUserLocation={true}
          region={{
            latitude: region.latitude || -8.0306,
            longitude: region.longitude || -34.916,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            key={'1'}
            coordinate={{
              latitude: region.latitude || -8.0306,
              longitude: region.longitude || -34.916,
            }}
            title={"Here i'm"}
            description={'Onde estou'}>
            <Image
              source={require('../../../assets/img/my_pic.jpeg')}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                borderColor: theme,
                borderWidth: 2,
              }}
            />
          </Marker>

          {restaurants != '' || restaurants !== undefined
            ? restaurants.map((item) => {
                return (
                  <Marker
                    pinColor={'blue'}
                    key={item.id}
                    coordinate={{
                      latitude: item.geometry.location.lat,
                      longitude: item.geometry.location.lng,
                    }}
                    title={item.name}
                    description={item.vicinity}
                    onPress={() => {
                      setModalVisibility(true);
                      setSelectedRestaurant(item);
                    }}>
                    <Image
                      source={require('../../../assets/img/restaurant_icon.png')}
                      style={{
                        width: 30,
                        height: 30,
                      }}
                    />
                  </Marker>
                );
              })
            : null}
          {goToRestaurant && restaurantToTravel !== null ? (
            <MapViewDirections
              mode={'DRIVING'}
              resetOnChange={true}
              origin={{
                latitude: region.latitude || -8.0306,
                longitude: region.longitude || -34.916,
              }}
              destination={{
                latitude: selectedRestaurant.geometry.location.lat,
                longitude: selectedRestaurant.geometry.location.lng,
              }}
              apikey={MAP_API_KEY}
              strokeColor={theme}
              strokeWidth={5}
            />
          ) : null}
        </MapView>

        <HamburguerButton
          press={() => {
            navigation.openDrawer();
          }}
        />
        {restaurants != '' || restaurants !== undefined ? (
          <DrawerBottom />
        ) : null}
        {selectedRestaurant !== null ? (
          <RestaurantModal
            modalVisibility={modalVisibility}
            setModalVisibility={setModalVisibility}
            selectedRestaurant={selectedRestaurant}
            theme={theme}
            setGoToRestaurant={setGoToRestaurant}
            setRestaurantToTravel={setRestaurantToTravel}
          />
        ) : null}
      </View>
    );
  }
};

export default Home;
