import React,{Component} from 'react';
import {View , Text , Image} from 'react-native';
import axios from 'axios';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

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
                            <View style={styles.textContainerStyle} >
                            <Text style={styles.titleStyle}>{details.title}</Text>
                            <Text style={styles.artistStyle}>{details.artist}</Text>
                        </View>
                       </CardSection>
                       <CardSection>
                       <Image style={styles.albumImageStyle} source={{uri:details.image}}/>
                       </CardSection>
                       <CardSection>
                        <Button text='BUY NOW!' />
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
    },
    titleStyle:{
        fontSize:15
    },
    artistStyle:{
        
    },
    textContainerStyle:{
        flexDirection: 'column',
        marginLeft:5
    },
    albumImageStyle:{
        width:null,
        height:350,
        flex:1
    }
}

export default CardList;