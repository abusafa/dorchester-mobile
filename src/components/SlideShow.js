/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Grid, Row, Col } from 'react-native-easy-grid';


const slides = [
  {
    title:'New Star - BER0020',
    text:`Meet the Lebanese Capital’s New Star. Standing gracefully on the distinguished sea shore of Ramlet Al
Bayda. Star Residence sparkles with luxury and light. Spending design and absolute comfort combine to
offer you a dream home with a spectacular view of the Mediterranean blue sea.
`,
    image:'http://www.dorchesteres.com/dorchesterweb/Proadmin/Uploaded/Properties/vjnuVJ223.JPG?width=440&height=264&mode=crop'
  },
  {
    title:'Al Noor',
    text:`Al Noor commercial center is located in the center of the city of Jeddah near Madina Road descending from Palestine Street, which is one of the most important streets in the center  of city of Jeddah, where this region has all the facilities of commercial banks, hotels and major companies. The Al Noor Centre consists of the mezzanine and nine upper floors, office floors and penthouse offices. Al Noor Center has a modern design with an innovative form of the outside of the building, coated glass, giving special and attractive addition to provide all the technical services and expertise in the building.`,
    image:'http://www.dorchesteres.com/dorchesterweb/Proadmin/Uploaded/Properties/gvsnGVNOOR.jpg?width=440&height=264&mode=crop'
  },
  {
    title:'4 points',
    text:` project is situated in Al Rawdah street which is regarded as the heart of Jeddah.the project has an elegant innovative architectural design in addition to the availability of all services.
• The project is composed of 4 stories plus a basement
• 6 retail shops with different spaces starting from 106m2
• 12 Administrative offices with glass fronts overlooking
   Al rawdah Street.
• Basement floor accommodates more than 60 cars plus
  a front yard parking slots.
• Telephone lines and DSL network.
`,
    image:'http://www.dorchesteres.com/dorchesterweb/Proadmin/Uploaded/Properties/kwwbKW4points.jpg?width=440&height=264&mode=crop'
  },
  {
    title:'Sama Beirut - BER0003',
    text:`Sama Beirut was born from Beirut, a city that has witnessed many civilizations, the mix of which has built its historic footprint. Today, this wealth is the essence behind Sama Beirut’s conception.
Rising 256m above sea level Lebanon’s tallest tower stands 50 story high creating a majestic presence on Beirut’s landscape. Elegantly flowing upward like a heavenly villa in the sky, the landmark building brings an unprecedented comfort and lavishness to the City.
The fundamental design of the tower begins with 4 sheets, each folded over, enveloping and rising above the one before it giving the illusion of stepping up towards the heaven. `,
    image:'http://www.dorchesteres.com/dorchesterweb/Proadmin/Uploaded/Properties/qyzxQYCommercialEntrance.jpg?width=440&height=264&mode=crop'
  },
  {
    title:'Castor et Pollux - BER0008',
    text:`Castor and Pollux, a project of luxury apartments in Saifi, Downtown Bierut, a very strategic location, minutes away from Bieryt Souks shopping center and Bierut - Downtown business district. Castor and Pollux ecompases luxirious apartments with sea views to give a comfortable and calm lifestyle. Castor is under construction. Pollux will follow in the coming years.
`,
    image:'http://www.dorchesteres.com/dorchesterweb/Proadmin/Uploaded/Properties/bkegBK5.jpg?width=440&height=264&mode=crop'
  }
];
export default class SlideShow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
          {slides.map((item) => (
            <View style={styles.slide}>
                <View style={{width:300}}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.text}>{item.text}</Text>

                </View>


                  <Image
                    style={styles.image}
                    source={{uri: item.image}}
                  />


            </View>
          ))}


        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper:{

  },
  slide:{
    flexDirection:'row',

    backgroundColor:"#002f56"
  },
  image:{
    width: 400,
    height: 300,
    resizeMode:'cover'
  },
  title:{
    fontSize:24,
    margin:10,

    color:"#fff",
  },
  text:{
    color:"#fff",
    margin:10,
    fontSize:12,

  },
  content:{

  }
});
