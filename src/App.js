import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import Header from './Header';
import CardList from './CardList';

class App extends Component{
  render(){
    return(
      <View style={styles.containerStyle}>
        <Header />
         <ScrollView >
        <CardList />
      </ScrollView>
      </View>
     
    )
  }
}

const styles={
  containerCardsStyle:{
    
  },
  containerStyle:{
    flex:1
  }

}

export default App;
