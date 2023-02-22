import React from 'react';
import {View, StyleSheet,Text, FlatList} from 'react-native';

const DetailsScreen = ({movie}) => {
    const{title,overview,release_date,original_title,original_language,adult,vote_average,vote_count,poster_path} = movie;
    return (
        <View>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default DetailsScreen;
