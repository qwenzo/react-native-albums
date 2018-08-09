import React from 'react';
import {View} from'react-native';


const CardSection = (props) =>{
    return (
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    )
}

const styles={
    containerStyle:{
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding:5
    }
}

export default CardSection;