import React from 'react';
import {View, StyleSheet,Image,Text,TouchableOpacity} from 'react-native';
import { useEffect,useState } from 'react';

const Rating = ({amount}) => {
    const tamount = Math.floor(amount);
    const [defaultStarRating,setDefaultStarRating] = useState(tamount) 
    const [maxRating,setMaxRating] = useState([1,2,3,4,5,6,7,8,9,10])
    const starPath = '../images/star.png';
    const starOutlinePath = '../images/starOutline.png'
    const [starImg,setStarImg]=useState([])

    

    useEffect(()=>{
       
    },[])
    
    return (
        <View style={styles.container}>  
            {maxRating.map((item,key)=>{
                return(
                    <TouchableOpacity
                        activeOpacity={0.7}
                        key={item}
                        onPress={()=>setDefaultStarRating(item)}
                    >
                    <Image
                        style={styles.starImg}
                        source={
                            item <= defaultStarRating
                            ? require(starPath) : require(starOutlinePath)
                        }
                    />
                    </TouchableOpacity>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:40,
        backgroundColor:'#cccccc',
        padding:10,
        alignItems:'center',
        flexDirection:'row',
        borderRadius:15,
    },
    starImg:{
        width:25,
        height:25,
    }
})

export default Rating;
