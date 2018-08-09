import React,{Component} from 'react';
import {View , Text} from 'react-native';
import axios from 'axios';
import Card from './Card'

class CardList extends Component {
    state = {
        albums:[]
    }
    componentWillMount() {
         axios.get('https://rallycoding.herokuapp.com/api/music_albums').then( 
            (req) => {
               this.setState({albums:req.data});
            } 
           
        );
        
    }

    render(){
        return (
            <View>
               { this.state.albums.map( 
                   (details) =>{
                  return (
                    <Card key={details.title} details={details}>
                        <Text>test</Text>
                    </Card>
                  )
                   }
               ) }
            </View>
        )
    }
}

export default CardList;