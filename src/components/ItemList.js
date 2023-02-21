import React from 'react';
import {View, StyleSheet, Text,Image} from 'react-native';
let imgSize = 100;

const ItemList = ({movie}) => {
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const{title,overview,release_date,original_title,original_language,adult,vote_average,vote_count,poster_path} = movie;
    return (
        <View style = {styles.container}>
            <Image 
                source={{uri: IMAGE_PATH + poster_path}}
                alt = {title}
                style ={styles.imgs}
            /> 
            <View style = {styles.itemInfo}>
                <Text style = {styles.itemTitle}>{title}</Text>
                <Text>{release_date}</Text>
                <Text style={styles.itemDescription}>{overview}</Text>
                <Text style={styles.itemRating}>{vote_average}</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        overflow:'hidden',
        padding:10,
        marginVertical:5,
        width:'100%',
        height:120,
        backgroundColor:'#FFFFFF',
        borderRadius:20,
        flexDirection:'row'
    },
    imgs:{
        width:imgSize,
        height:imgSize,
        borderRadius:15,
    },
    itemTitle:{
        fontWeight:'900',
        textDecorationLine:'underline',
    },
    itemInfo:{
        marginLeft:10,

    },
    itemDescription:{
        height:40,
        width:'50%',
        overflow:'hidden',
        marginRight:10,
    },
    itemRating:{
        fontWeight:'700',
    }
})

export default ItemList;
