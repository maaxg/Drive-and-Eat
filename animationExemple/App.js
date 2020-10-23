import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      //deve se passar os parâmetros por props
      larAnimado: new Animated.Value(150),
      altAnimado: new Animated.Value(50),
    }
    console.disableYellowBox = true
    //para apenas ignorar alguns erros
    //console.ignoredYellowBox = ['Chave: Valor']
    Animated.timing(
      this.state.altAnimado,{
        toValue: 300,
        duration: 2000,
      }
    ).start()
  }
  render() {
    return (
      //ao fazer uma animação nunca passamos a animação direto no componente
      <View style={styles.container}>
          <Animated.View style={{width: this.state.larAnimado, height: this.state.altAnimado, backgroundColor: '#4169E1', justifyContent: 'center'}}>
            <Text style={{color: '#FFF', fontSize: 22, textAlign: 'center'}}>Carregando...</Text>
          
          
          </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
