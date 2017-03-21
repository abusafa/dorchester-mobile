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
        <Text style={[styles.text, styles.header]}>Contact us</Text>
        <Text style={styles.text}>Tahliya St</Text>
        <Text style={styles.text}>Jeddah</Text>
        <Text style={styles.text}>P.O.B 4787</Text>
        <Text style={styles.text}>KSA Jed 21482</Text>
        <Text style={styles.text}>www.dorchesteres.com</Text>


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
    fontSize:16,
    fontFamily:'cairo',
    color:'#fff'
  },
  header:{
    fontFamily:'cairo-bold',
    fontSize:25,
    marginBottom:20,
  }
});
