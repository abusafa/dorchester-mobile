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

export default class VehicleSearchResult extends Component {
  render() {
    const {
      data: {
        securityStatus="",
        ownerName = "",
        ownerID = "",
        userName = "",
        userID = "",
        vehicleModelMainType = "",
        vehicleModelSubType = "",
        vehicleModelYear = "",
        vehicleColor = "",
        vehicleIdentificationNumber = "",
      }
    } = this.props;
    
    return (
      <View style={styles.container}>
        <Card style={styles.content}>
          <CardItem header style={styles.cardItem}>
            <Text style={styles.header}>بيانات المركبة</Text>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Icon active name="ios-paper-outline" style={styles.icon}/>
            <Text style={styles.label}>الحالة الأمنية:</Text>
            <Text style={styles.text}>{securityStatus}</Text>
          </CardItem>


          <CardItem style={styles.cardItem}>
            <Icon active name="ios-contact-outline" style={styles.icon}/>
            <Text style={styles.label}>اسم المالك:</Text>
            <Text style={styles.text}>{ownerName}</Text>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Icon active name="ios-card" style={styles.icon}/>
            <Text style={styles.label}>رقم هوية المالك:</Text>
            <Text style={styles.text}>{ownerID}</Text>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Icon active name="ios-car-outline" style={styles.icon}/>
            <Text style={styles.label}>الطراز</Text>
            <Text style={styles.text}>{vehicleModelMainType}</Text>
            <Text style={styles.text}>{vehicleModelSubType}</Text>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Icon active name="ios-calendar-outline" style={styles.icon}/>
            <Text style={styles.label}>الموديل:</Text>
            <Text style={styles.text}>{vehicleModelYear}</Text>
          </CardItem>


          <CardItem style={styles.cardItem}>
            <Icon active name="ios-color-fill-outline" style={styles.icon}/>
            <Text style={styles.label}>اللون:</Text>
            <Text style={styles.text}>{vehicleColor}</Text>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Icon active name="ios-medical-outline" style={styles.icon}/>
            <Text style={styles.label}>رقم الهيكل:</Text>
            <Text style={styles.text}>{vehicleIdentificationNumber}</Text>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Icon active name="ios-man-outline" style={styles.icon}/>
            <Text style={styles.label}>اسم المستخدم:</Text>
            <Text style={styles.text}>{userName}</Text>
          </CardItem>

          <CardItem style={styles.cardItem}>
            <Icon active name="ios-card-outline" style={styles.icon}/>
            <Text style={styles.label}>رقم هوية المستخدم:</Text>
            <Text style={styles.text}>{userID}</Text>
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
