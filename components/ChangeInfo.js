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
  static navigationOptions = {
    drawerLabel: 'Notifications',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./notif-icon.png')}
    //     style={[styles.icon, { tintColor: tintColor }]}
    //   />
    // ),
  };
  goToHome() {
    const {navigate} = this.props.navigation;
    navigate('Home');
  }
  render(){
    return (
      <View style={{flex:1,backgroundColor: '#ccc'}}>
        <Text>ChangeInfo page</Text>
        <Button
            title="Go back"
            onPress={() => this.goToHome()}
          />
      </View>
    );
  }
};


export default ChangeInfo;
