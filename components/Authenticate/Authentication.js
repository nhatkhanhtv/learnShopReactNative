import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

class Authentication extends Component {

render(){
  return (
    <View style={{flex:1,backgroundColor: '#ccc'}}>
      <Text>Authentication page</Text>
      <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
    </View>
  );
}
};


export default Authentication;
