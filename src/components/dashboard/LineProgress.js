/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing
} from 'react-native';


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
    Stop,
    TSpan
} from 'react-native-svg';


const data = [
  {
    label:'معادن',
    value: 20,
    fill:"#3263E4"
  },
  {
    label:'بيتروكيماويات',
    value: 130,
    fill:"#D43D5D"
  },
  {
    label:'أدوية',
    value: 60,
    fill:"#3D9BD4"
  },
  {
    label:'خشب',
    value: 120,
    fill:"#FFC760"
  }
]

export default class LineProgress extends Component {

  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
    this.state = {
      a:0
    }


    this.spinValue.addListener(({value}) => this.setState({a:value}));

  }


  componentDidMount() {
     this.spin();
   }


   spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.bounce
      }
    ).start()
  }


  render() {
    return (

      <Svg width="300" height="276">
        <G>
          <G>
              {this.renderRows()}
          </G>
        </G>
      </Svg>


    );
  }




  renderRows(){
    const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 150]
  });
    return data.map((item, key)=>(
      <G key={key}>
        <Text
          fill="#fff"
          fontSize="10"
          x="10"
          y={key*20}
          fontFamily="Cairo"
          textAnchor="start"
        >
          {item.label}
        </Text>
        <Rect fill="#1B1B1B" x="90" y={key * 20 + 3} width="150" height="7" rx="3"></Rect>
        <Rect fill={item.fill} x="90" y={key * 20 + 3} width={item.value} height="7" rx="3"></Rect>
      </G>
    ))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});
