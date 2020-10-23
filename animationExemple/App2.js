
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default class App2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //deve se passar os parâmetros por props
            larAnimado: new Animated.Value(150),
            altAnimado: new Animated.Value(50),
            opaciadeAnimada: new Animated.Value(0)
        }
        console.disableYellowBox = true
        //Animações com sequência e paralelo
        Animated.sequence([
            Animated.timing(
                this.state.opaciadeAnimada,
                {
                    toValue: 1,
                    duration: 1500,
                },
            ),
            Animated.parallel([

                Animated.timing(
                    this.state.larAnimado,
                    {
                        toValue: 300,
                        duration: 2000,
                    }
                ),
                Animated.timing(
                    this.state.altAnimado,
                    {
                        toValue: 200,
                        duration: 2000,
                    }
                ),
              
            ]),
              Animated.timing(
                    this.state.opaciadeAnimada,
                    {
                        toValue: 0,
                        duration: 3000,
                    },
                ),


        ]).start()
        //Animações em sequência
        /* Animated.sequence([
             Animated.timing(
                 this.state.larAnimado, {
                     toValue: 300,
                     duration: 2000,
                 }
             ),
             Animated.timing(
                 this.state.altAnimado,
                 {
                     toValue: 200,
                     duration: 2000,
                 }
             ),
             Animated.timing(
                 this.state.opaciadeAnimada,
                 {
                     toValue:0,
                     duration: 2000,
                 }
             )
         ]).start()*/
        /*
        //Animações de forma paralela
         Animated.parallel([
            Animated.timing(
                this.state.larAnimado, {
                    toValue: 300,
                    duration: 2000,
                }
            ),
            Animated.timing(
                this.state.altAnimado,
                {
                    toValue: 200,
                    duration: 2000,
                }
            )
        ]).start()
        */
    }
    render() {
        return (
            //ao fazer uma animação nunca passamos a animação direto no componente
            <View style={styles.container}>
                <Animated.View style={{ width: this.state.larAnimado, height: this.state.altAnimado, backgroundColor: '#FFF', justifyContent: 'center', opacity: this.state.opaciadeAnimada }}>
                    <Text style={{ color: '#000', fontSize: 22, textAlign: 'center' }}>Olá, seja bem vindo ao Aplicativo ImuneKids</Text>


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

