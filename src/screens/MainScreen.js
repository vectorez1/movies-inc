import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import {View, StyleSheet, Text, TextInput, FlatList, SafeAreaView ,Image} from 'react-native';
import ItemList from '../components/ItemList';


const MainScreen = ({movies}) => {
    return (
        <View style={styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.titleText}>
                    Movies Inc
                </Text>
            </View>
            {/* {movies.map((e)=>(<Text key={e.id}>{e.title}</Text>))} */}
            <FlatList
                data={movies}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=><ItemList movie={item}/>}
                style={{width:'100%'}}
                
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:25,
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
