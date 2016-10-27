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
>[Redux　结构]

#### (2). Immutable 核心就是 Immutable.List 和 Immutable.Map，一个对应数组，一个对应JavaScript Object，学会赋值和更新函数 update, updateIn, set, setIn

#### (3). Fetch Api的使用
## 5. React Native Js与原生交互
#### (1). Android自定义ReactModule, ReactNativePackage
## 6. React Native 动画
## 7. React Native 手势响应以及处理
## 8. React Native 性能优化
