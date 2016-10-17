/**
 * Created by mark on 16-10-15.
 */
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    DrawerLayoutAndroid,
    ToolbarAndroid,
    Navigator,
} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store';
import MainContainer from './container/MainContainer';

const store = configureStore();

class ReduxSample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        // console.log("store " + JSON.stringify(store));
        return (
            <MainContainer/>

        );
    }

}


export default ReduxSample;