import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {styles} from './styles';
import {Icon} from 'react-native-elements';
import {UserContext} from '../../context/UserContext';

const DrawerDefaultItems = (props) => {
  const {theme} = useContext(UserContext);

  return (
    <DrawerItem
      label={() => (
        <View style={styles.rowContainer}>
          <Icon
            name={`${props.iconName}`}
            type="font-awesome"
            size={24}
            color={theme}
            containerStyle={{marginRight: '10%'}}
          />
          <Text style={styles.name}>{props.drawerName}</Text>
        </View>
      )}
      onPress={() => props.onPress()}
    />
  );
};

export default DrawerDefaultItems;
