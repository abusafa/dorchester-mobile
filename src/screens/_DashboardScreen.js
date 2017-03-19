import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


import {  Card, CardItem, Body } from 'native-base';

import AreaSpline from '../charts/AreaSpline';
import Pie from '../charts/Pie';
import Theme from '../theme';
import data from '../data/chart-data';


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
      activeIndex: 0,
      spendingsPerYear: data.spendingsPerYear,
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this._onPieItemSelected = this._onPieItemSelected.bind(this);
    this._shuffle = this._shuffle.bind(this);
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


  _onPieItemSelected(newIndex){
    this.setState({...this.state, activeIndex: newIndex, spendingsPerYear: this._shuffle(data.spendingsPerYear)});
  }

  _shuffle(a) {
      for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
      return a;
  }

  render() {
    const height = 200;
    const width = 500;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
                <View>
                  <Text style={styles.chart_title}>Distribution of spending this month</Text>

                  <Card>
                    <Pie
                      pieWidth={150}
                      pieHeight={150}
                      onItemSelected={this._onPieItemSelected}
                      colors={Theme.colors}
                      width={width}
                      height={height}
                      data={data.spendingsLastMonth} />
                  </Card>
                  <Text style={styles.chart_title}>Spending per year in {data.spendingsLastMonth[this.state.activeIndex].name}</Text>

                  <Card>
                    <AreaSpline
                      width={width}
                      height={height}
                      data={this.state.spendingsPerYear}
                      color={Theme.colors[this.state.activeIndex]} />
                  </Card>
                </View>
              </ScrollView>
      </View>
    );
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
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: 'blue'
  }
});
