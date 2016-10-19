/**
 * Created by mark on 16-10-17.
 */
import React, {Component} from "react";
import {StyleSheet, Text, View, TouchableHighlight, DrawerLayoutAndroid, ToolbarAndroid} from "react-native";
import MainComponent from '../component/MainComponent';
import {connect} from 'react-redux';
import PairComponent from '../component/PairComponent';


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            pair: {
                first: "first",
                second: "second",
            },
        };
        console.log("container props " + JSON.stringify(props));
    }


    render() {
        return (
            <View style={styles.container}>
                <MainComponent {...this.props}/>

                <PairComponent {...this.props}/>
            </View>
        );
    }
}

function select(state) {

    console.log("select  " + JSON.stringify(state));
    return {
        count: state.count,
        pair: state.pair,
    };
};

export default connect(select)(MainContainer);


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

