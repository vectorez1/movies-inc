import React from 'react';
import {View, StyleSheet,Image,Text} from 'react-native';

const Rating = ({amount}) => {
    const starPath = require('../images/star.png');
    const amount = Math.floor(amount);
    return (
        <View style={styles.container}>          
            {for(let i = 0; i<amount; i++){console.log('l;l')}}  
        </View>
    );
}

const styles = StyleSheet.create({
    container:{

    }
})

export default Rating;
