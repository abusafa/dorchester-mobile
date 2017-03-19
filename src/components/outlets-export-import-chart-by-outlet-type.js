import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import AreaSpline from '../charts/AreaSpline';
import * as scale from 'd3-scale';
import {extent} from 'd3-array';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { Card, Left, Right, Segment, Button } from 'native-base';
import { SegmentedControl, WingBlank, Picker, List } from 'antd-mobile';

import {
Circle
} from 'react-native-svg';

import {filter, sumBy,find, minBy , maxBy, max, min} from 'lodash';

import numeral from 'numeral';


const height = 600;
const {width} = Dimensions.get('window');
const years = [2010,2011,2012,2013,2014,2015];
class OutletsExportImportChartByOutletType extends Component {

  constructor(props){
    const {data} = props;
    super();
    this.state={
      inOut: 'in',
      checked: false,
      portType:'sea',
      chartData: years.map((year)=>{
        let result = {
          'land': sumBy(filter(data, (o)=> o.outlet_type === 'land' && o.in_out === 'in' && o.year === year ), (o)=> o.value),
          'sea': sumBy(filter(data, (o)=> o.outlet_type === 'sea' && o.in_out === 'in' && o.year === year ), (o)=> o.value),
          'air': sumBy(filter(data, (o)=> o.outlet_type === 'air' && o.in_out === 'in' && o.year === year ), (o)=> o.value),
          year:year
        }
        return result
      })
    }
  }




  render(){
    const {title} = this.props;
    const {inOut, checked, portType, chartData} = this.state;




    //---------------
    var temp = ["land", "sea", "air"];

    let _extent = extent(
        function(array, names){
           var res = [];
           array.forEach(function(item){
              names.forEach(function(name){
                 res = res.concat(item[name]);
              });
           });
           return(res);
        }(chartData, temp)
     );


    let x = scale.scaleLinear()
       .domain(_extent)
       .range([0, 200]);

    const d1 = chartData.map((item,index)=> {return {year:item.year , value: x(item['land'])}})
    const d2 = chartData.map((item,index)=> {return {year:item.year , value: x(item['air'])}})
    const d3 = chartData.map((item,index)=> {return {year:item.year , value: x(item['sea'])}})


    return (
      <View style={{borderWidth:1, borderColor:"#fff"}}>

        <View >
          <Image source={require('../../img/dashboard/chart.png')}
            style={{width:650, height:400, position:'absolute'}} />

            <View style={{width:200, position:'absolute', top:30, left:30}}>
              <SegmentedControl
                selectedIndex={1}
                values={['صادرات', 'واردات']}
                tintColor="#00A99D"
                onValueChange={(v)=>this.handleValueChange(v)}
              />
            </View>


            <View style={{marginLeft:120, marginTop:74}}>
              <AreaSpline
                width={475}
                height={250}
                data={[d1,d2,d3]}
                color={["rgba(255, 195, 0, 0.50)","rgba(165, 255, 85, 0.40)", "rgba(144, 203, 255, 0.30)"]} />

            </View>
        </View>
      </View>
    );
  }

  handleValueChange(v){
    const {data} = this.props;
    let inOut = 'out';
    if (v === 'واردات') inOut = 'in';

    this.setState({
      chartData: years.map((year)=>{
        let result = {
          'land': sumBy(filter(data, (o)=> o.outlet_type === 'land' && o.in_out === inOut && o.year === year ), (o)=> o.value),
          'sea': sumBy(filter(data, (o)=> o.outlet_type === 'sea' && o.in_out === inOut && o.year === year ), (o)=> o.value),
          'air': sumBy(filter(data, (o)=> o.outlet_type === 'air' && o.in_out === inOut && o.year === year ), (o)=> o.value),
          year:year
        }
        return result
      })

      })
  }

}

export default OutletsExportImportChartByOutletType
