import React from 'react';
import {StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Main from './components/Main/Main';
import Authentication from './components/Authenticate/Authentication';
import ChangeInfo from './components/ChangeInfo';
import OrderHistory from './components/OrderHistory';
import Menu from './components/Main/Menu';
// import Home from './component/Main/Shop/Home';



//
// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: Main,
//   },
//   Authentication: {
//     screen: Authentication
//   }
// });

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
// const SignInScreen = createStackNavigator({
//   SignIn: ChangeInfo,
//   ForgotPassword: OrderHistory,
// });
//
const HomeScreen = createStackNavigator({
  Home: Main,
  Authentication: Authentication,
  ChangeInfo: ChangeInfo,
  OrderHistory: OrderHistory
});

const AppNavigator = createDrawerNavigator({
  /*
   * Rather than being rendered by a screen component, the
   * AuthenticationNavigator is a screen component
   */
  HomeScreen: HomeScreen,

},{
  contentComponent: props => (<Menu {...props} />)
});

const AppContainer = createAppContainer(AppNavigator);
