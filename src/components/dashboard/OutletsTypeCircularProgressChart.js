/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {sumBy , filter} from 'lodash';
import { Picker, List } from 'antd-mobile';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
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
];
export default class OutletsTypeCircularProgressChart extends Component {

  constructor(props) {
    super();
    const {data} = props;

    const sea = sumBy(filter(data, (o)=> o.outlet_type === 'sea' && o.in_out === 'in' && o.year === 2010 ), (o)=> o.value);
    const land = sumBy(filter(data, (o)=> o.outlet_type === 'land' && o.in_out === 'in' && o.year === 2010 ), (o)=> o.value);
    const air = sumBy(filter(data, (o)=> o.outlet_type === 'air' && o.in_out === 'in' && o.year === 2010 ), (o)=> o.value);


    this.state = {
      sValue:[2010, 'in'],
      data: [
        {
          value: numeral(land).format('0,0'),
          percent: Math.floor(land/30000000),
          label:'بري',
          color: '#d6fbb5'
        },
        {
          value: numeral(sea).format('0,0'),
          percent: Math.floor(sea/30000000),
          label:'بحري',
          color: '#c1e0fc'
        },
        {
          value: numeral(air).format('0,0'),
          percent: Math.floor(air/1000000),
          label:'جوي',
          color: '#f8c82e'
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <Picker
          data={seasons}
          title="تحديد"
          cascade={false}
          okText="موافق"
          dismissText="إلغاء"
          value={this.state.sValue}
          extra="2010 , واردات"
          onChange={v => this.handleValueChange(v)}
        >

          <List.Item arrow="horizontal">تحديد (السنة، صادرات أم واردات)</List.Item>
        </Picker>
        <View style={styles.indecatorsWrapper}>
          {this.renderRows()}
        </View>

      </View>
    );
  }

  handleValueChange(v){
    const {data} = this.props;

    const sea = sumBy(filter(data, (o)=> o.outlet_type === 'sea' && o.in_out === v[1] && o.year === v[0] ), (o)=> o.value);
    const land = sumBy(filter(data, (o)=> o.outlet_type === 'land' && o.in_out === v[1] && o.year === v[0] ), (o)=> o.value);
    const air = sumBy(filter(data, (o)=> o.outlet_type === 'air' && o.in_out === v[1] && o.year === v[0] ), (o)=> o.value);

    this.setState({
      sValue: v ,
      data: [
        {
          value: numeral(land).format('0,0'),
          percent: Math.floor(land/30000000),
          label:'بري',
          color: '#d6fbb5'
        },
        {
          value: numeral(sea).format('0,0'),
          percent: Math.floor(sea/30000000),
          label:'بحري',
          color: '#c1e0fc'
        },
        {
          value: numeral(air).format('0,0'),
          percent: Math.floor(air/1000000),
          label:'جوي',
          color: '#f8c82e'
        }
      ]
    })
  }

  renderRows(){
    return this.state.data.map((item, key) => (
      <View key={key} style={styles.progressWrapper}>




        <AnimatedCircularProgress
          size={140}
          width={15}
          fill={item.percent}
          tintColor={item.color}
          backgroundColor="#f5f5f5">
          {
            (fill) => (
              <View style={styles.textView}>
                <Text style={styles.points}>
                  {item.label}
                </Text>
                <Text style={[styles.points,{color:'red'}]}>
                  {item.value}
                </Text>
              </View>

            )
          }
        </AnimatedCircularProgress>

      </View>
    ))
  }

}



const styles = StyleSheet.create({
  container: {
    flex:1,
    borderBottomWidth:1,
    borderColor:"rgba(255,255,255,0.26)",
    paddingBottom:20,
    margin:10
  },
  headerTitle:{
    color:"#fff",
    textAlign:"right",
    fontFamily:"Cairo",
    fontSize:12,

  },
  indecatorsWrapper:{
    flex: 1,
    flexDirection:"row",
    justifyContent:'center',
    flexDirection:'row-reverse'
  },
  progressWrapper:{
    justifyContent:'center',
    alignItems:'center',
    margin:30,
  },
  points:{

    fontSize:12,
    fontFamily:'cairo-bold',
    backgroundColor: 'transparent',
    color: '#7591af',
  },
  textView:{
    marginTop:-90,
    alignItems:'center',
    justifyContent:'center',
  }
});
