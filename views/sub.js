/**
 * Created by mark on 16-10-10.
 */
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

export default class Sub extends Component {

    // propTypes = {
    //
    // }

    constructor(props){
        super(props);
        this.state = {
            count: 1,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>SubComponent</Text>

                <TouchableOpacity onPress={() => this.invoke("callback ")}>
                    <Text>
                        On Touch Callback
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    invoke(message) {
        var cnt = this.state.count + 1;
        this.setState({
            count: cnt,
        });
        this.props.onCallback(message + " " + cnt);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        height:300,
    },
});