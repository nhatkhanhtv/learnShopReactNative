/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';

import {View,Text,Button} from 'react-native';

class ChangeInfo extends Component {
  render(){
    return (
      <View style={{flex:1,backgroundColor: '#ccc'}}>
        <Text>ChangeInfo page</Text>
        <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
      </View>
    );
  }
};


export default ChangeInfo;
