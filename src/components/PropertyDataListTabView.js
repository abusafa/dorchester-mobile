import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ListView,
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'native-base';
import {filter} from 'lodash';
import DB from '../data/DE.json';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
import { Picker, List } from 'antd-mobile';
import numeral from 'numeral';


const seasons = [
  [
    {
      label: 'Sale',
      value: 'Sale',
    },
    {
      label: 'Lease',
      value: 'Lease',
    },
  ],
  [
    {
      label:"Residential Projects",
      value:"Residential-Projects"
    },
    {
      label:"Commercial Projects",
      value:"Commercial-Projects"
    }
  ]
];



export default class PropertyDataListTabView extends Component {

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    const db = filter(DB, (o)=>  o.property_for === 'Sale' && o.type === 'Residential-Projects' )

    this.state = {
      dataSource: ds.cloneWithRows(db),
      air: true,
      land:true,
      sea:true,
      import:true,
      export:true,
      sValue:[ 'Sale', 'Residential-Projects']
    };
  }


  handlePickerChange(v){

    const db = filter(DB, (o)=>  o.property_for === v[0] && o.type === v[1])
    this.setState(
    {
      sValue: v ,
      dataSource: ds.cloneWithRows(db)
    });

  }

  render() {

    return (
      <View style={styles.container}>
        <View style={{height:50, borderBottomWidth:5,borderColor:"#4FCDFF"}}>
          <Picker
            data={seasons}
            title="Filter results"
            cascade={false}
            okText="OK"
            dismissText="cancel"
            value={this.state.sValue}
            extra="Lease , Residential-Projects"
            onChange={v => this.handlePickerChange(v)}
          >

            <List.Item >
              <Text style={{fontFamily:"Cairo-Bold"}}>
                Filter results
              </Text>

            </List.Item>
          </Picker>

        </View>

          <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <TouchableOpacity style={styles.listRow} onPress={()=>this.handleRowPress(rowData)}>

              <Grid style={styles.rowGrid}>

                <Col style={{width:40,alignItems:"center"}}>
                  {(rowData.property_for === 'Sale') && <Icon name="ios-cash-outline" size={30} color="#FB497C" />}
                  {(rowData.property_for === 'Lease') && <Icon name="ios-paper-outline" size={30} color="#4C7BF3" />}
                </Col>

                <Col style={{width:50, alignItems:"center"}}>
                  {(rowData.type === 'Residential-Projects') && <Icon name="ios-home-outline" size={30} color="#666" />}
                  {(rowData.type === 'Commercial-Projects') && <Icon name="ios-cart-outline" size={30} color="#666" />}
                </Col>

                <Col size={2}>
                  <Text style={[styles.text,{fontFamily:'Cairo-bold'}]}>{rowData.name}</Text>
                </Col>

                <Col>
                  <Text style={[styles.text]}>{rowData.ref_no}</Text>
                </Col>

                <Col>
                  <Text style={[styles.text, {fontFamily:'Cairo-bold', color:'#ED684A', alignItems:"center"}]}>{rowData.no_of_floor}</Text>
                </Col>
                <Col size={2}>
                  <Text style={[styles.text, {fontFamily:'Cairo-bold', color:'#444', alignItems:"center"}]}>{rowData.unit_type}</Text>
                </Col>

                <Col>
                  <Text style={[styles.text, {color:'#888', fontSize:18}]}>{rowData.community}</Text>
                </Col>

              </Grid>
            </TouchableOpacity>
          )}
        />



      </View>
    );
  }

  handleRowPress(rowData){
    if(this.props.onItemPress) this.props.onItemPress(rowData);
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: 'blue'
  },
  check:{
    alignItems:"center"
  },
  checkText:{
    color:"#777",
    padding:4,
    fontFamily:'cairo',
    fontSize:10
  },
  text:{
    fontFamily:'Cairo',
    color:"#777",
    textAlign:"right",
    padding: 5,
  },
  listRow:{
    padding:10,
    borderBottomWidth:1,
    borderColor:"#d2d2D2",

  },
  rowGrid:{
      flexDirection:"row-reverse",

  }
});
