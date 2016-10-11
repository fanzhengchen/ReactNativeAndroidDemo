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
    Switch,
} from 'react-native';

import Sub from './sub';

export default class Home extends Component {




    constructor(props) {
        super(props);
        this.state = {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
            mainText: 'Home',
        };
    }

    render() {
        return (
            <View style={styles.constainer}>
                <Text>{this.state.mainText}</Text>
                <Switch
                    onValueChange={(value) => this.setState({ falseSwitchIsOn: value }) }
                    style={{ marginBottom: 10 }}
                    value={this.state.falseSwitchIsOn}/>
                <Switch
                    onValueChange={(value) => this.setState({ trueSwitchIsOn: value }) }
                    value={this.state.trueSwitchIsOn}/>

                <TouchableHighlight onPress={() => this._onPress() }>
                    <Text>on press</Text>
                </TouchableHighlight>

                <Sub onCallback={(message) => this._onCallback(message) }/>
            </View>
        );
    }

    _onCallback(message) {
        this.setState({
            mainText: message,
        });
    }

    _onPress() {
        this.props.navigator.push({
            'id': 'SubComponent',
        });
    }
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});