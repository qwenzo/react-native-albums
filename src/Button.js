import React from 'react';
import {View , Text , TouchableOpacity} from 'react-native';

const Button = ({text,onClickHandle}) =>{
    const {containerStyle,textStyle} = styles;
    return(

            <TouchableOpacity style={containerStyle} onPress={onClickHandle} >
                <Text style={textStyle}>
                   {text}
                </Text>
            </TouchableOpacity>
    )
}

const styles = {
    containerStyle:{
        marginLeft:5,
        marginRight:5,
        padding:5,
        alignSelf:'stretch',
        borderColor: '#007aff',
        borderRadius: 4,
        borderWidth: 2,
        flex:1
    },
    textStyle:{
        alignSelf:'center',
        fontWeight:'600',
        fontSize:18,
        color:'#007aff'
    },
}

export default Button;