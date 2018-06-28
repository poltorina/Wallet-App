import React from 'react';
import {StyleSheet, View, StatusBar, Platform, Text} from 'react-native';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent={true} backgroundColor={backgroundColor} {...props} />
  </View>
);


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Account',
      balance: '10000 $'
    };
  }

  render() {
    return (
      <View>
        <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content"/>
        <View style={styles.appBar}>
          <Text style={styles.text}>{this.state.title}</Text>
          <Text style={styles.text}>{this.state.balance}</Text>
        </View>
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
},
  text: {
    color: '#fff'
  }
});