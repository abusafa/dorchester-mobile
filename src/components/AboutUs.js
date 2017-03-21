/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class AboutUs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:40, marginBottom:20}}>About Us</Text>
        <Text style={{fontSize:20, marginBottom:20, color:"#555"}}>

Since its birth in London, Dorchester Estates started planning its global expansion into emerging and dynamic markets branching first to Saudi Arabia in 2008, making Jeddah a strategic gateway into the neighboring Middle-Eastern busiest business centers.
Building over such a solid foundation, Dorchester Estates managed to expand further with a bold move into the region by opening key branches in Beirut, Baghdad, Cairo & Damascus. With more uninterrupted expansions in the very near future to new aspiring markets around the world.
        </Text>

        <Text style={{fontSize:20, marginBottom:20, color:"#555"}}>
          Dorchester Estates’ priority is to raise the bar in the industry, and change things for the better through making the processes of buying, selling, leasing & managing property much easier for our clients. With strong networks supported by qualified consultants we aim to be one of the most respected names in the market and ultimately to be the ‘BEST’ in what we do.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20
  },
});
