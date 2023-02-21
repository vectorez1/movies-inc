import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ItemList = ({movie}) => {
    const{nombre,color,id} = movie;
    return (
        <View style = {styles.container}>
            <Text>{movie.nombre}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    padding:10,
    backgroundColor:'#cccccc',
    borderRadius:20,
}
})

export default ItemList;
