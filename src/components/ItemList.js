import React from 'react';
import { useState } from 'react';
import {View, StyleSheet, Text,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

let imgSize = 120;

const ItemList = ({movie}) => {
    const navigation = useNavigation();
    const [pressedColor,setPressedColor]= useState('container');
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const{title,overview,release_date,original_title,
        original_language,adult,vote_average,vote_count,
        poster_path,id} = movie;
    const[press,setPress] = useState(false)
    
    return (
        <View style = {press ? pressedStyles.container : styles.container}
        onTouchEnd={()=>{
            navigation.navigate('Details',{
                title:title,
                overview:overview,
                vote_average:vote_average,
                id:id,
                movie:movie

            })
        }}
        >
            <Image 
                source={{uri: IMAGE_PATH + poster_path}}
                alt = {title}
                style ={styles.imgs}
            /> 
            <View style = {styles.itemInfo}>
                <Text style = {styles.itemTitle}>{title}</Text>
                <Text style = {styles.itemReleaseDate}>{release_date}</Text>
                <View style={styles.itemDescription}><Text >{overview}</Text></View>
                <View style={{flexDirection:'row',}}>
                    <Image
                        source={require('../images/star.png')}
                        style = {{width:13,height:13,alignSelf:'center', marginRight:5,}}
                    />
                    <Text style={styles.itemRating}>{vote_average}</Text>
                </View>
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
const pressedStyles = StyleSheet.create({
    container:{
        overflow:'hidden',
        padding:10,
        //marginVertical:5,
        width:'100%',
        height:160,
        backgroundColor:'#cccccc',
        //borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
    },
})
export default ItemList;
