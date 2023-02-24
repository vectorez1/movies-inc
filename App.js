//import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import  axios  from 'axios';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import {  Button, StyleSheet, Text,} from 'react-native';


export default function App() {
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '9c024169de071d4fbd135671bf5d05cf';    
  const [guessSessionId,setGuessSessionId] = useState('');
  
  useEffect(() => {
      axios.get(`${API_URL}/authentication/guest_session/new?api_key=${API_KEY}`)
      .then(e=>setGuessSessionId(e.data.guest_session_id))
      .catch(error=>console.log("error"));   
  }, []);

  return (
    <HomeScreen sessionID={guessSessionId} />
  );
}
const styles = StyleSheet.create({});

