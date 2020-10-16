# React-Native
React-Native 学习

React Native 是一个使用React和应用平台的原生功能来构建 Android 和 iOS 应用的开源框架。

## 核心组件与原生组件

- 在 Android 和 iOS 开发中，一个视图是 UI 的基本组成部分
- 某些类型的视图可以包含其他视图。全部都是视图。

### 原生组件

在 React Native 中，我们使用 React 组件通过 JavaScript 来调用这些视图。由于 React Native 组件就是对原生视图的封装，因此使用 React Native 编写的应用外观、感觉和性能与其他任何原生应用一样。这些被称为原生组件。

### 核心组件

React Native 包括一组基本的，随时可用的原生组件，可以使用它们来构建应用程序。这些是 React Native 的核心组件。

### 相关命令
npx react-native init SampleAppMovies
使用 nrm 管理 npm 源地址，方便快速切换
npm install nrm -g --save
nrm add registry 地址
nrm del registry 地址 如果无法删除可以直接删除 此电脑->c盘->用户->周子寒-> .nrmrc 文件删除
nrm ls 查看所有

### mac 查看端口
lsof -i tcp:端口号
杀死端口 kill pid   