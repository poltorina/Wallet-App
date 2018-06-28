import React, {Component} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';


import Header from './src/components/Header';

export default class Main extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'powderblue'}}>
        <Header/>
        <View style={{flex: 1,backgroundColor: 'skyblue'}}>
          <Text>Container</Text>
        </View>
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </View>
    );
  }
}

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'red',
    height: APPBAR_HEIGHT
  }
});