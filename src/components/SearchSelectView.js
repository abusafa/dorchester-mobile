/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable';

import { Col, Row, Grid } from 'react-native-easy-grid';
import {  Content, Card, CardItem, Body, Form, Item, Label, Input, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SearchSelectView extends Component {

  constructor(props){
    super(props);
    this.state = {
      plateNo: undefined,
      idNo:undefined
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Grid>
            <Col style={styles.col1}>
              <TouchableOpacity onPress={()=> this.handleBackPress()}>
                <Icon name="ios-arrow-round-back" size={30} color="#fff" />
              </TouchableOpacity>

            </Col>
            <Col  style={styles.col2}>
              <Text style={styles.headerText}>البحث</Text>
            </Col>
          </Grid>
        </View>
        <Content>
        <ScrollView style={styles.content}>
            <Animatable.View ref="PersonInput"   style={styles.card}>
              <View style={styles.cardItem}>
                <Icon name="ios-man" size={60} color="#6FAF98" />
              </View>
              <View style={styles.cardItem}>
                <Text style={styles.text}>
                  البحث عن شخص
                </Text>
              </View>

              <Form>
                  <Item floatingLabel >
                      <Label style={{fontFamily:'Cairo', textAlign:'right'}}>رقم الهوية / الإقامة</Label>
                      <Input
                        keyboardType='numeric'
                        ref="PersonInput"
                        style={{textAlign: 'right'}}
                        onChangeText={(text) => this.setState({idNo:text})}
                      />
                  </Item>

                  <Button
                    block
                    success
                    style={{marginTop:10}}
                    onPress={()=> this.handleSearchPress('Person')}
                    >
                      <Text style={{color:"#fff", fontFamily:'Cairo-Bold', fontSize:18}}>
                        بحث
                      </Text>
                  </Button>
              </Form>
            </Animatable.View>

            <Animatable.View ref="VehicleInput" style={styles.card}>
              <View style={styles.cardItem}>
                <Icon name="ios-car" size={60} color="#6FAF98" />
              </View>
              <View style={styles.cardItem}>
                <Text style={styles.text}>
                  البحث عن مركبة
                </Text>
              </View>
              <Form>
                  <Item floatingLabel >
                      <Label
                        style={{fontFamily:'Cairo', textAlign:'right'}}>رقم اللوحة</Label>
                      <Input style={{textAlign: 'right'}}
                        onChangeText={(text) => this.setState({plateNo:text})}
                      />
                  </Item>

                  <Button
                    block
                    success
                    style={{marginTop:10}}
                    onPress={()=> this.handleSearchPress('Vehicle')}
                     >
                      <Text style={{color:"#fff", fontFamily:'Cairo-Bold', fontSize:18}}>
                        بحث
                      </Text>
                  </Button>
              </Form>
            </Animatable.View>
        </ScrollView>
      </Content>

      </View>
    );
  }

  handleBackPress(){
    this.props.uiStore.panel = 'IncidentsList';
  }

  handleSearchPress(name){
    if(name === 'Vehicle' && !this.state.plateNo){
      this.refs.VehicleInput.shake(800);
      return
    }

    if(name === 'Person' && !this.state.idNo){
      this.refs.PersonInput.shake(800);
      return
    }


    this.props.uiStore.panel = `${name}SearchView`;
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",

  },
  card:{
    marginBottom:20,
    borderWidth: 1,
    borderColor: "#C3ECDD",
    padding:20,
  },
  cardItem:{
    alignItems  :"center",

  },
  content:{
    padding:30,
  },
  header: {
    backgroundColor: '#6FAF98',
    padding:20,
    height: 70,

  },

  headerText: {
      color:'#fff',
      fontWeight: 'bold',
      fontSize: 18,
      fontFamily:'cairo',
      textAlign:'right'

    },

    text:{
      fontFamily:'Cairo-Bold',

    },
    col1: {
      flex:1,
    },
    col2: {
      flex:5,
    },
});
