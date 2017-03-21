/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import SlideShow from '../components/SlideShow.js';
import { Container, Content } from 'native-base';
import styled from 'styled-components/native';
import {Grid, Row, Col } from 'react-native-easy-grid';
import ThematicTradeMap from '../charts/ThematicTradeMap.js';
import TopCountryList from '../components/dashboard/TopCountryList.js';
import WeatherPanel from '../components/dashboard/WeatherPanel.js';
import TextPanel from '../components/dashboard/TextPanel.js';


const FooterView = styled.View`
flex: 1;
justify-content: center;
align-items: center;

`;

const FooterText = styled.Text`
color: #fff;
font-family: cairo-bold;
font-size: 11

`;
export default class DashboardMainTabView extends Component {
  render() {
    return (
      <Container>
        <Content>
            <Grid>
              <Row>
                <Col style={{ backgroundColor: '#fff', height: 300 }}>
                  <SlideShow />
                </Col>

              </Row>
              <Row>
                <Col style={{ backgroundColor: '#FB497C', height: 245, margin:5 }}>
                  <WeatherPanel />
                </Col>
                <Col style={{ backgroundColor: '#7E8EAB', height: 245, margin:5  }}>
                  <TextPanel />
                </Col>
              </Row>

              <Row>
                <Col style={{ backgroundColor: '#325BAB', height: 70, margin:5 }}>
                  <FooterView>
                    <FooterText>Dorchester Estates;
An International Standard Bearer in Real Estate Investments, Development and Management</FooterText>

                  </FooterView>
                </Col>
              </Row>

            </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
