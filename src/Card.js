import React from 'react';
import {View,Text} from 'react-native';
import axios from 'axios';

    const Card  =(props) =>{
        return (
            <View style={styles.containerStyle}>
                {props.children}
            </View>
        )
        }
    
    const styles={
        containerStyle:{
            backgroundColor: '#FFFF',
            elevation:2,
            marginTop:5,
            marginLeft:5,
            marginRight:5,
            borderRadius: 1,
            borderWidth:1,
            borderColor:'#ddd',
            borderBottomWidth: 0,
        }
    }


export default Card;
