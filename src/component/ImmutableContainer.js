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
} from 'react-native';
import ImmutableComponent from './ImmutableComponent';
import {RxStateProvider, createState} from "../state/RxState";
import reducer$ from "../reducers/reducers";
export default class ImmutableContainer extends Component {
    render() {
        return (
            <RxStateProvider state$={createState(reducer$)}>
                <ImmutableComponent/>
            </RxStateProvider>
        )
    }
}


