/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,

} from 'react-native';

import { View, Card, CardItem, Text, Right, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';


export default class IncidentInfo extends Component {
  render() {
    const {data:{number, cat, subCat, details, time}} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <CardItem header style={{flexDirection:'column', alignItems: 'flex-end',}}>
              <Text style={styles.header}>بيانات البلاغ</Text>
              <Text style={styles.headerNumber} >{number}</Text>
              <Text style={styles.headerTime} >{time}</Text>
          </CardItem>
          <CardItem style={styles.cardItem}>
             <Icon active name="ios-person-outline" style={styles.icon}/>
             <Text style={styles.label} >التصنيف الرئيسي:</Text>

               <Text style={styles.text}>{cat}</Text>

           </CardItem>

           <CardItem style={styles.cardItem}>
              <Icon active name="ios-call-outline" style={styles.icon}/>
              <Text style={styles.label} >التصنيف الفرعي:</Text>
                <Text style={styles.text}>{subCat}</Text>

            </CardItem>


             <CardItem content  style={styles.cardItem}>
               <Body>
                   <Text style={styles.details}>
                       {details}
                   </Text>
               </Body>
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
  content:{

  },
  cardItem:{
    flexDirection: 'row-reverse',
    alignItems:'flex-start'
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    fontFamily:'cairo',
    textAlign:'right'
  },
  headerNumber: {
    fontSize: 24,
    color: '#4285F4',
    fontFamily:'cairo',
  },
  headerTime: {
    fontSize: 15,
    color: '#6FAF98',
    fontFamily:'cairo',
  },

  icon:{
    color: '#4285F4',
    marginLeft:10,
    fontSize:30
  },
  details:{
    color: '#555',
    fontFamily:'cairo',
    textAlign:'right'
  },
  label: {
    color: '#6FAF98',
    marginLeft: 10,
    fontFamily:'cairo',
  },
  text: {
    fontFamily:'cairo',
    width:200,
    textAlign:'right'
  }
}
