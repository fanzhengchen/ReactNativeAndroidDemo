# 新光互联 React Native 初级教程

## 1. React Native 开发环境以及工具
#### (1). 开发环境、推荐使用MacOS X或者Linux、当然windows也可以凑合。教程网上有很多了，就不写了。

#### (2). 开发环境这里推荐使用Webstorm, 在Default Setting里的JavaScript的Libraries里，点击Downloads，选择TypeScript community stubs，然后就可以下载react native相关套件了。
## 2. React Native UI组件以及样式
#### (1). 基本组件View、Text、TextInput、ImageView、TouchableHilight, onPress等，熟悉基本用法就行了。

#### (2). 重中之重就是ListView，需要详细学习、关键点dataSource、renderRow，然后就是renderHeader、renderFooter, 然后在这里需要深刻体会一下props与state的区别，它们的数据与视图之间的绑定。学习PullToRefreshListView, 目前 Android平台效果需要改进。在组件内部不要更改props，要改也只能改state。
     
#### (3). 学习sytle样式，flex布局以及css简单布局。

#### (4). 设计页面时这里没有继承，所有UI组件都是组合形成。
## 3. React Native Navigator Route的使用
#### (1). Navigator导航器核心函数就是renderScene、initialScene

#### (2). Route 负责传递参数  
## 4. React Native 结合Redux以及Immutable进行有效的数据流管理，
#### (1). Redux结构 actions、reducer、store、dispatch，其中核心是reducer以及通过connect函数将更新后的state树更新到props，数据更新需要用到可持久化数据结构，需要学习Immutable框架。Reducers涉及到具体类型数据的映射，需要实现设计。
>[Redux 简介](http://redux.js.org/) 
>
> Redux　数据流向
>
>![Redux　结构](https://raw.githubusercontent.com/fanzhengchen/ReactNativeAndroidDemo/master/redux-data-flow.jpg)
>
>(1) 为什么要用Redux？
>
> 其实Redux在简单的界面交互中反而不宜使用，比如在按键点击后弹出个什么界面，这样的简单页面其实一次回调足以完成任务，我也不建议大家在这种情景下使用。在另一情景下，比如我在某个Js文件中使用Websocket保持了一个长连接，然后不定时的收发消息，即时地更新UI界面，这里会不止一次地涉及到复杂UI见面数据和组件的嵌套，这个时候Redux就可以派上用场了。单向数据流可以很清晰地展示出不同数据的处理流程和条件判断，基本可以与回调说再见了，其实回调本身也是异步编程思想的一大流派，只是在实际业务代码中难以避免多层回调的嵌套，就个人习惯而言我更倾向于FP风格的流式处理。
>
>(2) Redux重点在于理解Reducers接受子状态然后通过connect函数将Reducers的子状态树更新到父组件的状态树。简单来讲，action相当于一次send，store看成事件总线，功能就是作为消息队列，然后reducers就是接受过滤消息，消息符合条件的话就消费掉它,　然后处理下消息的数据，最后绑定到最终的状态树里，绑定以后我们的UI就已经改好了。
>
>(3) 具体过程，首先需要安装redux、redux-thunk、react-redux。npm 命令啥的就不说了，接下来我们需要干的事
>
```JavaScript
// 构建store
export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    return store;
}
```

```JavaScript
//　构建action　可以随便定义一个点击时间然后 dispatch(increase())
export function increase() {
    console.log("action increase");
    return {
        type: types.INCREMENT,
    };
};
```

```JavaScript
import * as types from '../constants/actionTypes';
//　构建 Reducers
export default function countChange(state = 0, action) {

    switch (action.type) {
        case types.INCREMENT:
            return state + 1;
        default:
            return state;
    }
}
```

```JavaScript
import {combineReducers} from 'redux';
import count from "./count";
// 合并Reducers到一个rootReducer
const rootReducer = combineReducers({
    count,
});

export default rootReducer;
```

```JavaScript
import {connect} from "react-redux";
//在某个根视图的container里
function select(state) {

    console.log("select  " + JSON.stringify(state));
    return {
        count: state.count,
        pair: state.pair,
    };
};

export default connect(select)(MainContainer);
```
> 其实做完这几步Redux就已经做完可以传递数据了。[Demo](https://github.com/fanzhengchen/ReactNativeAndroidDemo)
>
>
#### (2). Immutable 核心就是 Immutable.List 和 Immutable.Map，一个对应数组，一个对应JavaScript Object，学会赋值和更新函数 update, updateIn, set, setIn
>
> (1)　上面的Reducer里面我通常需要返回一个新的类，它的引用必须与前引用地址不相同才能在select函数里面接受到Redux更新后的数据。如果是一个比较小的类，复制一边啥的当然没问题，如果是一个包含了众多数据的类，一棵包含了很多数据的树，这个时候就有坑点了，你得深复制一遍啥的。
>
> (2) 解决方案、[Persistant Data Structure](https://en.wikipedia.org/wiki/Persistent_data_structure)，具体实现啥的现在也不用太纠结，Immutable已经帮我们解决了这个问题，简单来讲就是通过树来解决，红黑树也好伸展树也好本质上中序遍历以后都可以构成数组，实现线索二叉树以后可以像数组一样顺序访问，这样一来Map、List本质是一样的，然后就不用担心了，树的可持久化是很成熟的，不管是Ｂ树还是二叉树。
>
> (3) 咱们先用起来吧
```JavaScript
import * as types from '../constants/actionTypes';
var Immutable = require('immutable');
//其实就是刚才的发送action的样例,　把数据改为数组，对应于 Immutable.List
export default function listData(state =
                                     Immutable.List([
                                         Immutable.Map({
                                             flag: 0,
                                             text: 'first',
                                         }),
                                         Immutable.Map({
                                             flag: 1,
                                             text: 'second',
                                         }),
                                     ])
    , action) {
    switch (action.type) {
        case types.CHART_CAR_CHECK: {
            var ret = state.updateIn([action.index, 'flag'], (x) => x ^= 1);
            console.log(ret);
            return ret;
        }
        default:
            return state;
    }
};
```

```JavaScript
import React, {Component} from "react";
import {StyleSheet, View, DrawerLayoutAndroid, ToolbarAndroid, TouchableOpacity, Text, ListView} from "react-native";
import ListCarComponent from '../component/ListCarComponent';
import {connect} from "react-redux";
//自己另外定义了一个container，更新数组的例子，涉及到ListView状态更新
class ListCarContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var dataSource = ds.cloneWithRows(this.props.listData.toArray());
        return (
            <ListCarComponent {...this.props} dataSource={dataSource}/>
        );
    }
}

function selectListCar(state) {
    console.log("listData select " + JSON.stringify(state.listData));
    return {
        listData: state.listData,
        pair: state.pair,
        count: state.count,
    };
};

export default connect(selectListCar)(ListCarContainer);
```
#### (3). Fetch Api的使用
## 5. React Native Js与原生交互
#### (1). Android自定义ReactModule, ReactNativePackage
## 6. React Native 动画
## 7. React Native 手势响应以及处理
## 8. React Native 性能优化
