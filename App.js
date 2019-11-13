import React from 'react';
import {StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './components/Main/Main';
import Authentication from './components/Authenticate/Authentication';
import ChangeInfo from './components/ChangeInfo';
import OrderHistory from './components/OrderHistory';

const MainNavigator = createStackNavigator({
  Home: {screen: Main},
  Authentication: {screen: Authentication},
  ChangeInfo: {screen: ChangeInfo},
  OrderHistory: {screen: OrderHistory},
});

const App = createAppContainer(MainNavigator);

export default App;
