import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import {View, StyleSheet, Text, TextInput, FlatList, SafeAreaView ,Image} from 'react-native';
import ItemList from '../components/ItemList';

/*
    -La Lista debe incluir el titulo de la pelicula, la fecha de estreno, la medida de votos
    y el cartel de la pelicula.
    -La lista debe mostrar solo la primera pagina de resultados.
    -la Lista debe estar ordenada alfabeticamente
*/

const MainScreen = () => {

    //API Variables
    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = '9c024169de071d4fbd135671bf5d05cf'    

    //setting state Variables
    const [movies,setMovies] = useState([]);

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
    
    //Sorting API
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
        <View style={styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.titleText}>
                    Movies Inc
                </Text>
            </View>

            {/* Rendering Movie List Elements */}
            <FlatList
                data={movies}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=><ItemList movie={item}/>}
                style={{width:'100%'}}
                ItemSeparatorComponent = {()=><View style={{borderTopWidth:0.41, borderColor:'#cccccc',}}></View>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        alignItems:'center',
    },
    titleContainer:{
        backgroundColor:'#1D1533',
        alignContent:'center',
        width:'100%',
        paddingVertical:40,
        shadowOffset:100
    },
    titleText:{
        fontSize:40,
        fontWeight:'800',
        color:'white',
        alignSelf:'center',
    },
});

export default MainScreen;
