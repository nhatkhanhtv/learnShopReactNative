import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

class SignIn extends Component {
  goToHome() {
    const {navigate} = this.props.navigation;
    navigate('Home');
  }
render(){
  return (
    <View style={{flex:1,backgroundColor: '#ccc'}}>
      <Text>Sign in page</Text>
      <Button
          title="Go back"
          onPress={() => this.goToHome()}
        />
    </View>
  );
}
};


export default SignIn;
