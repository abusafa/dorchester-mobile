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
import DB from '../data/DB.json';
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
import { Picker, List } from 'antd-mobile';
import numeral from 'numeral';


const seasons = [
  [
    {
      label: '2010',
      value: 2010,
    },
    {
      label: '2011',
      value: 2011,
    },
    {
      label: '2012',
      value: 2012,
    },
    {
      label: '2013',
      value: 2013,
    },
    {
      label: '2014',
      value: 2014,
    },
    {
      label: '2015',
      value: 2015,
    },
  ],
  [
    {
      label: 'صادرات',
      value: 'out',
    },
    {
      label: 'واردات',
      value: 'in',
    },
  ],
  [
    {
      label:'بحري',
      value:'sea'
    },
    {
      label:'بري',
      value:'land'
    },
    {
      label:'جوي',
      value:'air'
    }
  ]
];



export default class ModalDataListScreen extends Component {
  static navigatorButtons = {
    leftButtons: [{
      title: 'Close',
      id: 'close'
    }]
  };
  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    const db = filter(DB, (o)=>  o.year === 2010 && o.in_out === 'in' && o.outlet_type === 'sea')

    this.state = {
      dataSource: ds.cloneWithRows(db),
      air: true,
      land:true,
      sea:true,
      import:true,
      export:true,
      sValue:[2010, 'in', 'sea']
    };
  }


  handlePickerChange(v){

    const db = filter(DB, (o)=>  o.year === v[0] && o.in_out === v[1] && o.outlet_type === v[2])
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
            title="تصفية النتائج"
            cascade={false}
            okText="موافق"
            dismissText="إلغاء"
            value={this.state.sValue}
            extra="2010 , واردات"
            onChange={v => this.handlePickerChange(v)}
          >

            <List.Item >
              <Text style={{fontFamily:"Cairo-Bold"}}>
                تصفية النتائج
              </Text>

            </List.Item>
          </Picker>

        </View>

          <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <View style={styles.listRow}>

              <Grid style={styles.rowGrid}>

                <Col style={{width:40,alignItems:"center"}}>
                  {(rowData.in_out === 'in') && <Icon name="ios-arrow-round-down-outline" size={30} color="#FB497C" />}
                  {(rowData.in_out === 'out') && <Icon name="ios-arrow-round-up-outline" size={30} color="#4C7BF3" />}
                </Col>

                <Col style={{width:50, alignItems:"center"}}>
                  {(rowData.outlet_type === 'sea') && <Icon name="ios-boat-outline" size={30} color="#666" />}
                  {(rowData.outlet_type === 'land') && <Icon name="ios-car-outline" size={30} color="#666" />}
                  {(rowData.outlet_type === 'air') && <Icon name="ios-plane-outline" size={30} color="#666" />}
                </Col>

                <Col size={2}>
                  <Text style={[styles.text,{fontFamily:'Cairo-bold'}]}>{rowData.outlet}</Text>
                </Col>

                <Col size={3}>
                  <Text style={[styles.text]}>{rowData.key_indicator_ar}</Text>
                </Col>

                <Col>
                  <Text style={[styles.text, {fontFamily:'Cairo-bold', color:'#ED684A', alignItems:"center"}]}>{rowData.year}</Text>
                </Col>

                <Col>
                  <Text style={[styles.text, {color:'#888', fontSize:18}]}>{numeral(rowData.value).format('0,0')}</Text>
                </Col>

              </Grid>
            </View>
          )}
        />



      </View>
    );
  }
  onNavigatorEvent(event) {
    if (event.id == 'close') {
      this.props.navigator.dismissModal();
    }
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
