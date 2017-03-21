import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { Container, Content, Card } from 'native-base';
import YouTube from 'react-native-youtube'
import styled from 'styled-components/native';
import {Grid, Row, Col } from 'react-native-easy-grid';


const FooterView = styled.View`
flex: 1;
justify-content: center;
align-items: center;

`;

const FooterText = styled.Text`
color: #fff;
font-family: cairo-bold;
font-size: 14;

`;

const HeaderText = styled.Text`
color: #fff;
font-weight: 500;
font-size: 30;
margin-bottom: 20;

`;

const ContentText = styled.Text`
color: #fff;
font-size: 20;

`;

const NameText = styled.Text`
font-size: 24;
margin:10;
font-weight: 500;
color: #D81B60;
`;



const RefNoText = styled.Text`
font-size: 15;
margin:10;
color: #999
`;

const TypeText = styled.Text`
font-size: 20;
margin:10;
`;
const UnitTypeText = styled.Text`
font-size: 20;
margin:10;
`;
const CommunityText = styled.Text`
font-size: 20;
margin:10;
`;

const NoOfFloorText = styled.Text`
font-size: 20;
margin:5;
`;

const PropertyForText = styled.Text`
font-size: 20;
margin:5;
color: green;
font-weight: 500;
`;



export default class PropertyDetailsScreen extends Component {
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
  }
  render() {
    const {
      name,
      ref_no,
      type,
      unit_type,
      community,
      no_of_floor,
      property_for,
      youtubeID,
      ground_floor_details,
      first_floor_details
    } = this.props;
    return (
      <Container>
        <Content>
            <Grid>
              <Row>
                <Col style={{ backgroundColor: '#fff', height: 400, padding:10 }}>
                  <Card>
                    <NameText>{name}</NameText>
                    <RefNoText>{ref_no}</RefNoText>
                    <TypeText>{type}</TypeText>
                    <UnitTypeText>{unit_type}</UnitTypeText>
                    <CommunityText>{community}</CommunityText>
                    <NoOfFloorText>No of floor: {no_of_floor}</NoOfFloorText>
                    <PropertyForText>For: {property_for}</PropertyForText>
                  </Card>
                </Col>
                <Col size={2} style={{ backgroundColor: '#00CE9F', height: 400  }}>
                  <YouTube
                    ref="youtubePlayer"
                    videoId={youtubeID} // The YouTube video ID
                    play={false}           // control playback of video with true/false
                    hidden={false}        // control visiblity of the entire view
                    playsInline={true}    // control whether the video should play inline
                    loop={false}          // control whether the video should loop when ended

                    onReady={(e)=>{this.setState({isReady: true})}}
                    onChangeState={(e)=>{this.setState({status: e.state})}}
                    onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
                    onError={(e)=>{this.setState({error: e.error})}}
                    onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}

                    style={{alignSelf: 'stretch', height: 400, backgroundColor: 'black'}}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ backgroundColor: '#FB497C', height: 230, margin:5, padding:10 }}>
                  <HeaderText>Ground Floor Details</HeaderText>
                  <ContentText>{ground_floor_details}</ContentText>
                </Col>
                <Col style={{ backgroundColor: '#7E8EAB', height: 230, margin:5, padding:10   }}>
                  <HeaderText>First Floor Details</HeaderText>
                  <ContentText>{first_floor_details}</ContentText>
                </Col>
              </Row>

              <Row>
                <Col style={{ backgroundColor: '#325BAB', height: 50, margin:5 }}>
                  <FooterView>
                    <FooterText>
                      Dorchester Estates; An International Standard Bearer in Real Estate Investments, Development and Management
                    </FooterText>

                  </FooterView>
                </Col>
              </Row>

            </Grid>
        </Content>
      </Container>
    );
  }
  onNavigatorEvent(event) {
    if (event.id == 'close') {
      this.props.navigator.dismissModal();
    }
  }
  onPushPress() {
    this.props.navigator.push({
      title: "More",
      screen: "example.PushedScreen"
    });
  }
  onPushStyledPress() {
    this.props.navigator.push({
      title: "More",
      screen: "example.StyledScreen"
    });
  }
  onClosePress() {
    this.props.navigator.dismissModal();
  }
  onCloseAllPress() {
    this.props.navigator.dismissAllModals();
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
  }
});
