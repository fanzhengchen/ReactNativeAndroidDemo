import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class NavigationView extends Component {
    render() {
        return (
            <View style={styles.title}>
                <Text style={styles.textContent}>NavigationView</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textContent: {
        textAlign: 'center',
    }
});