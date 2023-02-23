import React from 'react';
import axios from 'axios';
import {View, StyleSheet,Text, FlatList,Image} from 'react-native';
import { useState,useEffect } from 'react';
import { SafeAreaView } from 'react-native-web';
/*
FF-2
-La Pagina de detalles de la pelicula debe incluir el titulo* de la pelicula.
el año de estreno*, una descripcion* general de la pelicula,
el genero, la calificacion y el cartel de la pelicula*

-La pagina de detalles de la pelicula debe mostrar la lista de los
actores y sus personajes en la pelicula
*/
const DetailsScreen = ({route}) => {
    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = '9c024169de071d4fbd135671bf5d05cf'
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const movie = route.params.movie;
    //const requ = `${API_URL}/movie/${movie.id}/credits?api_key=${API_KEY}&language=en-US`
    //const{title,overview,release_date,original_title,original_language,adult,vote_average,vote_count,poster_path,id} = movie;
    const[movieCredits,setMovieCredits] = useState([]);
    // const[movies,setMovies] =useState([])
    useEffect(()=>{
    })
    return (
        <View style={styles.container}>
            <View style = {{backgroundColor:'#ff00ff',}}>
                <Image
                    source={{uri:`${IMAGE_PATH}/${movie.poster_path}`}}
                    style={{width:200, height:300, borderRadius:10,}}
                />
                <View style={{alignItems:'center',}} >
                    <Text style={{fontWeight:'800', fontSize:15, textAlign:'auto',}}>{movie.title}</Text>
                    <Text style={{fontStyle:'italic', color:'#cccccc',}}>{movie.release_date}</Text>
                    <View style = {{flexDirection:'row',}}>
                        <Image
                            source={require('../images/star.png')}
                            style = {styles.starIcon}
                        />
                        <Text style={{fontWeight:'700',}}>{movie.vote_average}</Text>
                    </View>
                </View>
            </View>
            
            <View>
                <Text style={{fontWeight:'800', fontSize:15,}}>Description:</Text>
                <Text style = {{fontSize:16, textAlign:'justify', backgroundColor:'blue', padding:10, borderRadius:10,}}>{movie.overview}</Text>
            </View>
        </View>
        
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        padding:20,
        //alignItems:'center',
    },
    starIcon:{
        width:13,
        height:13,
        alignSelf:'center',
        marginRight:5,
    },

    
})

export default DetailsScreen;
