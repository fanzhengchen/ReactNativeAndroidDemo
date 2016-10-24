/**
 * Created by mark on 16-10-15.
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
} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store';
import MainContainer from './container/MainContainer';
import rootReducer from './reducers/index';
// const store = configureStore();

class ReduxSample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            store: configureStore(rootReducer),
        };
    }

    render() {

        // console.log("store " + JSON.stringify(store));
        return (
            <Provider store={this.state.store}>
                <Navigator renderScene={this.renderScene.bind(this)}
                           initialRoute={{component: MainContainer}}/>
            </Provider>

        );
    }

    renderScene(route, navigator) {
        return <route.component navigator={navigator} {...route.props}/>;
    }

}


export default ReduxSample;