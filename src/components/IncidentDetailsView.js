/*
 * This example demonstrates how to use IncidentDetailsView within a ScrollView component.
 */
import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ListView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import faker from 'faker';
import IncidentInfo from './IncidentInfo.js';
import CallerInfo from './CallerInfo.js';
import IncidentInstructionsList from './IncidentInstructionsList.js';
import {autorun} from "mobx";
import {observer, inject} from "mobx-react/native";


import IncidentActionButtons from './IncidentActionButtons.js';

@inject("uiStore")
@inject("IncidentsStore")
@observer
class IncidentDetailsView extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      selectedIncident:null,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  componentWillReceiveProps(nextProps){
    const {uiStore, IncidentsStore:{selectedIncident}} = nextProps;
    if(selectedIncident)
    {
      //this.refs.ListView.scrollTo({ x: 0, y: 0 });

      this.state =  {
        selectedIncident: selectedIncident,
        dataSource: this.state.dataSource.cloneWithRows([
          {
            type:'ActionButtons',
            data: selectedIncident
          },
          {
            type:'IncidentInfo',
             data: selectedIncident.info
          },
          {
            type:'CallerInfo',
            data: selectedIncident.callerInfo
          },
          {
            type:'IncidentInstructions',
            data: selectedIncident.instructionList
          },
        ].slice())
      };
    }


  }

  componentDidMount(){

  }


  renderRow(rowData){
    let rowComponent = <View></View>;
    switch (rowData.type) {
      case 'IncidentInfo':
          rowComponent = <IncidentInfo data={rowData.data} />
        break;
      case 'CallerInfo':
          rowComponent = <CallerInfo data={rowData.data} />
        break;
      case 'ActionButtons':
          rowComponent = <IncidentActionButtons data={rowData.data}
            onLocatePress={()=> this.handleLocatePress()}
          />
        break;

      case 'IncidentInstructions':
          rowComponent = <IncidentInstructionsList instructions={rowData.data} />
        break;

      default:

    }

    return rowComponent;
  }

  render() {
    const { onScroll = () => {} } = this.props;
    const {IncidentsStore:{selectedIncident}} = this.props;

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

                headerBackgroundColor="#333"
                stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
                parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
                backgroundSpeed={10}

                renderBackground={() => (
                  <View key="background">
                    <Image
                      source={require('../../img/min.jpg')}
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
                    <Image style={ styles.avatar }
                      source={require('../../img/Saudi-police-e1363868331948.jpg')}

                      />
                    <Text style={ styles.sectionSpeakerText }>
                      {this.state.selectedIncident && this.state.selectedIncident.info.cat}
                    </Text>
                    <Text style={ styles.sectionTitleText }>
                      {this.state.selectedIncident && this.state.selectedIncident.info.subCat}
                    </Text>
                  </View>
                )}

                renderStickyHeader={() => (
                  <View key="sticky-header" style={styles.stickySection}>
                    <Text style={styles.stickySectionText}>
                      تفاصيل البلاغ
                    </Text>
                  </View>
                )}

                renderFixedHeader={() => (
                  <View key="fixed-header" style={styles.fixedSection}>
                    <TouchableOpacity
                      style={{width:50,alignItems: 'center'}}
                      onPress={() => //this.refs.ListView.scrollTo({ x: 0, y: 0 })
                        this.props.uiStore.sidebar.panel = 'IncidentsList'
                      }
                      >
                      <Icon active name="arrow-forward" style={{color:'#fff'}}
                      />
                    </TouchableOpacity>


                  </View>
                )}/>
            )}
          />
      </View>
    );
  }

  handleLocatePress(){
    const {IncidentsStore:{selectedIncident:{location}}} = this.props;
    if(this.props.onLocationPress) this.props.onLocationPress(location);
  }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: 400,
    justifyContent: 'flex-end',
    backgroundColor:'#6FAF98'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10,
    backgroundColor:'#6FAF98',
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
    paddingTop: 100
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
    paddingVertical: 5,
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

export default IncidentDetailsView;
