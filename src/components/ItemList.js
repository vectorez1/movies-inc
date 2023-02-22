import React from 'react';
import { useState } from 'react';
import {View, StyleSheet, Text,Image} from 'react-native';
let imgSize = 120;

const ItemList = ({movie}) => {
    const [pressedColor,setPressedColor]= useState('container');
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const{title,overview,release_date,original_title,
        original_language,adult,vote_average,vote_count,
        poster_path} = movie;
        
    return (
        <View style = {styles.container} onTouchStart={()=>{console.log('klk')}}>
            <Image 
                source={{uri: IMAGE_PATH + poster_path}}
                alt = {title}
                style ={styles.imgs}
            /> 
            <View style = {styles.itemInfo}>
                <Text style = {styles.itemTitle}>{title}</Text>
                <Text style = {styles.itemReleaseDate}>{release_date}</Text>
                <View style={styles.itemDescription}><Text >{overview}</Text></View>
                <View><Text style={styles.itemRating}>{vote_average}</Text></View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        overflow:'hidden',
        padding:10,
        //marginVertical:5,
        width:'100%',
        height:160,
        backgroundColor:'#FFFFFF',
        //borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
    },
    containerPressed:{
        overflow:'hidden',
        padding:10,
        //marginVertical:5,
        width:'100%',
        height:160,
        backgroundColor:'orange',
        //borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
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
    itemReleaseDate:{
        color:"#999999",
    },
    itemDescription:{
        height:40,
        width:'82%',
        overflow:'hidden',
        marginRight:10,
    },
    itemRating:{
        fontWeight:'700',
    }
})

export default ItemList;
