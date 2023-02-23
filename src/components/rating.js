import React from 'react';
import {View, StyleSheet,Image,Text,TouchableOpacity} from 'react-native';
import { useEffect,useState } from 'react';
import { updateVoteAverage } from './TMDb';

const Rating = ({vote_average,id}) => {
    //const tamount = Math.floor(vote_average);

    //set Star Variables
    const [rating,setRating] = useState(vote_average)
    const [maxRating,setMaxRating] = useState([1,2,3,4,5,6,7,8,9,10])

    //Star Image
    const starPath = '../images/star.png';
    const starOutlinePath = '../images/starOutline.png'

    

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
                                updateVoteAverage(id,rating)
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
