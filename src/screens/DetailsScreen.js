import React from 'react';
import axios from 'axios';
import {View, StyleSheet,Text, FlatList,Image, ScrollView} from 'react-native';
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
    const starPath = require('../images/star.png')
    const {title,overview,vote_average,id,original_title,poster_path,release_date} = route.params;
    const [credits,setCredits] = useState([])
    const [loading,setLoading] = useState(true)
    
    const URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=9c024169de071d4fbd135671bf5d05cf&language=en-US`
    const[movieCredits,setMovieCredits] = useState([]);
    // const[movies,setMovies] =useState([])
    const getCasti = ()=>{
        //axios.get(URL).then((e)=>setCredits(e.data)).catch(()=>{console.log('nah')}).finally(setLoading(false))
        //fetch(URL).then(resp => resp.json()).then(json => setCredits(json)).catch(error => console.error(error)).finally(setLoading(false));
    }
    const findMovies = async()=>{
        const {data : { results },
    } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=9c024169de071d4fbd135671bf5d05cf&language=en-US`,{
    });
        setCredits(results)
    } 
    
    useEffect(()=>{
        setLoading(true)
        axios.get(URL).then((r)=>setCredits(r.data)).catch(error => (console.log(error))).finally(()=>setLoading(false))
    },[])
    console.log(credits)
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
            <View style = {{}}>
                <View style={{alignItems:'center',}}>
                    <Image
                        source={{uri:`${IMAGE_PATH}/${poster_path}`}}
                        style={{width:200, height:300, borderRadius:10,}}
                    />
                    <Text style={{fontWeight:'800', fontSize:15, textAlign:'auto',}}>{title}</Text>
                    <Text style={{fontStyle:'italic', color:'#cccccc',}}>{release_date}</Text>
                    <View style = {{flexDirection:'row',}}>
                        <Image
                            source={require('../images/star.png')}
                            style = {styles.starIcon}
                        />
                        <Text style={{fontWeight:'700',}}>{vote_average}</Text>
                    </View>
                </View>
            </View>
            
            <View style={{padding:5,}}>
                <Text style={{fontWeight:'800', fontSize:15,}}>Description:</Text>
                <Text style = {{fontSize:15, textAlign:'justify', borderRadius:10,}}>{overview}</Text>
            </View>
            <View style={{padding:5,}}>
                <Text style={{fontWeight:'800', fontSize:15,}}>Cast:</Text>
                {loading ? <Text>Loading....</Text> : credits.cast.map((e)=><Text>{`${e.name} as: ${e.character}`}</Text>)}
            </View>
        </View>
        </ScrollView>
        
    );
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
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
