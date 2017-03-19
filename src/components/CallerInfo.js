/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,

} from 'react-native';

import { View, Card, CardItem, Text, Right, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';


export default class CallerInfo extends Component {
  render() {
    const {data:{name, mobile, nationality}} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <CardItem header style={styles.cardItem}>
              <Text style={styles.header}>بيانات المتصل</Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
             <Icon active name="ios-person-outline" style={styles.icon}/>
             <Text style={styles.label} >الاسم:</Text>
               <Text style={styles.text}>{name}</Text>
           </CardItem>

           <CardItem style={styles.cardItem}>
              <Icon active name="ios-call-outline" style={styles.icon}/>
              <Text style={styles.label} >الجوال:</Text>
                <Text style={styles.text}>{mobile}</Text>

            </CardItem>

            <CardItem style={styles.cardItem}>
               <Icon active name="ios-flag-outline" style={styles.icon}/>
               <Text style={styles.label} >الجنسية:</Text>
                 <Text style={styles.text}>{nationality}</Text>
             </CardItem>
         </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
  },
  cardItem:{
    flexDirection: 'row-reverse'
  },
  header: {
    fontSize: 24,
    fontFamily:'cairo',
  },
  icon:{
    color: '#4285F4',
    marginLeft:10,
    fontSize:30
  },
  label: {
    color: '#6FAF98',
    marginLeft: 30,
    fontFamily:'cairo',
  },
  text: {
    fontFamily:'cairo',
  }
}
