import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    DrawerLayoutAndroid,
    ToolbarAndroid,
    Navigator,
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';
import TabBar from './tabbar';
import NavigationView from './navigationview';
import Home from './home';

export default class App extends Component {
    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => <NavigationView/>}>
                <Navigator
                    initialRoute = {{ title: 'Home', id: 'Home', index: 0 }}
                    renderScene={this._renderScene.bind(this)}
                    configureScene={this._configureScene.bind(this)}
                    >
                </Navigator>
            </DrawerLayoutAndroid>
        );
    }

    _configureScene(route, routeStack){
        return Navigator.SceneConfigs.FloatFromRight;
    }

    _renderScene(route, navigator) {
        if (route.id === 'Home') {
            return (
                <ScrollableTabView
                    style={styles.TabHost}
                    renderTabBar={() => <TabBar/>}
                    tabBarPosition='bottom'>
                
                    <Home tabLabel='home' key='home'/>
                    <Text tabLabel='list' key='list'>List</Text>
                </ScrollableTabView>
            );
        }
    }
}


const styles = StyleSheet.create({

    TabHost: {
        margin: 0,
    }
});

// AppRegistry.registerComponent('App',() => App )