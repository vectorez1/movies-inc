import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import {View, StyleSheet, Text, TextInput, FlatList, SafeAreaView} from 'react-native';
import ItemList from '../components/ItemList';

const HomeScreen = () => {
    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = '9c024169de071d4fbd135671bf5d05cf'
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

    const [movies,setMovies] = useState([]);
    const [movie,setMovie] = useState({title:"Loading Movies"})
    const [searchKey,setSearchKey] = useState('')

    const findMovies = async(searchKey)=>{
        const type = searchKey ? "search" : "discover"
        const {data : { results },
    } = await axios.get(`${API_URL}/${type}/movie`,{
        params:{
            api_key:API_KEY,
            query:searchKey,
        },
    });
    setMovies(results)
    setMovie(results[0])
    }

    useEffect(() => {
        findMovies();
    }, []);

    return (
        <View style={styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.titleText}>
                    Movies Inc
                </Text>
            </View>
            {movies.map((e)=>(<Text>{e.title}</Text>))}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#696033',
        width:'100%',
        height:'100%',
        alignItems:'center',
    },
    titleContainer:{
        marginTop:40,
        backgroundColor:'#ffa300',
        padding:10,
        paddingHorizontal:80,
        borderRadius: 20,
        shadowOffset:100
    },
    titleText:{
        fontSize:40,
        fontWeight:'800',
        color:'white'
    }
});

export default HomeScreen;
