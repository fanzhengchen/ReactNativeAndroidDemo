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
    DrawerLayoutAndroid,
    ToolbarAndroid,
    Navigator,
} from 'react-native';

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


class ReduxSample extends React.Component {

    render() {
        return (
            <View style={styles.constainer}>
                <Text>
                    Redux Sample
                </Text>
            </View>
        );
    }
}

export default ReduxSample;