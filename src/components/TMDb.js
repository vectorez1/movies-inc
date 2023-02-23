import React from 'react';
import {View, StyleSheet} from 'react-native';
import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3/movie'; // TMDb API base URL
const apiKey = '9c024169de071d4fbd135671bf5d05cf'; // replace with your TMDb API key

export const updateVoteAverage = (movieId, newVoteAverage) => {
  // configure the axios request
  const requestOptions = {
    headers: { Authorization: `Bearer ${apiKey}` },
    params: { api_key: apiKey },
    data: { vote_average: newVoteAverage },
  };

  // make the axios request to update the vote average
  return axios.put(`${apiUrl}/${movieId}`, requestOptions)
    .then(response => response.data)
    .catch(error => console.error(error));
};

/* const TMDb = () => {
    return (
        <View>
            
        </View>
    );
} 

const styles = StyleSheet.create({})
*/

//export default TMDb;
