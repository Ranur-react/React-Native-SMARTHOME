/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Login from './NavPages/LOGIN';
export default class MyComponent extends Component {
  render() {
    return (
      <View >
          <Login />
      </View>
    );
  }
}
