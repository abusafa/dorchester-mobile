import React, {Component} from 'react';
import {Text,Right,Card,CardItem,Body , Badge} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class IncidentCard extends Component{

  render(){
    const {incident} = this.props;
    return(
      <Card style={{margin:10}}>
        <CardItem header>
            <Text>{incident.Officer}</Text>
        </CardItem>

        <CardItem>
            <Body>
              <Text>{incident.CaseDate}</Text>
              <Text>{incident.Officer}</Text>
              <Icon name="rocket" size={30} color="#900" />
            </Body>
        </CardItem>
        <CardItem footer>
            <Text>GeekyAnts</Text>
        </CardItem>
      </Card>
    );
  }

}
