import React from 'react';
import axios from 'axios';
import {View, StyleSheet,Text, FlatList,Image} from 'react-native';
import { useState,useEffect } from 'react';
/*
FF-2
-La Pagina de detalles de la pelicula debe incluir el titulo de la pelicula.
el año de estreno, una descripcion general de la pelicula,
el genero, la calificacion y el cartel de la pelicula

-La pagina de detalles de la pelicula debe mostrar la lista de los
actores y sus personajes en la pelicula
*/
const DetailsScreen = ({movie}) => {
    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = '9c024169de071d4fbd135671bf5d05cf'
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    //const requ = `${API_URL}/movie/${movie.id}/credits?api_key=${API_KEY}&language=en-US`
    //const{title,overview,release_date,original_title,original_language,adult,vote_average,vote_count,poster_path,id} = movie;
    const[movieCredits,setMovieCredits] = useState([]);
    
    return (
        <View style = {styles.container}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'grey',
    }
    
})

export default DetailsScreen;
