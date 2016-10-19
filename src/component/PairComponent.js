/**
 * Created by mark on 16-10-17.
 */
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    DrawerLayoutAndroid,
    ToolbarAndroid,
    Navigator,
} from 'react-native';
import {pairChange} from '../actions/count';

export default class PairComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pair: {
                first: 'firstValue',
                second: 'secondValue',
            }
        };
    }

    render() {
        const {first, second} = this.props.pair;
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>{first}</Text>

                <Text style={styles.textStyle}>{second}</Text>

                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    <Text>change Pair</Text>
                </TouchableOpacity>


            </View>
        )
    }

    onPress() {
        const {dispatch} = this.props;
        dispatch(pairChange())
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    textStyle: {
        margin: 20,
        fontSize: 18,
        width: -1,
        height: 20,
    },
});