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
  AsyncStorage
} from 'react-native';
import {observer, Provider} from "mobx-react/native";

import {range} from 'lodash';
import MapView from 'react-native-maps';

import SidebarView from '../components/SidebarView.js';
import MapActionButtons from '../components/MapActionButtons.js';
import LocateMeButton from '../components/LocateMeButton.js';
import * as Animatable from 'react-native-animatable';
// import stores
import {IncidentListObject, IncidentObject, IncidentInfoObject, CallerInfoObject, IncidentInstructionObject} from '../store/Incidents.js';
import IncidentsStore from '../store/Incidents.js';

import uiStore from '../store/ui.js';
import Icon from 'react-native-vector-icons/Ionicons';

var id = 10;
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = (width) / height;

const LATITUDE = 26.095133;
const LONGITUDE = 43.996921;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const DEFAULT_PADDING = {
  top: 100,
  right: 100,
  bottom: 100,
  left: 100
};

@observer
class MapScreen extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    drawUnderTabBar: true,
    navBarTranslucent: true,
    navBarHidden: true
  };

  constructor(props) {
    super(props);
    this.state = {
      active: false,
      markers: [],
      followsUserLocation: false,
      initialPosition: 'unknown',
      //   region: new MapView.AnimatedRegion({
      //   latitude: LATITUDE,
      //   longitude: LONGITUDE,
      //   latitudeDelta: LATITUDE_DELTA,
      //   longitudeDelta: LONGITUDE_DELTA,
      // }),
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };

    this.incidentListStore = IncidentsStore;
  }

  componentWillMount(){

  }

  render() {
    const {
      toggled = false,
      region,
      followsUserLocation,

    } = this.state;
    const {selectedIncident} = this.incidentListStore;
    let location;
    if (selectedIncident)
      location = selectedIncident.location;
    return (
      <Provider uiStore={uiStore} IncidentsStore={IncidentsStore}>
      <View style={styles.container}>
        <MapView
          ref="map"
          mapType={uiStore.map.type}
          showsUserLocation={true}
          followsUserLocation={followsUserLocation}
          style={styles.map}
          onLongPress={(e) => this.onMapPress(e)}
          initialRegion={region}
          onRegionChange={(region) => this.onRegionChange(region)}
          >
          {location && <MapView.Marker coordinate={location} pinColor='red'/>}

          {this
            .state
            .markers
            .map(marker => (<MapView.Marker key={marker.key} coordinate={marker.coordinate} pinColor={marker.color}/>))}
        </MapView>
        <SidebarView
          onLocationPress={(location)=>this.handleLocationPress(location)}
        />

        <MapActionButtons />
        <LocateMeButton onLocatePress={()=>this.handleLocateMePress()}/>


      </View>
      </Provider>
    );
  }

  handleLocateMePress(){

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this
          .refs
          .map
          .fitToCoordinates([position.coords], {
            edgePadding: DEFAULT_PADDING,
            animated: true
          });
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});

      },
      (error) =>  console.log(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }

  onRegionChange(region) {
    //this.state.region.setValue(region);
    this.setState({region: region});
  }

  handleLocationPress(location) {

    this.setState({
      markers: [
        {
          coordinate: location,
          key: Math.random(),
          color: randomColor()
        }
      ]
    });

    let coordinate = {
      longitude: location.longitude + 0.0003,
      latitude: location.latitude
    }
    this
      .refs
      .map
      .fitToCoordinates([coordinate], {
        edgePadding: DEFAULT_PADDING,
        animated: true
      });
  }

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers, {
          coordinate: e.nativeEvent.coordinate,
          key: Math.random(),
          color: randomColor()
        }
      ]
    });

    let coordinate = {
      longitude: e.nativeEvent.coordinate.longitude + 0.0003,
      latitude: e.nativeEvent.coordinate.latitude
    }
    this
      .refs
      .map
      .fitToCoordinates([coordinate], {
        edgePadding: DEFAULT_PADDING,
        animated: true
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
