//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Axios } from 'axios';
import { 
  Button, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  FlatList, 
  Image} from 'react-native';


export default function App() {
  const [state, setstate] = useState([]);
  return (
    <View style={styles.container}>
        <Text style = {styles.mainFont}>Movies Inc</Text>
        <View style = {styles.searchBar}>
          <TextInput style = {styles.searchBarInput} placeholder='Pick A Movie'></TextInput>  
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#061724',
    justifyContent:'flex-start',
    alignItems:'center',
    },
    mainFont:{
      fontSize:30,
      fontFamily:'lucida grande' || 'sans',
      color:'white',
      marginTop:40,
      padding: 10,
      paddingHorizontal:30,
      fontWeight:'bold',
      borderRadius:100,
    },
    searchBar:{
      backgroundColor:'white',
      width:300,
      borderRadius:30,
    },
    searchBarInput:{
      padding:10,
      paddingLeft:15,
      width:300,
    }
});

let api = {
  key : "9c024169de071d4fbd135671bf5d05cf",
  api : "https://api.themoviedb.org/3/movie/550?api_key=9c024169de071d4fbd135671bf5d05cf",
  apiReadAcces: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzAyNDE2OWRlMDcxZDRmYmQxMzU2NzFiZjVkMDVjZiIsInN1YiI6IjYzZjE5ZDIxYTI0YzUwMDBjMGI5MjMzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qXIyos04jkOWeiyXeAlaLJ9zue1qbBtNFgumgDjItDw"  
}