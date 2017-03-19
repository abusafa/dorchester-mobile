/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Ionicons';

export default class IncidentsList extends Component {
  render() {
    const {incident} = this.props;
    return (
      <View style={styles.container}>
        <Grid style={styles.grid}>

            <Col style={[styles.col1, styles.border]}>
              <TouchableOpacity onPress={()=>this.handleItemPress()}>
                <View style={styles.right}>
                  <Text style={[styles.title, {color:incident.statusColor}]}>{incident.title}</Text>
                  <View style={{flexDirection:'row-reverse'}}>
                    <Icon name="ios-time-outline" size={20} color="#458e74" />
                    <Text style={styles.time}>{incident.info.time}</Text>

                  </View>
                  <Text style={styles.details}>{incident.info.details}</Text>
                </View>
              </TouchableOpacity>
            </Col>


          <Col style={[styles.col2, styles.border]}>
            <TouchableOpacity  onPress={()=>this.handleLocatePress()}>
              <View style={{alignItems:'center'}}>
                <Icon name="ios-locate-outline" size={40} color="#458e74" />
                <Text style={styles.iconText}>الموقع</Text>
              </View>

            </TouchableOpacity>
          </Col>
        </Grid>

      </View>
    );
  }

  handleItemPress(){
    if(this.props.onItemPress) this.props.onItemPress(this.props.incident);
  }

  handleLocatePress(){
    if(this.props.onLocatePress) this.props.onLocatePress(this.props.incident.location);
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',

  },
  grid:{
    flexDirection: 'row-reverse'
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily:'cairo',
    textAlign:'right',
    fontSize:20,
  },
  right:{
    alignItems:'flex-end',

  },
  time: {
    color: '#A08DFF',
    fontFamily:'cairo',
    textAlign:'right',
    fontSize: 10,
    marginRight:10
  },
  details: {
    color: '#6FAF98',
    fontSize: 14,
    fontFamily:'cairo',
    textAlign:'right',
  },
  col1: {
    flex: 5,
  },
  col2: {
    flex: 1,
    paddingLeft:20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  iconText: {
    fontSize: 10,
    color: "#458e74",
    marginTop: 3,
    fontFamily:'cairo',
  },
  border: {
    borderWidth: 0,
    borderColor: 'rgba(255,0,0,0.3)',
    borderStyle: 'dashed',

  }
});
