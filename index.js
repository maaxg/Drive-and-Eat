/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import Intro from './src/animations/Intro';
import Navigator from './src/Navigator';
import {name as appName} from './app.json';
import UserProvider from './src/context/UserContext'
const Provider = () => {
    return (
        <UserProvider>
            <Navigator />
        </UserProvider>
    )
}

AppRegistry.registerComponent(appName, () =>  Provider);
