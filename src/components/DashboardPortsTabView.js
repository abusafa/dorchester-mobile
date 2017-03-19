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
import WorldMap from '../charts/WorldMap.js';
import DB from '../data/DB.json';



import { Card,  } from 'native-base';
import OutletsTypeCircularProgressChart from '../components/dashboard/OutletsTypeCircularProgressChart.js'

import OutletsExportImportChartByOutletType from '../components/outlets-export-import-chart-by-outlet-type';







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

export default class DashboardPortsTabView extends Component {
  constructor(){
    super();
    this.state = {
    }
  }



  render() {
    return (
      <View style={styles.container}>
        <Row>
          <OutletsExportImportChartByOutletType data={DB} />

        </Row>
        <Row>
          <Card style={{marginTop:50}}>
            <OutletsTypeCircularProgressChart data={DB} />
          </Card>
        </Row>
        {/*
          <Row>
            <Col size={2}>
              <Image
                style={{ flex:1, width:370, resizeMode:'center'}}
                source={require('../../img/dashboard/user.png')}
              />
            </Col>
            <Col size={1}>
              <Image
                style={{ flex:1, width:100, resizeMode:'center'}}
                source={require('../../img/dashboard/pie1.png')}
              />
            </Col>




          </Row>


        <Row>
          <ContentSection1 >
            <Image
              style={{ flex:2, width:470, resizeMode:'center'}}
              source={require('../../img/dashboard/stars.png')}
            />
          </ContentSection1>
        </Row>

        <Row  style={{ height:100 }}>
          <Footer >

              <Image
                style={{ flex:1, height:100, resizeMode:'center'}}
                source={require('../../img/dashboard/chart11.png')}
              />

          </Footer>
        </Row>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
