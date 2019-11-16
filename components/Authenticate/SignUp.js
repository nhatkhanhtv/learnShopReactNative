import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

class SignUp extends Component {
  goToHome() {
    const {navigate} = this.props.navigation;
    navigate('Home');
  }
render(){
  return (
    <View style={{flex:1,backgroundColor: '#000'}}>
      <Text>SignUp page</Text>
      <Button
          title="Go back"
          onPress={() => this.goToHome()}
        />
    </View>
  );
}
};


export default SignUp;
