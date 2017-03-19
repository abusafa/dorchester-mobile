import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {Text as Text2,Right,Card,CardItem,Body , Badge} from 'native-base';

import Realm from 'realm';
import schema from '../realm/schema.js';

const realm = new Realm(schema);
// Create Realm objects and write to local storage
realm.write(() => {
  let myIncident = realm.create('Incident', {
    CaseNumber: '123',
    CaseDate: '1/3/1977',
    Officer: 'ihab abusafa',
  });
});

// Query Realm for all cars with a high mileage
let incidents = realm.objects('Incident');




export default class RealmScreen extends Component {
  static navigatorStyle = {
    drawUnderNavBar: true,
    drawUnderTabBar: true,
    navBarTranslucent: true
  };
  static navigatorButtons = {
    rightButtons: [{
      icon: require('../../img/navicon_edit.png'),
      id: 'compose',
      testID: 'e2e_is_awesome'
    }]
  };
  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  render() {
    return (
      <ScrollView style={styles.container}>

        {incidents.map((item ,key)=>(
          <Card key={key} style={{margin:10}}>
            <CardItem header>
                <Text>{item.Officer}</Text>
            </CardItem>

            <CardItem>
                <Body>
                  <Text>{item.CaseDate}</Text>
                  <Text>{item.Officer}</Text>
                  <Icon name="rocket" size={30} color="#900" />
                </Body>
            </CardItem>
            <CardItem footer>
                <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        ))}

      </ScrollView>
    );
  }
  onNavigatorEvent(event) {
    if (event.id == 'compose') {
      Alert.alert('NavBar', 'Compose button pressed');
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop:70,
    marginBottom:50,
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: 'blue'
  }
});
