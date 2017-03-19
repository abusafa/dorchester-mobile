/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class LocateMeButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={()=> this.handlePress()}>
        <View  style={styles.view}>
          <Icon name="md-locate" style={styles.icon} />
        </View>
      </TouchableOpacity>
    );
  }

  handlePress(){
    if(this.props.onLocatePress) this.props.onLocatePress();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button:{
    flex:1,
    position: 'absolute',
    bottom: 30,
    left:30,

  },
  view:{
    width:54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 5,
    shadowOpacity: 0.5
  },
  icon: {
    color: '#666',
    fontSize: 25
  }
});
