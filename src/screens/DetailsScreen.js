import React from 'react';
import axios from 'axios';
import {View, StyleSheet,Text, FlatList,Image, ScrollView} from 'react-native';
import { useState,useEffect } from 'react';
import Rating from '../components/Rating';

/*
FF-2
-La Pagina de detalles de la pelicula debe incluir el titulo* de la pelicula.
el año de estreno*, una descripcion* general de la pelicula,
el genero, la calificacion y el cartel de la pelicula*

-La pagina de detalles de la pelicula debe mostrar la lista de los
actores y sus personajes en la pelicula
*/
const DetailsScreen = ({route }) => {
    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = '9c024169de071d4fbd135671bf5d05cf';
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
    const {title,overview,vote_average,id,original_title,poster_path,release_date,sessionID} = route.params;
    const [credits,setCredits] = useState([]);
    const [loading,setLoading] = useState(true);
    
    const URL = `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    
    useEffect(()=>{
        setLoading(true);
        axios.get(URL).then((r)=>setCredits(r.data)).catch(error => (console.log(error))).finally(()=>setLoading(false));
        
    },[])
    return (
        <ScrollView style={{backgroundColor: 'white'}} bounces={true}>
            <View style={styles.container}>
            <View style = {{}}>
                <View style={{alignItems:'center',}}>
                    <Image
                        source={{uri:`${IMAGE_PATH}/${poster_path}`}}
                        style={{width:200, height:300, borderRadius:10,}}
                    />
                    <Text style={{fontWeight:'800', fontSize:20, textAlign:'center',}}>{title}</Text>
                    <Text style={{fontStyle:'italic', color:'#cccccc',}}>{release_date}</Text>
                    
                    {loading?<Text>loading...</Text>:<Rating id={id} vote_average={vote_average} sessionID={sessionID}/>}
                </View>
            </View>
            
            <View style={{padding:5,}}>
                <Text style={styles.textSection}>Description:</Text>
                <Text style = {{fontSize:15, textAlign:'justify', borderRadius:10,}}>{overview}</Text>
            </View>
            <View style={{padding:5,}}>
                <Text style={styles.textSection}>Cast:</Text>
                {loading ? <Text style={{color:'#cccccc',}}>Loading....</Text> : credits.cast.map((e)=><Text style={styles.castText} key={Math.random()}>{`${e.name} ${e.character && 'as:'} ${e.character}`}</Text>)}
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
    /* starIcon:{
        width:13,
        height:13,
        alignSelf:'center',
        marginRight:5,
    }, */
    textSection:{
        textDecorationLine:'underline',
        fontWeight:'800',
        fontSize:15,
    },
    castText:{
        marginVertical:2,
        backgroundColor:'#cccccc',
        padding:10,
        borderRadius:10,
        color:'black',
    }

    
})

export default DetailsScreen;
