/**
 * Created by mark on 16-10-20.
 */
import React, {Component} from "react";
import {StyleSheet, View, DrawerLayoutAndroid, ToolbarAndroid, TouchableOpacity, Text, ListView} from "react-native";
import CheckBox from 'react-native-checkbox';
import {connect} from "react-redux";
import * as types from '../constants/actionTypes';
export default class ListCarComponent extends Component {
    constructor(props) {
        super(props);
        // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // this.state = {
        //     dataSource: ds.cloneWithRows(this.props.listData),
        // };
    }

    render() {


        return (
            <ListView
                dataSource={this.props.dataSource}
                renderRow={(rowData, sectionID, rowID) => this._renderRow(rowData, sectionID, rowID)}
                renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._renderSeparator()}
            />
        );
    }

    _renderSeparator() {
        return (<View style={{height: 1, backgroundColor: '#0F0F0F'}}/>);
    }

    _renderRow(rowData, sectionID, rowID) {

        console.log("render row rowID " + rowID);

        return (
            <View style={styles.container}>
                <CheckBox
                    label='Label'
                    checked={rowData.flag}
                    onChange={(checked) => {
                        this._onChange(checked, rowID);
                    }}
                />
                <TouchableOpacity>
                    <View style={{borderRadius: 5, borderWidth: 2, borderColor: '#FF0000', margin: 10}}>
                        <Text style={styles.OperatorStyle}>-</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.OperatorStyle}>{rowData.text}</Text>

                <TouchableOpacity>
                    <View style={{borderRadius: 5, borderWidth: 2, borderColor: '#FF0000', margin: 10}}>
                        <Text style={styles.OperatorStyle}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    _onChange(checked, rowID) {
        const {dispatch} = {...this.props};
        var index = parseInt(rowID);
        console.log("on change rowId %d", index);
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
