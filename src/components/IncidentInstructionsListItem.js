/* @flow */

import React, { Component } from 'react';
import {

  StyleSheet,
} from 'react-native';
import { View, Card, Grid, Col, CardItem, Text, Right, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default class IncidentInstructionsListItem extends Component {
  render() {
    const {instruction} = this.props;
    return (
      <View style={styles.container}>

            <CardItem style={styles.cardItem}>
              <Icon active name="ios-person-outline" style={styles.icon}/>
              <Text style={styles.label}>موجهة إلى:</Text>
              <Text style={styles.text}>{instruction.name}</Text>
            </CardItem>

            <CardItem style={styles.cardItem}>
              <Icon active name="ios-information-circle-outline" style={styles.icon}/>
              <Text style={styles.label}>النص:</Text>
              <Text style={styles.text}>{instruction.text}</Text>
            </CardItem>
            <CardItem style={styles.cardItem}>
              <Icon active name="ios-browsers-outline" style={styles.icon}/>
              <Text style={styles.label}>ملاحظات:</Text>
              <Text style={styles.text}>{instruction.notes}</Text>
            </CardItem>

            <CardItem style={styles.cardItem}>
              <Icon active name="ios-time-outline" style={styles.icon}/>
              <Text style={styles.time}>{instruction.time}</Text>
            </CardItem>



      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
    padding:5,
  },
  cardItem:{
    flexDirection: 'row-reverse',
    alignItems:"flex-start"
  },
  label:{
    marginLeft:10,
    color: '#4285F4',
    fontFamily:'cairo',
    marginLeft: 10,
  },
  time:{
    color: '#6FAF98',
    fontSize: 14,
    fontFamily:'cairo',
  },


  icon:{
    color: '#6FAF98',
    fontSize:20,
    marginLeft:10,
    marginTop:5
  },
  text: {
    fontFamily:'cairo',
      width:250,
      textAlign:'right'
  }

};
