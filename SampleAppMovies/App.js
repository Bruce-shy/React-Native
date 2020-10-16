/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList
} from 'react-native';

/**
 * 为了避免骚扰，我们用了一个样例数据来替代Rotten Tomatoes的API
 * 请求，这个样例数据放在React Native的Github库中。
 * 当然，由于众所周知的原因，这个地址可能国内访问也比较困难。
 */

const App = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    fetchData(); // 页面加载完毕 请求数据
  },[])

  const fetchData = () => {
    const REQUEST_URL =
    'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.movies); // 取回数据放到 data 中
        setLoaded(true); // 把加载重新设置为 true
      });
  }

  console.log(data) // 查看是否成功取回数据

  // 假数据
  // const MOCKED_MOVIES_DATA = [
  //   {
  //     title: '标题',
  //     year: '2015',
  //     posters: { thumbnail: 'https://nidelemonya.cn/logo.jpg' }
  //   }
  // ];
  // const movie = MOCKED_MOVIES_DATA[0];
  return (
    loaded ? // 是否成功取到数据(加载完毕)
    (
      <FlatList
        data={data}
        renderItem={RenderMovie}
        style={styles.list}
        keyExtractor={item => item.id}
      />
    )
    : <RenderLoadingView/>
  );
};

const RenderMovie = (props) => {
  // console.log(props)
  const { item } = props
  // console.log(item)
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.posters.thumbnail}}
        style={styles.thumbnail}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.year}>{item.year}</Text>
      </View>
    </View>
  );
}
const RenderLoadingView = () => {
  return (
    <View style={styles.container}>
        <Text>
          正在加载电影数据……
        </Text>
      </View>
  )
}

// 样式文件放在这里哦
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

export default App;
