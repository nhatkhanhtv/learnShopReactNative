import React from 'react';
import {
  StatusBar,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeViewArea,
  ScrollView} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator,DrawerItem } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Main from './components/Main/Main';
import Authentication from './components/Authenticate/Authentication';
import ChangeInfo from './components/ChangeInfo';
import OrderHistory from './components/OrderHistory';
import Menu from './components/Main/Menu';

import Home from './components/Main/Shop/Home';
import Cart from './components/Main/Shop/Cart';
import Search from './components/Main/Shop/Search';
import Contact from './components/Main/Shop/Contact';

import { Icon } from 'react-native-vector-icons/FontAwesome'; // 6.2.2
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
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
})



export default class App extends React.Component {
  render() {
    // const {navigate} = this.props.navigation;
    return <>
      <View
        <Button onPress={alert('click')} title=""/>
      </View>
      <AppContainer />
    </>;
  }
}


const HomeScreen = createStackNavigator({
  Home: {
    screen:Main,
    navigationOptions: () => ({
      title: `A`,
      headerShown: false,
    }),
  },
  Authentication: {
    screen: Authentication,
    navigationOptions:{
      headerShown: false,
    }
  },
  ChangeInfo: {
    screen:ChangeInfo,
    navigationOptions:{
      headerShown: false,
    }
  },
  OrderHistory: {
    screen: OrderHistory,
    navigationOptions:{
      headerShown: false,
    }
  }
},{
  //headerMode : 'none',
  defaultNavigationOptions:{

      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
});

const ShopScreen = createBottomTabNavigator({
  Home: {
    screen:HomeScreen
  },
  Cart: {
    screen:Cart
  },
  Search: {
    screen:Search
  },
  Contact:{
    screen:Contact
  },
},{

    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showIcon: true,
      showLabel: true,
    },

});


const AppNavigator = createDrawerNavigator({
  /*
   * Rather than being rendered by a screen component, the
   * AuthenticationNavigator is a screen component
   */
  HomeTab: ShopScreen,


},{
  contentComponent: props => (<Menu {...props} />)

});

const AppContainer = createAppContainer(AppNavigator);
