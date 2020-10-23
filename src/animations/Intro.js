import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  ImageBackground,
  Dimensions
} from 'react-native';

const Intro = ({navigation}) => {
  //largura
  const pos = useRef(new Animated.ValueXY({x: -20, y: -500})).current;
  const pos2 = useRef(new Animated.ValueXY({x: 100, y: -500})).current;
  const pos3 = useRef(new Animated.ValueXY({x: 10, y: -500})).current;
  const posName = useRef(new Animated.ValueXY({x: -300, y: 50})).current;
  const posGlobe = useRef(new Animated.ValueXY({x: 0, y: -500})).current;
  useEffect(()=> {
    firstAnimation()
    
    
  },[])
  const firstAnimation =
  () =>{
    
    Animated.parallel([
        Animated.timing(
          pos, {// Auto-multiplexed
          toValue: {x: -20, y:  Dimensions.get('window').height - 800},
          duration: 2000,
          delay: 200,
          useNativeDriver: false
          }),
        Animated.timing(
          pos2,{
          toValue: {x: 110, y: -70},
          duration: 2000,
          delay: 300,
          useNativeDriver: false
        }),
        Animated.timing(
          pos3,{
          toValue: {x: 20, y: -10},
          duration: 2000,
          delay: 400,
          useNativeDriver: false
        }),
        Animated.timing(
          posName,{
          toValue: {x: 0, y:  Dimensions.get('window').height - 560},
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(
          posGlobe,{
          toValue: {x: 0, y: Dimensions.get('window').height / 3 },
          duration: 1000,
          useNativeDriver: false
        }),
      ]).start();
      setTimeout(() => {
        navigation.navigate('Home')
      }, 4000)
  }

  //Animação do timing
  return (
    <View style={styles.container}>
     
        <Animated.Image source={require('../../assets/img/globofree.png')}
              resizeMode="cover"
              {...firstAnimation.panHandlers}
              style={[posGlobe.getLayout(), {width: 200, height: 200, position: 'relative'}]}/>
        
          <View style={{flexDirection: 'row'}}>
            <Animated.Image source={require('../../assets/img/setaprinc.png')}
            
            {...firstAnimation.panHandlers}
            style={[pos.getLayout(), styles.box]}
          />
          <Animated.Image source={require('../../assets/img/setaprinc.png')}
            {...firstAnimation.panHandlers}
            style={[pos2.getLayout(), styles.box2]}
          />
            <Animated.Image source={require('../../assets/img/setaprinc.png')}
            {...firstAnimation.panHandlers}
            style={[pos3.getLayout(), styles.box3]}
          />
          <Animated.Image source={require('../../assets/img/nome2.png')}
            {...firstAnimation.panHandlers}
            style={[posName.getLayout(), styles.name]}/>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
 container:{
   flex: 1,
   backgroundColor: '#FFF',
   alignItems: 'center',
   justifyContent: 'center'
   
 },
 box: {
  position: 'absolute',
  width: 350,
  height: 350,
},
box2: {

  flex: 1,
  width: 350,
  height: 350,
  position: 'absolute'
},
box3: {
  flex: 1,
  width: 350,
  height: 350,
  position: 'absolute'
},
name:{
  flex: 2,
  width: 500,
  height: 500,
}

  
});
export default Intro


