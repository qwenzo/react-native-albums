import React from 'react';
import { View, Text } from 'react-native';

 const Header = () =>{
    const {containerStyle,TextStyle} = styles;
    return(
        <View style={containerStyle}>
            <Text style={TextStyle}>
                Albums
            </Text>
        </View>
    )
}

const styles= {
    containerStyle:{
        //borderBottomWidth: 1,
       // borderColor: 'black',
       backgroundColor: '#F8F8F8',
        alignItems:'center',
        justifyContent:'center',
        elevation:5,
        height:50,
    },
    TextStyle:{
        fontSize:20
    }

}

export default Header;

