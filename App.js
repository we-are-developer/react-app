/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';

import React from 'react';
import {View, Text} from 'react-native';

import { createAppContainer,createStackNavigator } from 'react-navigation';



class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}

export default App;
