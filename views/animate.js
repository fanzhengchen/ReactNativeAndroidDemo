/**
 * Created by mark on 16-10-11.
 */
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
    TouchableOpacity,
    StatusBar,
    LayoutAnimation,
    Animated,
    Easing,
} from 'react-native';

export default class Animate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
            currentAlpha: 0,
        };
    }

    componentWillMount() {
        Animated.timing(
            this.state.fadeAnim, {
                toValue: 1,
                duration: 500,
                easeIn: Easing.cubic(5),
            }
        ).start();

    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.Text style={{
                    opacity: this.state.fadeAnim,
                    transform: [
                        {
                            translateY: this.state.fadeAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [60, 0]
                            })
                        },
                        {
                            scale: this.state.fadeAnim
                        }],

                }}
                >For animation</Animated.Text>


                <TouchableOpacity onPress={this._onPress.bind(this)} style={styles.box}>
                    <Text>Start Animation</Text>
                </TouchableOpacity>

                <View>
                    <Text>page View</Text>
                </View>
            </View>
        );
    }

    _onPress() {
        this.state.currentAlpha = 1 - this.state.currentAlpha;
        Animated.timing(
            this.state.fadeAnim, {
                toValue: this.state.currentAlpha,
                duration: 1000,
                easeIn: Easing.linear(1),
            }
        ).start();
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    box: {
        width: 150,
        height: 30,
        backgroundColor: 'red',
        margin: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});