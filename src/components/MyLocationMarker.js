/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MyLocationMarker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the MyLocationMarker component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
