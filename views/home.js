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
} from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.constainer}>
                <Text>Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});