import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import codePush from "react-native-code-push";

class FirstTabScreen extends Component {
  static navigatorButtons = {
    leftButtons: [{
      icon: require('../../img/navicon_menu.png'),
      id: 'menu'
    }],
    rightButtons: [
      {
        title: 'Edit',
        id: 'edit'
      },
      {
        icon: require('../../img/navicon_add.png'),
        id: 'add'
      }
    ]
  };
  static navigatorStyle = {
    navBarBackgroundColor: '#4dbce9',
    navBarTextColor: '#ffff00',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light',
    tabBarBackgroundColor: '#4dbce9',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ffff00'
  };

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'menu') {
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
    if (event.id === 'edit') {
      Alert.alert('NavBar', 'Edit button pressed');
    }
    if (event.id === 'add') {
      Alert.alert('NavBar', 'Add button pressed');
    }
  }

  render() {
    return (
      <View style={{flex: 1, padding: 20}}>
        <TouchableOpacity onPress={ this.onPushPress.bind(this) }>
          <Text style={styles.button}>Push Plain Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onAppIntroPress.bind(this) }>
          <Text style={styles.button}>App Intro</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPushRealmPress.bind(this) }>
          <Text style={styles.button}>Push Realm Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPushLoginPress.bind(this) }>
          <Text style={styles.button}>الدخول</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPushMapPress.bind(this) }>
          <Text style={styles.button}>الخارطة</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPushDashboardPress.bind(this) }>
          <Text style={styles.button}>لوحة المؤشرات</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onPushStyledPress.bind(this) }>
          <Text style={styles.button}>Push Styled Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ this.onModalPress.bind(this) }>
          <Text style={styles.button}>Show Modal Screen</Text>
        </TouchableOpacity>

        {
          Platform.OS === 'ios' ?
            <TouchableOpacity onPress={ this.onLightBoxPress.bind(this) }>
              <Text style={styles.button}>Show LightBox</Text>
            </TouchableOpacity> : false
        }

        {
          Platform.OS === 'ios' ?
            <TouchableOpacity onPress={ this.onInAppNotificationPress.bind(this) }>
              <Text style={styles.button}>Show In-App Notification</Text>
            </TouchableOpacity> : false
        }

        <TouchableOpacity onPress={ this.onStartSingleScreenApp.bind(this) }>
          <Text style={styles.button}>Show Single Screen App</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onPushPress() {
    this.props.navigator.push({
      title: "More",
      screen: "example.PushedScreen"
    });
  }

  onAppIntroPress() {
    this.props.navigator.push({
      title: "App Intro",
      screen: "example.AppIntroScreen"
    });
  }



  onPushStyledPress() {
    this.props.navigator.push({
      title: "Styled",
      screen: "example.StyledScreen"
    });
  }

  onPushDashboardPress() {
    this.props.navigator.push({
      title: "لوحة المؤشرات",
      screen: "example.DashboardScreen"
    });
  }

  onPushRealmPress() {
    this.props.navigator.push({
      title: "Realm",
      screen: "example.RealmScreen"
    });
  }

  onPushLoginPress() {
    this.props.navigator.push({
      title: "Login",
      screen: "example.LoginScreen"
    });
  }

  onPushMapPress() {
    this.props.navigator.push({
      title: "Map",
      screen: "example.MapScreen"
    });
  }

  onModalPress() {
    this.props.navigator.showModal({
      title: "Modal",
      screen: "example.ModalScreen"
    });
  }

  onLightBoxPress() {
    this.props.navigator.showLightBox({
      screen: "example.LightBoxScreen",
      style: {
        backgroundBlur: "dark"
      },
      passProps: {
        greeting: 'hey there'
      },
    });
  }

  onInAppNotificationPress() {
    this.props.navigator.showInAppNotification({
      screen: "example.NotificationScreen"
    });
  }

  onStartSingleScreenApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'example.FirstTabScreen'
      },
      drawer: {
        left: {
          screen: 'example.SideMenu'
        }
      }
    });
  }
}

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    fontSize: 30 ,
    marginBottom: 10,
    marginTop: 10,
    color: 'black',
    fontFamily: 'Cairo-Bold'
  }
});


export default codePush(FirstTabScreen);
