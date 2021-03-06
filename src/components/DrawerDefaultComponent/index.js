import React from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import DrawerDefaultItems from '../DrawerDefaultItems';
import ColorPalette from '../ColorPalette';
import UserInfo from '../UserInfo';
import OutAndDevBtns from '../outAndDev/OutAndDevBtns';
import {Divider} from 'react-native-elements';
import {styles} from './DrawerDefaultComponent';
const DrawerDefaultComponent = (props) => {
  return (
    <View style={styles.genericContainer}>
      <ScrollView>
        <SafeAreaView>
          <UserInfo />
          <View style={styles.viewContainer}>
            <DrawerDefaultItems
              iconName={'user'}
              drawerName={'Profile'}
              onPress={() => props.navigation.navigate('Profile')}
            />
            <DrawerDefaultItems
              iconName={'home'}
              drawerName={'Home'}
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerDefaultItems
              iconName={'star-o'}
              drawerName={'Near Restaurants'}
              onPress={() => props.navigation.navigate('Near Restaurants')}
            />
            <DrawerDefaultItems
              iconName={'search'}
              drawerName={'Places to go'}
              onPress={() => props.navigation.navigate('Home')}
            />

            <View>
              <View style={{marginTop: '2%'}}>
                <Divider style={{backgroundColor: '#777f7c90'}} />
              </View>
              <View style={{marginTop: '3%'}}>
                <ColorPalette />
              </View>
              <View style={{marginTop: '5%'}}>
                <Divider style={{backgroundColor: '#777f7c90'}} />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <View elevation={6} style={{backgroundColor: '#ffffff'}}>
        <OutAndDevBtns />
      </View>
    </View>
  );
};

export default DrawerDefaultComponent;
