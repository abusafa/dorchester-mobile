import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  AlertIOS,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {  Button} from 'native-base';
import {observer} from "mobx-react/native";

import uiStore from '../store/ui.js';
import userStore from '../store/user.js';

@observer
export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedItem: undefined,
        selected1: 'key1',
        results: {
            items: []
        }
    }
  }
  render() {
    const {activeUser} = userStore
    return (
      <ScrollView style={{flex:1, backgroundColor: '#6FAF98',}}>
      <View style={styles.container}>
        <Image style={{width:150, height:150, opacity:1, marginTop:30}}
          source={require('../../img/Ministry_of_Interior_Saudi_Arabia-white.png')}
        />
        <Text style={styles.title}>الدوريات الميدانية</Text>
        {activeUser &&
          <View>
          <TouchableOpacity onPress={ this.onLogoutPress.bind(this) }>
            <Text style={styles.button}>تسجيل الخروج</Text>
          </TouchableOpacity>

          {activeUser.role === '_admin' &&
            <TouchableOpacity onPress={ this.onDashboardPress.bind(this) }>
              <Text style={styles.button}>لوحة المؤشرات</Text>
            </TouchableOpacity>
          }

          <View style={{marginTop:30, flex:1, borderTopWidth:1, borderColor:'#A6DBC8'}}>
            <Button transparent full large onPress={ ()=> this.onStandardPress() }>
              <Text
                style={[styles.button,styles.text, uiStore.map.type == 'standard' && styles.selected ]}
                >الشوارع</Text>
              <Icon
                style={[styles.icon, uiStore.map.type == 'standard' && styles.selectedIcon ]}
                name='ios-map-outline'
              />
            </Button>

            <Button transparent full large
              onPress={ ()=> this.onSatellitePress() }
              >
              <Text
                style={[styles.button, styles.text, uiStore.map.type == 'hybrid' && styles.selected ]}
                >المصور الفضائي</Text>
              <Icon
                style={[styles.icon, uiStore.map.type == 'hybrid' && styles.selectedIcon ]}
                name='ios-globe-outline'
               />
            </Button>
          </View>
        </View>
        }

    </View>
  </ScrollView>
    );
  }

  onStandardPress()
  {
    uiStore.map.type = 'standard';
  }

  onSatellitePress()
  {
    uiStore.map.type = 'hybrid';
  }

  onLogoutPress() {
    this._toggleDrawer();
    // push/pop navigator actions affect the navigation stack of the current screen only.
    // since side menu actions are normally directed at sibling tabs, push/pop will
    // not help us. the recommended alternative is to use deep links for this purpose

    userStore.activeUser = null;
    this.props.navigator.handleDeepLink({
      link: "tab3/example.LoginScreen"
    });
  }

  onDashboardPress(){
    this.props.navigator.handleDeepLink({
      link: "admin/example.DashboardScreen"
    });
  }

  onReplaceTab2Press() {
    this._toggleDrawer();
    // push/pop navigator actions affect the navigation stack of the current screen only.
    // since side menu actions are normally directed at sibling tabs, push/pop will
    // not help us. the recommended alternative is to use deep links for this purpose
    this.props.navigator.handleDeepLink({
      link: "tab2/example.PushedScreen"
    });
  }

  onModalPress() {
    this._toggleDrawer();
    this.props.navigator.showModal({
      title: "Modal",
      screen: "example.ModalScreen"
    });
  }

  onShowInAppNotification() {
    this._toggleDrawer();
    this.props.navigator.showInAppNotification({
      screen: "example.InAppNotification",
      // autoDismiss: false,
      // autoDismissTimerSec: 1,
      // position: "bottom",
    });
  }

  _toggleDrawer() {
    this.props.navigator.toggleDrawer({
      to: 'closed',
      side: 'left',
      animated: true
    });
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:120,
    alignItems: 'center',

    justifyContent: 'center',

  },
  selected:{
    fontWeight:'bold',
    fontSize: 20,
    color: '#fff',
  },
  selectedIcon:{
    fontSize:30,
    color: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
    marginTop:10,
    fontWeight: '500',
    color:"#2B6751",
    fontFamily: 'cairo'
  },
  button: {
    textAlign: 'right',
    fontSize: 18,
    marginBottom: 10,
    marginTop:10,
    color: '#fff',
    fontFamily: 'cairo',

  },
  text:{
    color:'#A6DBC8',
  },
  icon:{
    color:'#A6DBC8',
    fontSize:24,
    marginLeft:20,
  }
});
