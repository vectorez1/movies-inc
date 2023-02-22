//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Axios } from 'axios';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import { 
  Button, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  FlatList, 
  Image} from 'react-native';

export default function App() {
  const [state, setstate] = useState({

  });
  return (
    <View style={styles.container}>
        <HomeScreen/>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    //backgroundColor:'#061724',
    justifyContent:'flex-start',
    alignItems:'center',
    },
});

