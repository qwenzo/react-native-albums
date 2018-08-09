import React from 'react';
import {View , Text , TouchableOpacity} from 'react-native';

const Button = ({text, onClick}) =>{
    const {containerStyle,textStyle} = styles;
    return(
        <View style={containerStyle}>
            <TouchableOpacity style={textStyle}  onPress={onClick}>
            test
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    containerStyle:{
        padding:5,
        alignItem:'center',
        justifyContent:'center',
        borderColor: 'blue'
    },
    textStyle:{
        fontWeight:'600',
        fontSize:50
    }
}

export default Button;