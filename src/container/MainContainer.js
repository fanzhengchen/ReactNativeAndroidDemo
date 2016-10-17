/**
 * Created by mark on 16-10-17.
 */
import React, {Component} from "react";
import {StyleSheet, Text, View, TouchableHighlight, DrawerLayoutAndroid, ToolbarAndroid} from "react-native";
import MainComponent from '../component/MainComponent';
import {connect} from 'react-redux';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        console.log("container props " + JSON.stringify(props));
    }


    render() {
        return (
            <MainComponent {...this.props}/>
        );
    }
}

function select(state) {

    console.log("select " + state);
    return {
        count: state.count,
    };
};

export default connect(select)(MainContainer);



