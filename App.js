//import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Axios } from 'axios';
import HomeScreen from './src/screens/HomeScreen';
import { 
  Button, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  FlatList, 
  Image} from 'react-native';

  let movieApi = {
    key : "9c024169de071d4fbd135671bf5d05cf",
    api : "https://api.themoviedb.org/3/movie/550?api_key=9c024169de071d4fbd135671bf5d05cf",
    apiReadAcces: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzAyNDE2OWRlMDcxZDRmYmQxMzU2NzFiZjVkMDVjZiIsInN1YiI6IjYzZjE5ZDIxYTI0YzUwMDBjMGI5MjMzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qXIyos04jkOWeiyXeAlaLJ9zue1qbBtNFgumgDjItDw"  
  }
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

