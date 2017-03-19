import {
  Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import IncidentsStore from './store/Incidents.js';

// screen related book keeping
import {registerScreens} from './screens';
registerScreens();

const createTabs = () => {
  let tabs = [
    {
      label: 'One',
      screen: 'example.LoginScreen',
      icon: require('../img/one.png'),
      selectedIcon: require('../img/one_selected.png'),
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('../img/two.png'),
      selectedIcon: require('../img/two_selected.png'),
      title: 'Screen Two',
      navigatorStyle: {
        tabBarBackgroundColor: '#4dbce9',
      }
    }
  ];
  if (Platform.OS === 'android') {
    tabs.push({
      label: 'Collapsing',
      screen: 'example.CollapsingTopBarScreen',
      icon: require('../img/one.png'),
      title: 'Collapsing',
    });
  }
  return tabs;
};
// this will start our app
// Navigation.startTabBasedApp({
//   tabs: createTabs(),
//   appStyle: {
//     tabBarBackgroundColor: '#0f2362',
//     tabBarButtonColor: '#ffffff',
//     tabBarSelectedButtonColor: '#63d7cc'
//   },
//   drawer: {
//     left: {
//       screen: 'example.SideMenu'
//     }
//   }
// });
Navigation.startSingleScreenApp({
 screen: {
   screen: 'example.LoginScreen',
   title: 'Navigation',
   navigatorStyle: {
     navBarBackgroundColor: '#6FAF98',
     navBarTextColor: '#fff',
     navBarSubtitleTextColor: '#ff0000',
     navBarButtonColor: '#ffffff',
     statusBarTextColorScheme: 'light',
     navBarTextFontFamily:'Cairo'

   }
 }
});
