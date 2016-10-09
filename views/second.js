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
    TextInput,
} from 'react-native';

import First from './first';

var nativeActivityName = 'com.reactnativeandroiddemo.StartedFromJsActivity';
export default class Second extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: 'NO DATA SET YET!',
            textData: 'WAKAKA'
        };
        this.onMessage = this.onMessage.bind(this);
        console.log("Second Component construct");
    }

    componentDidMount() {

        console.log("Component did mount");
        NativeModules.IntentModule.dataToJs(
            (message) => this.success(message),
            (message) => this.error(message),
        );
    }

    success(message) {
        console.log("data transfer success " + message);
        this.setState({
            data: message
        });
    }

    error(message) {
        console.log("data transfer success " + message);
        this.setState({
            data: string.concat(message, ' error message')
        });
    }

    onMessage() {
        // this.
    }


    render() {
        return (
            <View style = {styles.container}>
                <TouchableOpacity onPress={this._onPress.bind(this) }>
                    <Text>Second</Text>
                </TouchableOpacity>

                <TextInput editable={false} style = {{ width: 200 }}>{this.state.textData}</TextInput>
                <Text style = {{ width: 200 }}>{this.state.data}</Text>
            </View>
        );
    }

    _onPress() {
        NativeModules.IntentModule.startActivity(nativeActivityName, 'Data from JavaScript');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

// AppRegistry.registerComponent('Second',() => Second )