import React,{Component} from 'react';
import {View , Text , Image} from 'react-native';
import axios from 'axios';
import Card from './Card';
import CardSection from './CardSection'

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
                       <CardSection>
                        <Image style={styles.imageStyle} source={{uri:details.thumbnail_image}}/>
                        <Text>{details.title}</Text>
                       </CardSection>
                       <CardSection>
                       <Text>{details.title}</Text>
                       </CardSection>
                    </Card>
                  )
                   }
               ) }
            </View>
        )
    }
}

const styles={
    imageStyle:{
        width:50
        ,height:50
    }
}

export default CardList;