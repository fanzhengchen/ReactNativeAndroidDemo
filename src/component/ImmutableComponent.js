/**
 * Created by mark on 16-11-2.
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
    ListView,
} from 'react-native';

import RxActions from '../actions/RxActions';
import {connect} from '../state/RxState';
class ImmutableComponent extends Component {
    render() {
        return (
            <View>
                <Text>
                    ImmutableContainer fuck
                </Text>

                <TouchableOpacity onPress={this._onPress.bind(this)}>
                    <Text>Press</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _onPress() {
        RxActions.increment$.next(10);
    }
}
export default connect(state => {
    return ({
        counter: state.counter,
    });
})(ImmutableComponent);
