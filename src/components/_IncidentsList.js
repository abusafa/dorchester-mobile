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
import IncidentsCard from './IncidentCard.js';


import {Text as Text2,Right,Card,CardItem,Body , Badge} from 'native-base';

import Realm from 'realm';
import schema from '../realm/schema.js';
var realm, incidents=[];

class Car {}
Car.schema = {
  name: 'Car',
  properties: {
    make:  'string',
    model: 'string',
    miles: 'int',
  }
};

class Person {}
Person.schema = {
  name: 'Person',
  properties: {
    name:    {type: 'string'},
    cars:    {type: 'list', objectType: 'Car'},
    picture: {type: 'data', optional: true}, // optional property
  }
};

//var realm = new Realm({schema: [Car, Person], schemaVersion: 1});


Realm.Sync.User.login('http://docker.yeslamo.com:9080', 'app@yeslamo.com', '123', (error, user) => {
  //console.log(error);
  //console.log(schema);

  if (!error) {
    console.log(user);
      realm = new Realm({
        sync: {
                user: user,
                url: 'realm://docker.yeslamo.com:9080/db1',
              },
        schema: [Car, Person]
      });

      console.log(realm);

      realm.write(() => {
  let myCar = realm.create('Car', {
    make: 'Honda',
    model: 'Civic',
    miles: 1000,
  });
  myCar.miles += 20; // Update a property value
});


      // Query Realm for all cars with a high mileage
      //incidents = realm.objects('Incident');
      //console.log("incidents");


      // Create Realm objects and write to local storage
      // realm.write(() => {
      //   let myIncident = realm.create('Incident', {
      //     CaseNumber: '123',
      //     CaseDate: '1/3/1977',
      //     Officer: 'ihab abusafa',
      //   });
      // });

    }
});



setInterval(function(){
   console.log("message");
   console.log(realm);

}, 5000);




export default class IncidentsList extends Component {

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        {incidents.map((item ,key)=>(
          <IncidentsCard key={key} incident={item} />
        ))}

      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  }
});
