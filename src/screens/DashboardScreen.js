import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image

} from 'react-native';


import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

import DashboardCountryTabView from '../components/DashboardCountryTabView.js';
import DashboardMainTabView from '../components/DashboardMainTabView.js';
import DashboardPortsTabView from '../components/DashboardPortsTabView.js';
import DashboardProductsTabView from '../components/DashboardProductsTabView.js';

import DashboardToolbar from '../components/DashboardToolbar.js';
import DashboardSidebar from '../components/DashboardSidebar.js';

import { Container, Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Theme from '../theme';





const ContentSection = styled.View`
  border-bottom-width: 1;
  border-bottom-color: #EEE;
  flex:1;
  padding: 20;

`;






export default class DashboardScreen extends Component {
  static navigatorStyle = {
      drawUnderNavBar: true,
      drawUnderTabBar: true,
      navBarTranslucent: true,
      navBarHidden: true
  };


  constructor(props) {
    super(props);
    this.state = {
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

  }

  onNavigatorEvent(event) {
      if (event.type == 'DeepLink') {
          const parts = event.link.split('/');
          if (parts[0] == 'tab3') {
              this.props.navigator.resetTo({title: "Replaced Root", screen: parts[1], animated: true});
          }

          if (parts[0] == 'admin') {
              this.props.navigator.resetTo({title: "Dashboard", screen: parts[1], animated: true});
          }
      }
  }




  render() {

    return (

      <Grid>
          <Col style={{ backgroundColor: '#103D71', width:270}}>
            <DashboardSidebar />
          </Col>
          <Col style={{backgroundColor:"#fff"}}>
            <Row style={{height:70 ,backgroundColor:"#EEFBFA"}}>
              <ContentSection >
                <Text style={{fontFamily:'Cairo-Bold', textAlign:'right', fontSize:16, color:"#444"}}>المؤشرات الإحصائية للتجارة الخارجية</Text>
              </ContentSection>
            </Row>
            <Row style={{margin:5}} >
                <ScrollableTabView
                  tabBarTextStyle={{fontFamily:'cairo'}}
                  initialPage={3}
                    renderTabBar={() => <DefaultTabBar />}
                  >
                    <View tabLabel='الدول' style={{flex:1}}>
                      <DashboardCountryTabView />
                    </View>

                    <View tabLabel='المنتجات' style={{flex:1}}>
                      <DashboardProductsTabView />
                    </View>
                    <View tabLabel='المنافذ' style={{flex:1}}>
                      <DashboardPortsTabView />
                    </View>
                    <View tabLabel='الرئيسية' style={{flex:1}}>
                      <DashboardMainTabView />
                    </View>
                  </ScrollableTabView>
            </Row>



          </Col>
          <Col style={{ backgroundColor: '#00A99D', width:70 }}>
            <DashboardToolbar
              onShowMap={()=>this.handleShowMapModal()}
              onShowWorldMap={()=>this.handleShowWorldMapModal()}

              onShowData={()=>this.handleShowDataModal()}

            />
          </Col>
      </Grid>

    );
  }


  handleShowWorldMapModal(){
    this.props.navigator.showModal({
      title: "الخارطة الرقمية ",
      screen: "example.ModalMapScreen"
    });
  }

  handleShowMapModal(){
    this.props.navigator.showModal({
      title: "الخارطة الرقمية ",
      screen: "example.MapScreen"
    });
  }



  handleShowDataModal(){
    this.props.navigator.showModal({
      title: "البيانات",
      screen: "example.ModalDataListScreen"
    });
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  content:{
     padding:30,
     marginTop:5,
   },

});
