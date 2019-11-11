/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';


import {View,StatusBar} from 'react-native';
import ChangeInfo from './components/ChangeInfo';
StatusBar.setHidden(true);
const App: () => React$Node = () => {
  return (
    <View style={{flex:1}}>
      <ChangeInfo/>
    </View>
  );
};


export default App;
