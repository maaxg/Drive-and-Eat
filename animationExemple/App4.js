
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native';

export default class App4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //deve se passar os parâmetros por props
            larAnimado: new Animated.Value(150),
            altAnimado: new Animated.Value(50),
            opAnimado: new Animated.Value(0)
        }
        console.disableYellowBox = true
        //O loop só aceita um timing
        this.gerarGrafico = this.gerarGrafico.bind(this)
    }
    gerarGrafico() {
        Animated.sequence([
            Animated.timing(
                this.state.opAnimado,
                {
                    toValue: 1,
                    duration: 400,
                }
            ),
            Animated.timing(
                this.state.altAnimado,
                {
                    toValue: 300,
                    duration: 1000,
                }
            )
        ]).start()

    }

    render() {
        return (
            //ao fazer uma animação nunca passamos a animação direto no componente
            <View style={{ flex: 1 }}>
                <View style={{
                    height: 80, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#4169E1'
                }}>
                    <TouchableOpacity onPress={this.gerarGrafico}>
                        <Text style={{ fontSize: 25, color: '#FFF' }}>
                            Gerar Gráfico
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Animated.View style={{ width: this.state.larAnimado, height: this.state.altAnimado, backgroundColor: '#FF0000', justifyContent: 'center', borderRadius: 5, opacity: this.state.opAnimado }}>
                        <Text style={{ color: '#FFF', fontSize: 22, textAlign: 'center' }}>R$ 150,00</Text>


                    </Animated.View>

                </View>
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

