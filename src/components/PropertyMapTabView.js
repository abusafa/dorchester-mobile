/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import MapView from 'react-native-maps';
import AnimatedOutletMarker from '../components/AnimatedOutletMarker.js';
import DB from '../data/DE.json';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = (width) / height;

const LATITUDE = 21.604554;
const LONGITUDE = 39.114623;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const DEFAULT_PADDING = {
  top: 100,
  right: 100,
  bottom: 100,
  left: 100
};

export default class PropertyMapTabView extends Component {


  constructor(props) {
    super(props);
    this.state = {
      active: false,
      markers: [],
      followsUserLocation: false,
      initialPosition: 'unknown',
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };

  }


  render() {

    const {
      toggled = false,
      region,
      followsUserLocation,
    } = this.state;

    return (
      <View style={styles.container}>
        <MapView
          ref="map"
          mapType="hybrid"
          showsUserLocation={true}
          followsUserLocation={followsUserLocation}
          style={styles.map}
          onLongPress={(e) => this.onMapPress(e)}
          initialRegion={region}
          onRegionChange={(region) => this.onRegionChange(region)}
          >
            {DB.map((feature, key) => (
              <MapView.Marker
                 key={key}
                 coordinate={{latitude:feature.latitude, longitude:feature.longitude}}
                 onPress={(e)=> this.handleMarkerPress(e, feature)}
               >
                  <AnimatedOutletMarker
                  amount={33}
                  type={feature.type}
                  label={feature.name}
                  selected={ new Animated.Value(1)}
                />
              </MapView.Marker>
            ))}





          {this
            .state
            .markers
            .map(marker => (<MapView.Marker key={marker.key} coordinate={marker.coordinate} pinColor={marker.color}/>))}
        </MapView>
      </View>
    );
  }

  onRegionChange(region) {
    //this.state.region.setValue(region);
    this.setState({region: region});
  }

  handleMarkerPress(e, feature){
    if(this.props.onMarkerPress) this.props.onMarkerPress(feature)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map:{
    flex:1

  }
});
