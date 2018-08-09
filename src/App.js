import React, {Component} from 'react';
import {View,Text} from 'react-native';
import Header from './Header';
import CardList from './CardList';

class App extends Component{
  render(){
    return(
      <View>
        <Header />
        <CardList />
      </View>
    )
  }
}

export default App;
