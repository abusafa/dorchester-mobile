import {Navigation} from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import PushedScreen from './PushedScreen';
import StyledScreen from './StyledScreen';
import RealmScreen from './RealmScreen';
import MapScreen from './MapScreen';
import AppIntroScreen from './AppIntroScreen';
import LoginScreen from './LoginScreen';
import VerificationCodeScreen from './VerificationCodeScreen';
import SideMenu from './SideMenu';
import ModalScreen from './ModalScreen';
import ModalMapScreen from './ModalMapScreen';
import ModalDataListScreen from './ModalDataListScreen';
import YoutubeScreen from './YoutubeScreen';

import DashboardScreen from './DashboardScreen';
import NotificationScreen from './NotificationScreen';
import LightBoxScreen from './LightBoxScreen';
import InAppNotification from './InAppNotification';


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('example.PushedScreen', () => PushedScreen);
  Navigation.registerComponent('example.StyledScreen', () => StyledScreen);
  Navigation.registerComponent('example.ModalScreen', () => ModalScreen);
  Navigation.registerComponent('example.ModalMapScreen', () => ModalMapScreen);
  Navigation.registerComponent('example.ModalDataListScreen', () => ModalDataListScreen);
  Navigation.registerComponent('example.YoutubeScreen', () => YoutubeScreen);



  Navigation.registerComponent('example.DashboardScreen', () => DashboardScreen);
  Navigation.registerComponent('example.RealmScreen', () => RealmScreen);
  Navigation.registerComponent('example.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('example.AppIntroScreen', () => AppIntroScreen);

  Navigation.registerComponent('example.InAppNotification', () => InAppNotification);


  Navigation.registerComponent('example.VerificationCodeScreen', () => VerificationCodeScreen);
  Navigation.registerComponent('example.MapScreen', () => MapScreen);

  Navigation.registerComponent('example.NotificationScreen', () => NotificationScreen);
  Navigation.registerComponent('example.SideMenu', () => SideMenu);
  Navigation.registerComponent('example.LightBoxScreen', () => LightBoxScreen);
}
