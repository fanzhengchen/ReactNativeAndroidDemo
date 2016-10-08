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
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';
import TabBar from './tabbar';
import NavigationView from './navigationview';
export default class First extends Component {
    render() {

        var navigationview = (
            <NavigationView/>
        );

        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => <NavigationView/>}>
                
                    <ScrollableTabView
                        style={styles.TabHost}
                        renderTabBar={() => <TabBar/>}
                        tabBarPosition='bottom'>
                        <Text tabLabel='home' key='home'>Home</Text>
                        <Text tabLabel='list' key='list'>List</Text>
                    </ScrollableTabView>
            </DrawerLayoutAndroid>
        );
    }
}


const styles = StyleSheet.create({

    TabHost: {
        margin: 0,
    }
});
// AppRegistry.registerComponent('First',() => First )