/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Ionicons';

import VehicleSearchResult from './VehicleSearchResult'
export default class VehicleSearchView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Grid>
            <Col style={styles.col1}>
              <TouchableOpacity onPress={()=> this.handleBackPress()}>
                <Icon name="ios-arrow-round-back" size={30} color="#fff" />
              </TouchableOpacity>

            </Col>
            <Col  style={styles.col2}>
              <Text style={styles.headerText}>البحث عن مركبة</Text>
            </Col>
          </Grid>
        </View>
        <ScrollView style={styles.content}>
          <VehicleSearchResult data={{}} />
        </ScrollView>
      </View>
    );
  }

  handleBackPress(){
    this.props.uiStore.panel = 'SearchSelectView';
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  content:{
    padding:10,
  },
  header: {
    backgroundColor: '#6FAF98',
    padding:20,
    height: 70,

  },

  headerText: {
      color:'#fff',
      fontWeight: 'bold',
      fontSize: 18,
      fontFamily:'cairo',
      textAlign:'right'

    },

    text:{
      fontFamily:'Cairo-Bold',

    },
    col1: {
      flex:1,
    },
    col2: {
      flex:5,
    },

});
