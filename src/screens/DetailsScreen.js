import React from 'react';
import {View, StyleSheet,Text, FlatList} from 'react-native';
/*
FF-2
-La Pagina de detalles de la pelicula debe incluir el titulo de la pelicula.
el año de estreno, una descripcion general de la pelicula,
el genero, la calificacion y el cartel de la pelicula

-La pagina de detalles de la pelicula debe mostrar la lista de los
actores y sus personajes en la pelicula
*/
const DetailsScreen = ({movie}) => {
    const{title,overview,release_date,original_title,original_language,adult,vote_average,vote_count,poster_path} = movie;
    return (
        <View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default DetailsScreen;
