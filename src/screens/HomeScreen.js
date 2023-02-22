import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import {View, StyleSheet, Text, TextInput, FlatList, SafeAreaView ,Image} from 'react-native';
import DetailsScreen from './DetailsScreen';
import MainScreen from './MainScreen';

const HomeScreen = () => {
    //Getting API information
    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = '9c024169de071d4fbd135671bf5d05cf'    
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'

    //setting state Variables
    const [movies,setMovies] = useState([]);
    const [searchKey,setSearchKey] = useState('')

    //fetching the API
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
    }
    let moviesOrder = movies.sort((a,b)=>{
        if (a.title>b.title){
            return 1;
        };
        if (a.title < b.title){
            return -1;
        }
        else{return 0 }})
    
    
    
    useEffect(() => {
        /* axios.get(`https://api.themoviedb.org/3/movie/640146/credits?api_key=${API_KEY}&language=en-US`)
        .then(res => {setCredit(res.data)}).catch((error)=>{console.log(error)})*/
        setMovies(moviesOrder)
        findMovies();
        console.log(movies[0])
    }, []);

    return (
        <View style={styles.container}>
            
            <MainScreen movies={movies}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:'#061724',
        justifyContent:'flex-start',
        alignItems:'center',
    },
})
export default HomeScreen;
