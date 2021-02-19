import React from 'react';
import {Image} from 'react-native';
//Navigation
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
//Screens
import Home from './screens/Home';
import Intro from './animations/Intro';
import Profile from './screens/Profile';
import DrawerDefaultComponent from './components/DrawerDefaultComponent';
import Login from './screens/login/Login';
import NearRestaurants from './screens/NearRestaurants';
//Login boys
import ScreenOne from './screens/login/ScreenOne/ScreenOne';
import ScreenTwo from './screens/login/ScreenTwo/ScreenTwo';
import ScreenThree from './screens/login/ScreenThree/ScreenThree';
import ScreenFour from './screens/login/ScreenFour/ScreenFour';
import ScreenFive from './screens/login/ScreenFive/ScreenFive';

const Drawer = createDrawerNavigator();

const Bottom = createBottomTabNavigator();

const Stack = createStackNavigator();

export function stackLogin() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'ScreenOne'}
        component={ScreenOne}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'ScreenTwo'}
        component={ScreenTwo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'ScreenThree'}
        component={ScreenThree}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'ScreenFour'}
        component={ScreenFour}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'ScreenFive'}
        component={ScreenFive}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function drawerTabs() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={DrawerDefaultComponent}
        drawerContentOptions={{
          activeBackgroundColor: '#e6e6e6',
          inactiveBackgroundColor: '#c4c4c4',
          labelStyle: {
            fontWeight: '600',
          },
          activeTintColor: '#8f8e91',
          itemStyle: {
            marginVertical: 5,
          },
        }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Intro" component={Intro} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Near Restaurants" component={NearRestaurants} />
        <Drawer.Screen
          name={'Login'}
          component={Login}
          options={{headerShown: false}}
        />
        <Drawer.Screen name={'ScreenOne'} component={stackLogin} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export function bottomTabs() {
  return (
    <NavigationContainer>
      <Bottom.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          inactiveBackgroundColor: '#171717',
          activeBackgroundColor: '#171717',
          keyboardHidesTabBar: true,
          activeTintColor: '#00b94a',
        }}>
        <Bottom.Screen
          name={'Home'}
          component={drawerTabs}
          options={{
            title: 'Inicio',
            tabBarIcon: ({tintColor}) => (
              <Image
                source={require('../assets/img/homeIcon.png')}
                style={{width: 25, height: 25}}
              />
            ),
          }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}
