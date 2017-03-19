/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

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
font-size: 14

`;
export default class DashboardMainTabView extends Component {
  render() {
    return (
      <Container>
        <Content>
            <Grid>
              <Row>
                <Col style={{ backgroundColor: '#fff', height: 300 }}>
                  <TopCountryList />
                </Col>
                <Col size={2} style={{ backgroundColor: '#00CE9F', height: 300  }}>
                  <ThematicTradeMap />
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
                    <FooterText>© جميع الحقوق محفوظة للمركز الوطني للإحصاء والمعلومات. (2016)، سلطنة عمان</FooterText>

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
