import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

class Menu extends Component {

  goToAuthenticate() {
    const {navigate} = this.props.navigation;
    navigate('Authentication');
  }
  goToChangeInfo() {
    const {navigate} = this.props.navigation;
    navigate('ChangeInfo');
  }
  goToOrderHistory() {
    const {navigate} = this.props.navigation;
    navigate('OrderHistory');
  }
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex:1,backgroundColor: 'white'}}>
        <Button
          onPress={() => {this.goToAuthenticate()}}
          title="Go to Authenticate"
        />
        <Button
          onPress={() => {this.goToChangeInfo()}}
          title="Go to Change info"
        />

        <Button
          onPress={() => {this.goToOrderHistory()}}
          title="Go to OrderHistory"
        />

        <Text>Menu</Text>

      </View>
    );
  }
};


export default Menu;
