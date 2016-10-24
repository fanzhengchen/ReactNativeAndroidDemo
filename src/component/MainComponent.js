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

import {increase} from '../actions/count';
import * as types from '../constants/actionTypes';

export default class MainComponent extends Component {


    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // console.log("component props " + JSON.stringify(this.props));
    }

    render() {
        var {count} = this.props;
        console.log("count " + count);
        return (
            <View style={styles.container}>
                <Text>MainComponent</Text>


                <TouchableOpacity onPress={this.increase.bind(this)} style={styles.buttonAddSmall}>
                    <Text>INCREASE</Text>
                </TouchableOpacity>


                <Text>{count}</Text>
            </View>
        );
    }

    increase() {
        const {dispatch} = this.props;
        dispatch(increase());
        dispatch({
            type: types.CHART_CAR_CHECK,
            index: -1,
        });
    }
}

const colors = {
    background: {
        bg: '#F5FCFF'
    },
    add: {
        font: '#F69',
        border: '#F69',
        bg: '#FFC1D6'
    },
    minus: {
        font: '#6495ED',
        border: '#6495ED',
        bg: '#D0DFF9'
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background.bg,
    },
    displayPanel: {
        marginVertical: 30,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    controlPanel: {
        marginVertical: 30
    },
    inline: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    numberBlock: {
        fontSize: 100,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 200,
    },
    unitBlock: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
    },
    textColorAdd: {
        color: colors.add.font,
    },
    textColorMinus: {
        color: colors.minus.font,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonAddSmall: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.add.border,
        width: 80,
    },
    buttonMinusSmall: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.minus.border,
        width: 80,
    },
    buttonAdd: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.add.border,
        paddingLeft: 10,
        paddingRight: 10
    },
    buttonMinus: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.minus.border,
        paddingLeft: 10,
        paddingRight: 10
    }
});