/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import App from './views/app';
import First from './views/first';
import Second from './views/second';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        color: 'red'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

// AppRegistry.registerComponent('ReactNativeAndroidDemo', () => ReactNativeAndroidDemo);
AppRegistry.registerComponent('First', () => First);
AppRegistry.registerComponent('Second',() => Second);