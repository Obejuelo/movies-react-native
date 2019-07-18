import React from 'react';
import {View, Text, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const CardSeason = ({movie, navigation}) => (
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Season', {movie})}>
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}/>
            <Text style={styles.title}>{movie.name}</Text>
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    container: {
        width: 100,
        marginRight: 10,
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    title: {
        fontSize: 10,
        textAlign: 'center'
    }
})

export default CardSeason