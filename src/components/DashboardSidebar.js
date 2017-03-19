/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ListView,
  TouchableOpacity,
} from 'react-native';

import { Icon } from 'native-base';
import LineProgress from './dashboard/LineProgress.js';
import CircularProgressChart from './dashboard/CircularProgressChart.js';
import TextInOutChart from './dashboard/TextInOutChart.js';

const SidebarSection = styled.View`
  border-bottom-width: 1;
  border-bottom-color: rgba(255,255,255,0.20);
  flex:1;
  justify-content: center;
  align-items: center;

`;

import styled from 'styled-components/native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const SidebarSection2 = styled.View`
  border-bottom-width: 1;
  border-bottom-color: rgba(255,255,255,0.20);
  flex:2;
  justify-content: center;
  align-items: center;
`;

const SidebarImage = styled(Image)`
  width: 270;
  resize-mode: center;
  flex:2;
`;

export default class DashboardSidebar extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  componentDidMount(){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([
        {
          type:'ActionButtons',
        },
        {
          type:'IncidentInfo',
        },
        {
          type:'CallerInfo',
        },
        {
          type:'IncidentInstructions',
        },
      ].slice())
    })
  }


  renderRow(rowData){
    let rowComponent = <View></View>;
    switch (rowData.type) {
      case 'IncidentInfo':
          rowComponent = (
            <CircularProgressChart />
            )
        break;
      case 'CallerInfo':
          rowComponent = (
                <Image
                  style={{width:220, height: 120, marginLeft:20, resizeMode:'contain'}}
                  source={require('../../img/dashboard/24hours.png')}
                />
            )
        break;
      case 'ActionButtons':
          rowComponent = (
                <TextInOutChart />

            )
        break;

      case 'IncidentInstructions':
          rowComponent = (
                <LineProgress />
            )
        break;

      default:

    }

    return rowComponent;
  }


  render() {
    const { onScroll = () => {} } = this.props;

    return (
      <View style={{flex:1, overflow:'hidden'}}>
          <ListView
            ref="ListView"
            style={styles.container}
            dataSource={ this.state.dataSource }
            renderRow={(rowData) => this.renderRow(rowData)}
            renderScrollComponent={props => (
              <ParallaxScrollView
                onScroll={onScroll}
                headerBackgroundColor="#103D71"
                contentBackgroundColor="#103D71"
                stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
                parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
                backgroundSpeed={10}

                renderBackground={() => (
                  <View key="background">
                    <Image
                      style={{ width:300, height:300, marginTop:-20, marginLeft:0}}
                      source={require('../../img/lhdcLHaboutus.jpg')}
                      />
                    <View style={{position: 'absolute',
                                  top: 0,
                                  width: window.width,
                                  backgroundColor: 'rgba(0,0,0,.4)',
                                  height: PARALLAX_HEADER_HEIGHT}}/>
                  </View>
                )}

                renderForeground={() => (
                  <View key="parallax-header" style={ styles.parallaxHeader }>
                    <Image
                      style={{  width:90, height:90, resizeMode: 'contain', opacity:0.6}}
                      source={require('../../img/white-logo.png')}
                    />
                    <Text style={ styles.sectionSpeakerText }>
                      Dorchester Estates

                    </Text>
                    <Text style={ styles.sectionTitleText }>
                      An International Standard Bearer in Real Estate Investments
                    </Text>
                  </View>
                )}

                renderStickyHeader={() => (
                  <View key="sticky-header" style={styles.stickySection}>
                    <Text style={styles.stickySectionText}>
                      Dorchester Estates
                    </Text>
                  </View>
                )}

                renderFixedHeader={() => (
                  <View key="fixed-header" style={styles.fixedSection}>
                  </View>
                )}/>
            )}
          />
      </View>
    );
  }

}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 250;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#103D71',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT,
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: 'flex-end',
    backgroundColor:'#103D71'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 14,
    margin: 10,
    fontFamily:'cairo',
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  fixedSectionText: {
    color: '#fff',
    fontSize: 20,
    fontFamily:'cairo',
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 30
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2,
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 20,
    fontWeight:'bold',
    fontFamily:'cairo',
    textAlign:'center'
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 14,
    paddingVertical: 5,
    fontFamily:'cairo',
    textAlign:'center'
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20,
    fontFamily:'cairo',
  }
});
