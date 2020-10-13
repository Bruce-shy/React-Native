import { StatusBar } from 'expo-status-bar';
import React from 'react';
import FlatListBasics from './components/FlatListBasics';
import ButtonBasics from './components/ButtonBasics';
import MyButton from './components/MyButton';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <FlatListBasics></FlatListBasics>
      <ButtonBasics></ButtonBasics>
      <MyButton></MyButton>
      <Button
        onPress={() => {
        Alert.alert('你点击了按钮！');
        console.log('你点击了按钮！')
      }}
        title="点我！"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;