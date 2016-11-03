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

import RxActions from '../actions/RxActions';
import {connect} from '../state/RxState';

import ListComponent from './ListComponent';
class ImmutableComponent extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            basic: true,
        };
    }

    render() {
        var dataSource = this.ds.cloneWithRows(this.props.listData.toArray());
        return (
            <View style={styles.container}>
                <Text>
                    ImmutableContainer fuck
                </Text>


                <Text>{this.props.counter}</Text>
                <TouchableOpacity onPress={this._onPress.bind(this)}>
                    <Text>Press</Text>
                </TouchableOpacity>

                <ListComponent dataSource={dataSource}/>

            </View>
        );
    }

    _onPress() {
        RxActions.increment$.next(10);
    }


}
export default connect(state => {

    console.log("state =============");
    console.log(state);
    console.log("to array --------------------");
    console.log(state.listData);
    return ({
        counter: state.counter,
        listData: state.listData,
    });
})(ImmutableComponent);


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