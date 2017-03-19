import React, {Component} from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    Alert,
    Platform,
    Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');
import codePush from "react-native-code-push";
import * as Animatable from 'react-native-animatable';

import UsersStore from '../store/user.js';

import {
    Container,
    Content,
    Item,
    Input,
    Icon,
    Button
} from 'native-base';

import Modal from 'react-native-simple-modal';
import Icon2 from 'react-native-vector-icons/Ionicons';
import IncidentsStore from '../store/Incidents.js';


class LoginScreen extends Component {
    static navigatorStyle = {
        drawUnderNavBar: true,
        drawUnderTabBar: true,
        navBarTranslucent: true,
        navBarHidden: true
    };

    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

        this.state = {
           user: undefined,
           activationCode : undefined,
           offset: 0,
           username:'',
           password: '',
        };


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

    render() {
        return (
            <Image style={styles.backgroundImage} source={require('../../img/dbg.png')}>
                <Container>
                    <Content style={{ padding:40}} >
                        <View style={{
                            alignItems: 'center',

                        }}>
                        <Animatable.View delay={200} animation="zoomIn">

                            <Image style={{
                                width: 350,
                                height: 250,
                                opacity: 1,
                                marginTop: 30,
                                resizeMode: 'contain'
                            }} source={require('../../img/ds.png')}/>
                          </Animatable.View>
                            <Animatable.Text  delay={500} animation="zoomIn" style={{
                                backgroundColor: 'transparent',
                                color: '#fff',
                                fontSize: 30,
                                marginTop:30,
                                fontFamily: 'Cairo'
                            }}>
                                An International Standard Bearer in Real Estate Investments
                            </Animatable.Text>

                            <Animatable.Text  delay={800} animation="zoomIn"  style={{
                                backgroundColor: 'transparent',
                                color: '#fff',
                                fontSize: 20,
                                fontFamily: 'Cairo'
                            }}>

                              Development and Management
                            </Animatable.Text>

                            <Animatable.View ref="loginView" delay={1000} animation="fadeInUp"  style={styles.header}>
                                <Item rounded style={{
                                    width: 400,
                                    marginBottom: 20,
                                    
                                }}>
                                    <Input placeholder='username'
                                      placeholderTextColor='#FFE900'
                                      style={{fontFamily: 'Cairo',   color:'#fff'}}
                                      onChangeText={(text) => this.setState({username:text})}
                                    />
                                    <Icon active name='person' style={{
                                        color: '#fff'
                                    }}/>

                                </Item>

                                <Item rounded style={{
                                    width: 400,
                                    marginBottom: 20,


                                }}>
                                    <Input
                                      placeholder='password'
                                      placeholderTextColor='#FFE900'
                                      secureTextEntry={true}
                                      onChangeText={(text) => this.setState({password:text})}
                                    style={{fontFamily: 'Cairo' , color:'#fff'}}/>
                                    <Icon active name='eye' style={{
                                        color: '#fff'
                                    }}/>
                                </Item>

                                <Button rounded success block onPress={() => this.onLoginPress()}>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: 16,
                                        fontFamily: 'Cairo-Bold'
                                    }}>Login</Text>
                                </Button>

                            </Animatable.View>
                        </View>
                    </Content>


                </Container>

                <Modal
                   offset={-150}
                   open={this.state.user !== undefined}
                   modalDidOpen={() => console.log('modal did open')}
                   modalDidClose={() => this.setState({open: false})}
                   closeOnTouchOutside={false}
                   style={{alignItems: 'center'}}
                   modalStyle={{
                       borderRadius: 10,
                       margin: 250,
                       padding: 60,
                       backgroundColor: '#fff'
                    }}>

                   <Animatable.View ref="activationView" style={{alignItems:'center', justifyContent:'center'}}>

                      <Text style={{fontSize: 20, marginBottom: 10, fontFamily:'Cairo-Bold'}}>
                        الرجاء إدخال رمز التحقق
                      </Text>


                      <Item rounded style={{
                          width: 400,
                          marginBottom: 20,
                          flexDirection:'row-reverse'
                      }}>
                          <Input placeholder='رمز التحقق'
                            placeholderTextColor='#666'
                            keyboardType="numeric"
                            style={{fontFamily: 'Cairo-bold', textAlign:'center', marginRight:20, color:"#333"}}

                            onChangeText={(text) => this.setState({activationCode:text})}

                          />
                          <Icon active name='person' style={{
                              color: '#fff'
                          }}/>

                      </Item>

                      <Button rounded success block onPress={() => this.onLoginPress()}>
                          <Text style={{
                              color: '#fff',
                              fontSize: 16,

                              fontFamily: 'Cairo-Bold'
                          }}>تأكيد </Text>
                      </Button>

                      <TouchableOpacity
                         style={{marginTop: 30, alignItems:'center'}}
                         onPress={() => this.setState({user: undefined})}>
                         <Icon2 active name="ios-close-circle-outline" style={{fontSize:30}}/>
                         <Text style={{fontFamily:'Cairo',color:'grey'}}>إغلاق</Text>
                      </TouchableOpacity>

                   </Animatable.View>

                </Modal>
            </Image>
        );
    }

    onPushVerificationCodePress() {

      this.setState({user: undefined})

      let user = UsersStore.isUser({
        username:this.state.username,
        password: this.state.password
      });

      if(!user){
        this.refs.loginView.shake(800)
        return;
      }

      this.setState({user: user});



    }

    onLoginPress(){



      this.props.navigator.push({
        title: "Verification Code",
        screen: "example.DashboardScreen",
      });
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222",
    },
    header: {
        marginTop: 50,
        marginRight: 20,
        marginLeft: 20,
        width: 400,
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        width: width,
        height: height,
        resizeMode: 'cover', // or 'stretch'
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#222",
    }

});


//export default codePush(LoginScreen);
export default LoginScreen;
