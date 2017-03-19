/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';


const ToolbarItem = styled(View)`
  border-bottom-width:1;
  border-bottom-color: rgba(255,255,255,0.40);
  margin:5;
  height: 70;
  justify-content: center;
  align-items: center;
`;


const ToolbarItem1 = styled(View)`
  border-bottom-width:1;
  background-color: #103D71;
  padding-top:25;
  justify-content: center;
  align-items: center;
  height: 120;
`;


export default class DashboardToolbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ToolbarItem1 >
          <Image
            style={{  width:70, height:70, resizeMode: 'contain'}}
            source={require('../../img/iTunesArtwork.png')}
          />
        </ToolbarItem1>



        <TouchableOpacity onPress={()=> this.handleShowDataPress()} >
          <ToolbarItem >
            <Icon name="ios-list-box-outline" size={50} color="#fff" />
          </ToolbarItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> this.handleShowWorldMapPress()} >
          <ToolbarItem >
            <Icon name="ios-map-outline" size={50} color="#fff" />
          </ToolbarItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> this.handleShowMapPress()} >
          <ToolbarItem >
            <Icon name="ios-globe-outline" size={50} color="#fff" />
          </ToolbarItem>
        </TouchableOpacity>

        <ToolbarItem >
          <Icon name="ios-person-outline" size={50} color="#fff" />
        </ToolbarItem>
      </View>
    );
  }

  handleShowWorldMapPress(){
    if(this.props.onShowWorldMap) this.props.onShowWorldMap();
  }

  handleShowMapPress(){
    if(this.props.onShowMap) this.props.onShowMap();
  }

  handleShowDataPress(){
    if(this.props.onShowData) this.props.onShowData();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
