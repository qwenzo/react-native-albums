import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Header from './Header';

class App extends Component{
  render(){
    return(
      <View>
        <Header />
        <Text>test</Text>
      </View>
    )
  }
}

export default App;
