import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import {View, StyleSheet, Text, TextInput, FlatList, SafeAreaView ,Image} from 'react-native';
import ItemList from '../components/ItemList';
import MainScreen from './MainScreen';

const HomeScreen = () => {
    //Getting API information
    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = '9c024169de071d4fbd135671bf5d05cf'
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'

    //setting state Variables
    const [movies,setMovies] = useState([]);
    const [movie,setMovie] = useState({title:"Loading Movies"})
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
    setMovie(results[0])
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
        setMovies(moviesOrder)
        findMovies();
    }, []);

    return (
        <MainScreen movies={movies}/>
    );
}

export default HomeScreen;
