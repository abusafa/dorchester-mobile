/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ART,
  Dimensions,
} from 'react-native';
import {interpolateBlues} from 'd3-scale-chromatic'
import { Grid, Row, Col } from 'react-native-easy-grid';
import {range} from 'lodash';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

const {
  Surface,
  Group,
  Rectangle,
  ClippingRectangle,
  Shape,
} = ART;
import AnimShape from '../art/AnimShape';


import * as topojson from "topojson-client";
import { json } from 'd3-fetch';
import * as geo from 'd3-geo';
import topology from '../data/world-110m2.json';
const d3 = {
  geo:
  {
    mercator: geo.geoMercator,
    path: geo.geoPath
  },
  json:json
};


var {height, width} = Dimensions.get('window');

var projection = d3.geo.mercator()
.center([0, 50])
.scale(200)
.rotate([0,0]);

var path = d3.geo.path()
    .projection(projection);




var features = topojson.feature(topology, topology.objects.countries)

let dddd = d3.geo.path().projection(projection)(features.features[1]);


export default class WorldMap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Svg

            height={height}
            width={width}
        >
            {features.features.map((f,key)=>(
              <Path key={key} d={d3.geo.path().projection(projection)(f)} stroke="rgba(255,255,255,0.60)" fill={interpolateBlues(key/100)}/>
            ))}

        </Svg>
        <Grid style={{width:900, position:'absolute', bottom: 10, left:0, height:40, margin:10}}>
          {range(20).map((item, key) => (
            <Col>
              <View style={{width:30, height:30,borderRadius:30, backgroundColor:interpolateBlues(key/20)}}></View>
            </Col>
          ))}

        </Grid>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F4F8FF',

  },
});
