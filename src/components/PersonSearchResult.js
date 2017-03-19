/* @flow */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {
  View,
  Card,
  CardItem,
  Text,
  Right,
  Left,
  Body
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PersonSearchResult extends Component {
  render() {
    const {
      data:{
        name="",
        securityStatus="",
        nationality="",
        gender="",
        socialStatus="",
        personStatus="",
        fontprintStatus=""
      }
    } = this.props;

    return (
      <View style={styles.container}>
        <Card style={styles.content}>
          <CardItem header style={styles.cardItem}>
            <Text style={styles.header}>بيانات الشخص</Text>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Icon active name="ios-paper-outline" style={styles.icon}/>
            <Text style={styles.label}>الحالة الأمنية:</Text>
            <Text style={styles.text}>{securityStatus}</Text>
          </CardItem>


          <CardItem style={styles.cardItem}>
            <Icon active name="ios-person-outline" style={styles.icon}/>
            <Text style={styles.label}>الاسم:</Text>
            <Text style={styles.text}>{name}</Text>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Icon active name="ios-flag-outline" style={styles.icon}/>
            <Text style={styles.label}>الجنسية:</Text>
            <Text style={styles.text}>{nationality}</Text>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Icon active name="ios-contacts-outline" style={styles.icon}/>
            <Text style={styles.label}>الحالة الاجتماعية:</Text>
            <Text style={styles.text}>{socialStatus}</Text>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Icon active name="ios-woman-outline" style={styles.icon}/>
            <Text style={styles.label}>الجنس:</Text>
            <Text style={styles.text}>{gender}</Text>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Icon active name="ios-link-outline" style={styles.icon}/>
            <Text style={styles.label}>حالة الشخص:</Text>
            <Text style={styles.text}>{personStatus}</Text>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Icon active name="ios-finger-print" style={styles.icon}/>
            <Text style={styles.label}>حالة البصمة :</Text>
            <Text style={styles.text}>{fontprintStatus}</Text>
          </CardItem>
        </Card>
      </View>
    );
  }
}


const styles = {
  container: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#e6e6e6'
  },
  cardItem: {
    flexDirection: 'row-reverse'
  },
  header: {
    fontSize: 24,
    fontFamily: 'cairo'
  },
  icon: {
    color: '#6FAF98',
    marginLeft: 10,
    fontSize: 30
  },
  label: {
    color: '#6FAF98',
    marginLeft: 30,
    fontFamily: 'cairo'
  },
  text: {
    fontFamily: 'cairo'
  }
}
