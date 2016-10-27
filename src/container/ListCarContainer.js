/**
 * Created by mark on 16-10-20.
 */
import React, {Component} from "react";
import {StyleSheet, View, DrawerLayoutAndroid, ToolbarAndroid, TouchableOpacity, Text, ListView} from "react-native";
import ListCarComponent from '../component/ListCarComponent';
import {connect} from "react-redux";
class ListCarContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var dataSource = ds.cloneWithRows(this.props.listData.toArray());
        return (
            <ListCarComponent {...this.props} dataSource={dataSource}/>
        );
    }
}

function selectListCar(state) {
    console.log("listData select " + JSON.stringify(state.listData));
    return {
        listData: state.listData,
        pair: state.pair,
        count: state.count,
    };
};

export default connect(selectListCar)(ListCarContainer);