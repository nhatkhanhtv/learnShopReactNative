import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';


import Menu from './Menu';
import Shop from './Shop/Shop';

class Main extends Component {



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
