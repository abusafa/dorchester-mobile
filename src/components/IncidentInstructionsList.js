/* @flow */

import React, { Component } from 'react';

import {
  StyleSheet,
} from 'react-native';

import { View, Card, CardItem, Icon, Text, Right, Left, Body } from 'native-base';
import IncidentInstructionsListItem from './IncidentInstructionsListItem.js';

export default class IncidentInstructionsList extends Component {
  render() {
    const {instructions} = this.props;
    return (
      <View style={styles.container}>
        <CardItem header style={{flexDirection: 'row-reverse'}}>
            <Text style={styles.header}>التوجيهات</Text>
        </CardItem>
        <View style={styles.content}>
          {instructions.map((item, key) => (
            <IncidentInstructionsListItem key={key} instruction={item} />
          ))}
        </View>

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,

  },
  content:{
    paddingRight:10,
    paddingLeft:30,
    paddingBottom:20,
  },
  header: {
      fontSize: 24,
        fontFamily:'cairo',
        textAlign:'right'
    },
    text: {
      fontFamily:'cairo',
    }
};
