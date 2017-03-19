/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class WeatherPanel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>مسقط، عمان</Text>
        <Image
          style={{width:70, height: 70}}
          source={require("../../../img/weather-icons-png/PartlyCloudyDay.png")}
        />
        <Text style={[styles.text, styles.tempreture]}>27</Text>
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
  tempreture:{
    fontSize:70,
    fontWeight:"100",
  }
});
