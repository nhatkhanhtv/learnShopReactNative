import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

class Authentication extends Component {
  goToHome() {
    const {navigate} = this.props.navigation;
    navigate('Home');
  }
render(){
  return (
    <View style={{flex:1,backgroundColor: '#ccc'}}>
      <Text>Authentication page</Text>
      <Button
          title="Go back"
          onPress={() => this.goToHome()}
        />
    </View>
  );
}
};


export default Authentication;
