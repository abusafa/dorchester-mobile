/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import {Grid, Row, Col } from 'react-native-easy-grid';

const countries = [
  {
    flag: require("../../../img/png250px/sa.png"),
    name: 'السعودية',
    value: "8,106,797"
  },
  {
    flag: require("../../../img/png250px/in.png"),
    name: 'الهند',
    value: "5,571,862"
  },
  {
    flag: require("../../../img/png250px/my.png"),
    name: 'ماليزيا',
    value: '5,013,617'
  },
  {
    flag: require("../../../img/png250px/es.png"),
    name: 'اسبانيا',
    value: '7,018,383'
  },
  {
    flag: require("../../../img/png250px/za.png"),
    name: 'جنوب إفريقيا',
    value: '2,628,455'
  }
];

export default class TopCountryList extends Component {
  render() {
    return (
      <View style={styles.container}>
        {countries.map((country, key) => {
          return (

            <Row key={key} style={{backgroundColor:"#fff", margin:5, borderBottomWidth:1, borderColor:'rgba(0,0,0,0.10)', flexDirection:'row-reverse'}}>

              <Col style={{alignItems:'center', justifyContent:"center"}}>
                <Image
                  style={{width:30, height: 24}}
                  source={country.flag}
                />
              </Col>
              <Col style={{alignItems:'center', justifyContent:"center"}}>
                <Text style={{fontFamily:'cairo', fontSize:12}}>{country.name}</Text>
              </Col>

              <Col size={2} style={{alignItems:'center', justifyContent:"center"}}>
                <Text style={{color:"#777"}}>{country.value}</Text>
              </Col>
            </Row>
          )
        })}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
