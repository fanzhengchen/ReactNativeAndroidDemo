import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NativeModules,
    TouchableOpacity,
} from 'react-native';

import First from './first';

var nativeActivityName = 'com.reactnativeandroiddemo.StartedFromJsActivity';
export default class Second extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <TouchableOpacity onPress={this._onPress.bind(this)}>
                    <Text>Second</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _onPress(){
        NativeModules.IntentModule.startActivity(nativeActivityName, 'fuck');
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

// AppRegistry.registerComponent('Second',() => Second )