import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  Platform,
  Dimensions,
  AsyncStorage,
  Animated
} from 'react-native';
import {observer, Provider} from "mobx-react/native";
import DB from '../data/DE.json';

import {range} from 'lodash';
import MapView from 'react-native-maps';
import AnimatedOutletMarker from '../components/AnimatedOutletMarker.js';

import * as Animatable from 'react-native-animatable';
// import stores

import Icon from 'react-native-vector-icons/Ionicons';


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

class MapScreen extends Component {


  static navigatorButtons = {
    leftButtons: [{
      title: 'Close',
      id: 'close'
    }]
  };


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


    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));


  }

  componentWillMount(){

  }

  onNavigatorEvent(event) {
    if (event.id == 'close') {
      this.props.navigator.dismissModal();
    }
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
    this.props.navigator.showModal({
      title: "Video",
      screen: "example.YoutubeScreen",
      passProps
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  map: {
    ...StyleSheet.absoluteFillObject
  },

});

export default MapScreen;
