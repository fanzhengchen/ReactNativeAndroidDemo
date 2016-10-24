/**
 * Created by mark on 16-10-17.
 */
import React, {Component} from "react";
import {StyleSheet, View, DrawerLayoutAndroid, ToolbarAndroid, TouchableOpacity, Text} from "react-native";
import MainComponent from "../component/MainComponent";
import {connect} from "react-redux";
import CharCar from "./ChartCar";
import PairComponent from "../component/PairComponent";


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
    }


    render() {
        return (
            <View style={styles.container}>
                <MainComponent {...this.props}/>
                <PairComponent {...this.props}/>

                <TouchableOpacity onPress={this.nextScene.bind(this)}>
                    <Text>next scene</Text>
                </TouchableOpacity>
            </View>
        );
    }

    nextScene() {
        const {navigator} = this.props;
        navigator.push({
            component: CharCar,
        });
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

