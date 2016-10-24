/**
 * Created by mark on 16-10-20.
 */
import React, {Component} from "react";
import {StyleSheet, View, DrawerLayoutAndroid, ToolbarAndroid, TouchableOpacity, Text, ListView} from "react-native";
import ListCarComponent from '../component/ListCarComponent';

export default class ListCarContainer extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListCarComponent {...this.props}/>
        );
    }
}