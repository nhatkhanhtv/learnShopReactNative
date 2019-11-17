import React,{Component} from 'react';
import {View,Text,Button,Image,StyleSheet,TouchableOpacity} from 'react-native';

import { Icon } from 'react-native-vector-icons/FontAwesome'; // 6.2.2
import Menu from './Menu';
import Shop from './Shop/Shop';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
})



// const LogoTitle extends React.Component {
//   render() {
//     return (
//       <Image
//         source={require('./spiro.png')}
//         style={{ width: 30, height: 30 }}
//       />
//     );
//   }
// }

class Main extends Component {
  // static navigationOptions = {
  //   title:"Home",
  //   headerMode: 'none',
  // }

  goToMenu(){
    this.props.navigation.openDrawer();
  }





  render(){
    const {navigate} = this.props.navigation;
    return (
      <>
      <Button
        onPress={() => {this.goToMenu()}}
        title="Go to Menu"
      />


      </>
    );
  }
};


export default Main;
