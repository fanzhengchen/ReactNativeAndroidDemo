import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view';
import TabBar from './tabbar';
export default class First extends Component {
    render() {
        return (
            <ScrollableTabView 
            style={styles.TabHost} 
            renderTabBar={() => <TabBar/>}
            tabBarPosition='bottom'>
                <Text tabLabel = 'home'>Home</Text>
                <Text tabLabel = 'list'>List</Text>
            </ScrollableTabView>
        );
    }
}


const styles = StyleSheet.create({

    TabHost: {
        margin: 0,
    }
});
// AppRegistry.registerComponent('First',() => First )