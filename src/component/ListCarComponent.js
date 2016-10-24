/**
 * Created by mark on 16-10-20.
 */
import React, {Component} from "react";
import {StyleSheet, View, DrawerLayoutAndroid, ToolbarAndroid, TouchableOpacity, Text, ListView} from "react-native";

export default class ListCarComponent extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([1, 1]),
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData, sectionID, rowID) => this._renderRow(rowData)}
                renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._renderSeparator()}
            />
        );
    }

    _renderSeparator() {
        return (<View style={{height: 1, backgroundColor: '#0F0F0F'}}/>);
    }

    _renderRow(rowData, sectionID, rowID) {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={{borderRadius: 5, borderWidth: 2, borderColor: '#FF0000', margin: 10}}>
                        <Text style={styles.OperatorStyle}>-</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.OperatorStyle}>{rowData}</Text>

                <TouchableOpacity>
                    <View style={{borderRadius: 5, borderWidth: 2, borderColor: '#FF0000', margin: 10}}>
                        <Text style={styles.OperatorStyle}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
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
