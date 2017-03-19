/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ART,
} from 'react-native';
import {interpolateGnBu} from 'd3-scale-chromatic'

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


var width = 960,
    height = 500;

var projection = d3.geo.mercator()
.center([200, -40 ])
.scale(90)
.rotate([0,0]);

var path = d3.geo.path()
    .projection(projection);




var features = topojson.feature(topology, topology.objects.countries)

console.log('feature', features);
let dddd = d3.geo.path().projection(projection)(features.features[1]);


export default class ThematicTradeMap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Svg

            height="300"
            width="500"
        >
            {features.features.map((f,key)=>(
              <Path key={key} d={d3.geo.path().projection(projection)(f)} stroke="rgba(255,255,255,0.60)" fill={interpolateGnBu(key/100)}/>
            ))}
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F4F8FF'
  },
});
