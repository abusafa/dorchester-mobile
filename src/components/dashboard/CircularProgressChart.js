/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


import { AnimatedCircularProgress } from 'react-native-circular-progress';


export default class CircularProgressChart extends Component {

  constructor() {
    super();
    this.state = {
      data: [
        {
          value: 60,
          color: '#AF90A9'
        },
        {
          value: 10,
          color: '#91C79E'
        },
        {
          value: 70,
          color: '#B9AD83'
        },
        {
          value: 40,
          color: '#7B9EB6'
        },
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerTitle}>
          المؤشرات
        </Text>
        <View style={styles.indecatorsWrapper}>
          {this.renderRows()}
        </View>

      </View>
    );
  }

  renderRows(){
    return this.state.data.map((item, key) => (
      <View key={key} style={styles.progressWrapper}>

        <AnimatedCircularProgress
          size={40}
          width={3}
          fill={item.value}
          tintColor={item.color}
          backgroundColor="#3d5875">
          {
            (fill) => (
              <Text style={styles.points}>
                {item.value}
              </Text>
            )
          }
        </AnimatedCircularProgress>
      </View>
    ))
  }

}



const styles = StyleSheet.create({
  container: {
    borderBottomWidth:1,
    borderColor:"rgba(255,255,255,0.26)",
    paddingBottom:20,
    margin:10
  },
  headerTitle:{
    color:"#fff",
    textAlign:"right",
    fontFamily:"Cairo",
    fontSize:12,

  },
  indecatorsWrapper:{
    flex: 1,
    flexDirection:"row",
    justifyContent:'center',
  },
  progressWrapper:{
    justifyContent:'center',
    alignItems:'center',
    margin:10,
  },
  points:{
    marginTop:-28,
    marginLeft: 11,
    backgroundColor: 'transparent',
    color: '#7591af',

  }
});
