import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import First from './first';

export default class Second extends Component {
    render() {
        return (
            <View>
                <Text>Second</Text>
            </View>
        );
    }
}

// AppRegistry.registerComponent('Second',() => Second )