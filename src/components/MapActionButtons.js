/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


export default class MapActionButtons extends Component {
  render() {
    return (
      <View style={{position:'absolute', bottom:100, left:0, flex:1}}>
        <ActionButton buttonColor="rgba(231,76,60,1)" position="left">
          <ActionButton.Item buttonColor='#9b59b6' title="نازل للصلاة"  onPress={() => {}}>
            <Icon name="ios-alarm-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' fontFamily='cairo' title="طوارئ"  onPress={() => {}}>
            <Icon name="ios-flash-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="ازدحام"  onPress={() => {}}>
            <Icon name="ios-car-outline" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionButtonIcon: {
    fontSize: 24,
    height: 22,
    color: 'white',
  },
});
