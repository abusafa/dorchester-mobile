/* @flow */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';
import { Grid, Col, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default class IncidentActionButtons extends Component {

  constructor(props){
    super(props);
    this.state={
      tm:Date.now()
    }
  }
  render() {
    const {data:{status, location, statusColor}} = this.props


    return (
      <View style={[styles.container, {backgroundColor:statusColor}]}>

        <Grid>
          <Col style={styles.col}>
            <TouchableOpacity style={styles.center} onPress={()=>this.handleAcceptPress()}>
              <Icon active name="ios-checkmark-circle-outline" style={styles.icon}/>
              <Text style={styles.text}>قبول</Text>
            </TouchableOpacity>
          </Col>
          <Col style={styles.col}>
            <TouchableOpacity style={styles.center} onPress={()=>this.handleRejectPress()}>
              <Icon active name="ios-close-circle-outline" style={styles.icon}/>
              <Text style={styles.text}>رفض</Text>
            </TouchableOpacity>
          </Col>
          <Col style={styles.col}>
            <TouchableOpacity style={styles.center} onPress={()=>this.handleLocatePress()}>
              <Icon active name="ios-locate-outline" style={styles.icon}/>
              <Text style={styles.text}>الموقع</Text>
            </TouchableOpacity>
          </Col>

        </Grid>
      </View>
    );
  }

  handleLocatePress(){
    if(this.props.onLocatePress) this.props.onLocatePress();
  }

  handleRejectPress(){
    this.props.data.status = 'rejected';
    this.setState({tm:Date.now()})

    if(this.props.onRejectPress) this.props.onRejectPress();
  }

  handleAcceptPress(){
    this.props.data.status  = 'accepted';
    this.setState({tm:Date.now()})
    if(this.props.onAcceptPress) this.props.onAcceptPress();
  }
}

const styles = {
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
    backgroundColor: '#222'
  },
  col:{
    justifyContent: 'center',
    alignItems: 'center',
    padding:10
  },
  center:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    color: '#fff',
    fontSize:50,


  },
  text:{
    color: '#fff',
    fontFamily:'cairo',
  }
};
