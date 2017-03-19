/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {observer, inject} from "mobx-react/native";


import IncidentsList from '../components/IncidentsList.js';
import IncidentDetailsView from '../components/IncidentDetailsView.js';
import SearchSelectView from '../components/SearchSelectView.js';
import VehicleSearchView from '../components/VehicleSearchView';
import PersonSearchView from '../components/PersonSearchView';

@inject("uiStore")
@observer
export default class SidebarView extends Component {
  render() {
    const {uiStore} = this.props;
    return (
      <View style={styles.sidebar}>

        <Animatable.View  useNativeDriver={true} style={[
          styles.toggle, uiStore.sidebar.panel === 'IncidentsList' && styles.toggledOn
        ]} transition={['translateY', 'opacity']} easing="ease-in-out" duration={500} useNativeDriver>
          <IncidentsList
            onLocationPress={(location) => this.handleLocationPress(location)}
          />
        </Animatable.View>
        <Animatable.View useNativeDriver={true} style={[
          styles.toggle, uiStore.sidebar.panel === 'IncidentDetailsView' && styles.toggledOn
        ]} transition={['translateY', 'opacity']} easing="ease-in-out" duration={500} useNativeDriver>
          <IncidentDetailsView
            onLocationPress={(location) => this.handleLocationPress(location)}
          />
        </Animatable.View>

        <Animatable.View  useNativeDriver={true} style={[
          styles.toggle, uiStore.sidebar.panel === 'SearchSelectView' && styles.toggledOn
        ]} transition={['translateY', 'opacity']} easing="ease-in-out" duration={500} useNativeDriver>
          <SearchSelectView uiStore={uiStore.sidebar}/>
        </Animatable.View>


        <Animatable.View  useNativeDriver={true} style={[
          styles.toggle, uiStore.sidebar.panel === 'VehicleSearchView' && styles.toggledOn
        ]} transition={['translateY', 'opacity']} easing="ease-in-out" duration={500} useNativeDriver>
          <VehicleSearchView uiStore={uiStore.sidebar}/>
        </Animatable.View>

        <Animatable.View  useNativeDriver={true} style={[
          styles.toggle, uiStore.sidebar.panel === 'PersonSearchView' && styles.toggledOn
        ]} transition={['translateY', 'opacity']} easing="ease-in-out" duration={500} useNativeDriver>
          <PersonSearchView uiStore={uiStore.sidebar}/>
        </Animatable.View>

      </View>
    );
  }


  handleLocationPress(location){
    if(this.props.onLocationPress) this.props.onLocationPress(location);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sidebar: {
    opacity: 0.95,
    position: 'absolute',
    backgroundColor: '#444',
    top: 0,
    right: 0,
    width: 400,
    bottom: 0,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 0.5
  },
  toggle: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    opacity: .3,
    transform: [
      {
        translateY: 1500
      }
    ]
  },
  toggledOn: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    opacity: 1,
    transform: [
      {
        translateY: 0
      }
    ]
  }
});
