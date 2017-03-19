/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {observer, inject} from "mobx-react/native";

import IncidentListItem from './IncidentListItem.js';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Ionicons';

@inject("uiStore")
@inject("IncidentsStore")
//@observer
export default class IncidentList extends Component {

  render() {
    const {IncidentsStore, uiStore} = this.props;
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Grid>
            <Col style={styles.col1}>
              <TouchableOpacity onPress={()=> this.handleSearchPress()}>
                <Icon name="ios-search" size={30} color="#fff" />
              </TouchableOpacity>

            </Col>
            <Col  style={styles.col2}>
              <Text style={styles.headerText}>البلاغات</Text>
            </Col>
          </Grid>
        </View>
        <ScrollView>
          {IncidentsStore.incidents.map((item, key) => (
            <IncidentListItem
              key={key}
              incident={item}
              onItemPress={(item)=> this.handleItemPress(item)}
              onLocatePress={(location)=> this.handleLocatePress(location)}


            />
          ))}
        </ScrollView>
      </View>
    );
  }
  handleLocatePress(location){
    if(this.props.onLocationPress) this.props.onLocationPress(location);
  }

  handleSearchPress(){
    const {uiStore, IncidentsStore} = this.props;

    // Show IncidentDetailsView
    uiStore.sidebar.panel = 'SearchSelectView';
    if(this.props.onSearchPress) this.props.onSearchPress(item);

  }

  handleItemPress(item){
    const {uiStore, IncidentsStore} = this.props;

    // Show IncidentDetailsView
    uiStore.sidebar.panel = 'IncidentDetailsView';

    // set selected incident
    IncidentsStore.selectedIncident = item;

    if(this.props.onItemPress) this.props.onItemPress(item);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  col1: {
    flex:1,
  },
  col2: {
    flex:5,
  },
});
