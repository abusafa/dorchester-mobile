/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,

} from 'react-native';
import styled from 'styled-components/native';
import { Row, Col } from 'react-native-easy-grid';



import { Card,  } from 'native-base';







const Footer  = styled.View`
  background-color: #F7F7F7;
  flex:1;
`;

const ContentSection1 = styled.View`
  border-bottom-width: 1;
  border-bottom-color: #EEE;
  flex: 3;
  padding: 20;
`;

export default class DashboardCountryTabView extends Component {
  constructor(){
    super();
    this.state = {
    }
  }



  render() {
    return (
      <View style={styles.container}>

          <Row>
            <Col size={2} style={{justifyContent:'center', alignItems:'center'}}>
              <Image
                style={{  width:300, height:200, resizeMode:'contain'}}
                source={require('../../img/dashboard/user.png')}
              />
            </Col>
            <Col size={1} style={{justifyContent:'center', alignItems:'center'}}>
              <Image
                style={{ width:100, height:100, resizeMode:'contain'}}
                source={require('../../img/dashboard/pie1.png')}
              />
            </Col>




          </Row>


        <Row>
          <ContentSection1 style={{justifyContent:'center', alignItems:'center'}}>
            <Image
              style={{ width:400, height:300, resizeMode:'contain'}}
              source={require('../../img/dashboard/stars.png')}
            />
          </ContentSection1>
        </Row>

        <Row  style={{ height:100 }}>
          <Footer style={{justifyContent:'center', alignItems:'center'}}>

              <Image
                style={{ width:800, height:100, resizeMode:'contain'}}
                source={require('../../img/dashboard/chart11.png')}
              />

          </Footer>
        </Row>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
