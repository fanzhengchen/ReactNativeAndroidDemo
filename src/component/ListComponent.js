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
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import RxActions from '../actions/RxActions';
var Immutable = require('immutable');
export default class ListComponent extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => (!Immutable.is(r1, r2))});

        this.state = {
            basic: true,
            listViewData: Array(20).fill('').map((_, i)=>`item #${i}`)
        };
    }

    deleteRow(secId, rowId, rowMap) {
        // rowMap[`${secId}${rowId}`].closeRow();
        // const newData = [...this.state.listViewData];
        // newData.splice(rowId, 1);
        // this.setState({listViewData: newData});
        var index = parseInt(rowId);
        console.debug("remote action row index " + index);
        RxActions.removeIndex$.next(index);
    }


    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.basic &&
                    <SwipeListView
                        ref="listView"
                        dataSource={this.props.dataSource}
                        renderRow={ (rowData) => (
                            <TouchableHighlight
                                onPress={ _ => console.log('You touched me') }
                                style={styles.rowFront}
                                underlayColor={'#AAA'}
                            >
                                <View>
                                    <Text>I'm {rowData} in a SwipeListView</Text>
                                </View>
                            </TouchableHighlight>
                        )}
                        renderHiddenRow={ (data, secId, rowId, rowMap) => (
                            <View style={styles.rowBack}>
                                <Text>Left</Text>
                                <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
                                    <Text style={styles.backTextWhite}>Right</Text>
                                </View>
                                <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]}
                                                  onPress={ _ => {
                                                      this.deleteRow(secId, rowId, rowMap);
                                                      this.refs.listView.safeCloseOpenRow();

                                                  }}>
                                    <Text style={styles.backTextWhite}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        leftOpenValue={75}
                        rightOpenValue={-150}

                    />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    standalone: {
        marginTop: 30,
        marginBottom: 30,
    },
    standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        justifyContent: 'center',
        height: 50,
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: '#8BC645',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    backTextWhite: {
        color: '#FFF'
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0
    },
    controls: {
        alignItems: 'center',
        marginBottom: 30
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5
    },
    switch: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 10,
        width: 100,
    }
});