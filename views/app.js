import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    DrawerLayoutAndroid,
    ToolbarAndroid,
    Navigator,
} from 'react-native';
import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';
import TabBar from './tabbar';
import NavigationView from './navigationview';
import Home from './home';
import ListCarContainer from "../src/container/ListCarContainer";

export default class App extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => <NavigationView/>}>
                <Navigator
                    initialRoute={{title: 'Home', id: 'Home', index: 0}}
                    renderScene={this._renderScene.bind(this)}
                    configureScene={this._configureScene.bind(this)}/>
            </DrawerLayoutAndroid>
        );
    }

    _configureScene(route, routeStack) {
        return Navigator.SceneConfigs.FloatFromRight;
    }

    _renderScene(route, navigator) {
        if (route.id === 'Home') {

            return (
                <ScrollableTabView
                    style={styles.TabHost}
                    renderTabBar={() => <TabBar/>}
                    tabBarPosition='bottom'>

                    <Home tabLabel='home' key='home' navigator={navigator}/>
                    <ListCarContainer tabLabel='list' key='list' navigator={navigator}>List</ListCarContainer>
                </ScrollableTabView>
            );
        } else {
            return <route.component navigator={navigator} {...route.props}/>;
        }
    }
}


const styles = StyleSheet.create({

    TabHost: {
        margin: 0,
    }
});

// AppRegistry.registerComponent('App',() => App )