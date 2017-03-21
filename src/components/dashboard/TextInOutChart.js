/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class TextInOutChart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Col style={styles.center}>
            <Text style={[styles.number, styles.import]}>12%</Text>
            <Text style={styles.text}>Lease</Text>
            <Text style={[styles.text, styles.import]}>123,456,789</Text>
          </Col>
          <Col style={styles.center}>
            <Text style={[styles.number, styles.export]}>57%</Text>
            <Text style={styles.text}>Sale</Text>
            <Text style={[styles.text, styles.export]}>405,456,789</Text>

          </Col>
        </Grid>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom:20,
    borderBottomWidth:1,
    borderColor:"rgba(255,255,255,0.26)",
    paddingBottom:20,
    margin:10
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
  number:{
    fontSize:42,
    fontWeight: "100",
    color:"#CF917A",
  },
  import:{
    color:"#CF917A",
  },
  export:{
    color:"#97BBD3",
  },
  text:{
    color:"#fff",
    fontSize:12,
    fontFamily:"Cairo",
  }
});
