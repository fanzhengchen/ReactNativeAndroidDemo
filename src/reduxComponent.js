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

// const store = configureStore();

class ReduxSample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            store: configureStore(),
        };
    }

    render() {

        // console.log("store " + JSON.stringify(store));
        return (
            <Provider store={this.state.store}>
                <MainContainer/>
            </Provider>

        );
    }

}


export default ReduxSample;