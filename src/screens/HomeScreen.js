import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import {View, StyleSheet, Text, TextInput, FlatList, SafeAreaView ,Image} from 'react-native';
import DetailsScreen from './DetailsScreen';
import MainScreen from './MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeScreen = ({sessionID}) => {
    const Stack = createNativeStackNavigator();
    useEffect(()=>{
        sessionID && console.log("session id: " + sessionID)
    })
    return (    
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Main'
                    component={MainScreen}
                />
                <Stack.Screen
                    name='Details'
                    component={DetailsScreen}
                    initialParams = {{sessionID : sessionID}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:'#061724',
        justifyContent:'flex-start',
        alignItems:'center',
    },
})
export default HomeScreen;
