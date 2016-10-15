/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    AppRegistry,
} from 'react-native';

import First from './views/first';
import Second from './views/second';
import Animate from './views/animate';
import ReduxSample from './src/reduxComponent';
AppRegistry.registerComponent('First', () => {
    return First;
});
AppRegistry.registerComponent('Second', () => {
    return Second;
});
AppRegistry.registerComponent('Animate', () => {
    return Animate;
});

AppRegistry.registerComponent('ReduxComponent', () => {
    return ReduxSample;
});
