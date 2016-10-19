
# Redux 框架在React Native中的使用

### 1.初始化以及依赖库
```zsh
react-native init ReduxProject
cd ReduxProject
npm install --save redux
npm install --save redux-thunk
npm install --save react-redux
```
### 2. 建立一个src文件夹，在src建立相应文件夹actions, reducers, components，containers
![image](https://raw.githubusercontent.com/fanzhengchen/Images/master/Screenshot%20from%202016-10-19%2009-56-07.png)

##### container包含状态树，但是状态树的取值取决于props, reducer返回的类要对应好一棵子树,　比如总状态树 {Ａ: "A",  B: {"B", 1}} 那么reducerA 就返回一个字符串比如　"reducerA", reducerB 返回 {"reducersB", 2},　当然reducer具体返回什么数据你也可以自己指定，但是一定要与对应的状态树的子树的数据格式对应好。

### 3.　构造store, 这个套路是固定的，可以把所有的reducers合起来，一起传入
```JavaScript
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}
```
然后就是reducer 绑定了
首先是根视图
```JavaScript
import React, {
    Component
} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store';
import MainContainer from './container/MainContainer';

class ReduxSample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            store: configureStore(),
        };
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <MainContainer/>
            </Provider>

        );
    }

}
export default ReduxSample;
```
接下来是container
```JavaScript
import React, {Component} from "react";
import {View,styles} from "react-native";
import MainComponent from '../component/MainComponent';
import {connect} from 'react-redux';
import PairComponent from '../component/PairComponent';

//我们的主container
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
        console.log("container props " + JSON.stringify(props));
    }


    render() {
        return (
            <View style={styles.container}>
                <MainComponent {...this.props}/>

                <PairComponent {...this.props}/>
            </View>
        );
    }
}
//这个方法很关键，state是所有reducers 返回数据的一个封装类
//比如reducerA 返回　"A" reducerB　返回　2，那么state就是{A:"A",B:"2"}
function select(state) {

    console.log("select  " + JSON.stringify(state));
    return {
        count: state.count,
        pair: state.pair,
    };
};

//这里负责了将上面的函数的类映射为container的props
export default connect(select)(MainContainer);


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});
```
### 4.　这个时候最关键的部分已经做完了，然后就是构造action，用dispatch　发送就行了你可以直接在View中　dispatch({type:"A"}) reducer那边所有的reducer自然就会收到，然后根据type来做一些数据处理的工作。[demo已经完成](https://github.com/fanzhengchen/ReactNativeAndroidDemo)
