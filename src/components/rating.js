import React from 'react';
import axios from 'axios';
import {View, StyleSheet,Image,Text,TouchableOpacity} from 'react-native';
import { useEffect,useState } from 'react';
/*
-En La Pagina de la Pelicula detallada, debe haber un conjunto de estrellas que el usuario
pueda utilizar para calificar la pelicula.
-La calificacion debe ser contabilizada de nuevo en la API
*/
const Rating = ({vote_average,id,sessionID}) => {
    //const tamount = Math.floor(vote_average);
    
    //set Star Variables
    const [rating,setRating] = useState(vote_average)
    const [maxRating,setMaxRating] = useState([1,2,3,4,5,6,7,8,9,10])
    const API_KEY = '9c024169de071d4fbd135671bf5d05cf'
    const API_URL = 'https://api.themoviedb.org/3';
    //Star Image
    const starPath = '../images/star.png';
    const starOutlinePath = '../images/starOutline.png'

    //Post the star rating
    let postRating = (rating) =>{
        //`https://api.themoviedb.org/3/movie/${id}/rating?api_key=${API_KEY}&guest_session_id=${guessSessionId}`
        axios.post(`${API_URL}/movie/${id}/rating?api_key=${API_KEY}&guest_session_id=${sessionID}`, {
        value: rating
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
    }

    useEffect(()=>{
             
    },[])
    
    return (
        <View style = {styles.container}>
            <View style = {{flexDirection:'row',}}>
                <Image
                    source={require('../images/star.png')}
                    style = {styles.starIcon}
                />
                    <Text style={{fontWeight:'700',}}>{rating + "/" + maxRating.length}</Text>                
            </View>
            <View style={styles.starsContainer}>  
                {/* Creating Star Rating System*/}
                {maxRating.map((item,key)=>{
                    return(
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={()=>{                
                                setRating(item)   
                                postRating(item)  
                                alert('Gracias Por Tu Aporte!')                           
                            }}
                        >
                        <Image
                            style={styles.starImg}
                            source={
                                item <= rating
                                ? require(starPath) : require(starOutlinePath)
                            }
                        />
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{alignItems:'center',},
    starsContainer:{
        height:40,
        //backgroundColor:'#AB02C9',
        borderColor:'#cccccc',
        borderWidth:1,
        padding:10,
        alignItems:'center',
        flexDirection:'row',
        borderRadius:15,
    },
    starImg:{
        width:25,
        height:25,
        margin:2,
    },
    starIcon:{
        width:13,
        height:13,
        alignSelf:'center',
        marginRight:5,
    },
})

export default Rating;
