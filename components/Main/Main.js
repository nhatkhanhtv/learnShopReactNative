import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

class Main extends Component {

  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1,backgroundColor: '#7ab2b5'}}>
        <Text>Main page</Text>
        <Button
          style={{margin:5}}
          title="Authenticate"
          onPress={() => navigate('Authentication')}
        />
        <Button
          style={{margin:5}}
          title="Change Info"
          onPress={() => navigate('ChangeInfo')}
        />
        <Button
          style={{margin:5}}
          title="Order History"
          onPress={() => navigate('OrderHistory')}
        />


      </View>
    );
  }
};


export default Main;
