import React, { Component, PropTypes } from 'react';
import { View, Text, Animated } from 'react-native'

class App5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            larAnimado: new Animated.Value(0)
        }
        console.disableYellowBox = true
        Animated.timing(
            this.state.larAnimado,
            {
                toValue: 100,
                duration: 5000
            }
        ).start()
    }

    render() {                                      //Interpolação 
        let porcentagemAnimate = this.state.larAnimado.interpolate({
                //2 propriedades
            inputRange: [0, 100],
            outputRange: ['0%', '100%']

        })
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                <Animated.View style={{backgroundColor: '#4169E1', width: porcentagemAnimate,
             height: 25,}}>

                </Animated.View>
            </View>
        );
    }
}


export default App5;