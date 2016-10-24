import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    DrawerLayoutAndroid,
    ToolbarAndroid,
    Navigator,
    StatusBar,
} from 'react-native';
import App from './app';
import {Provider} from 'react-redux';
import configureStore from '../src/store';
import charCarReducer from '../src/reducers/CharCarReducer';
export default class First extends Component {


    render() {
        let store = configureStore(charCarReducer);
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}


const styles = StyleSheet.create({

    TabHost: {
        margin: 0,
    }
});
