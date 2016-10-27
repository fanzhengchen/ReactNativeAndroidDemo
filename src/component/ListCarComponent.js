/**
 * Created by mark on 16-10-20.
 */
import React, {Component} from "react";
import {StyleSheet, View, DrawerLayoutAndroid, ToolbarAndroid, TouchableOpacity, Text, ListView} from "react-native";
import CheckBox from 'react-native-checkbox';
import {connect} from "react-redux";
import * as types from '../constants/actionTypes';
var Immutable = require('immutable');
export default class ListCarComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListView
                dataSource={this.props.dataSource}
                renderRow={(rowData, sectionID, rowID) => this._renderRow(rowData, sectionID, rowID)}
                renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._renderSeparator(rowID)}
            />
        );
    }

    _renderSeparator(rowID) {
        return (<View key={rowID + " seperator"} style={{height: 1, backgroundColor: '#0F0F0F'}}/>);
    }

    _renderRow(rowData, sectionID, rowID) {

        console.log("render row rowID " + rowData);
        console.log(Immutable.Is);
        var number = parseInt(rowID);
        return (
            <View style={styles.container} key={rowData.get('text')}>
                <CheckBox
                    key={"checkBox"}
                    label='Label'
                    checked={rowData.get('flag') == 1}
                    onChange={(checked) => {
                        this._onChange(checked, rowID);
                    }}
                />
            </View>
        );
    }

    _onChange(checked, rowID) {
        const {dispatch} = {...this.props};
        var index = parseInt(rowID);
        console.log("on change rowId %d %d", checked, index);
        dispatch({
            type: types.CHART_CAR_CHECK,
            index: index,
        });
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    OperatorStyle: {
        margin: 10,
        fontSize: 20,
    },
});
