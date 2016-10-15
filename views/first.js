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
export default class First extends Component {
    render() {
        return (
            <App/>
        );
    }
}


const styles = StyleSheet.create({

    TabHost: {
        margin: 0,
    }
});
