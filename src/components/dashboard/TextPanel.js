/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class TextPanel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.header]}>هذه البوابة </Text>
        <Text style={styles.text}>توفر مؤشرات احصائية رسمية</Text>
        <Text style={styles.text}>ذات سلاسل زمنية طويلة عن </Text>

        <Text style={styles.text}>سلطنة عمان</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:20,
    fontFamily:'cairo',
    color:'#fff'
  },
  header:{
    fontFamily:'cairo-bold',
    fontSize:25,
    marginBottom:20,
  }
});
