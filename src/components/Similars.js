import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';

const CardImage = ({movie, changeMovie}) => {
    function _changeMovie() {
        changeMovie(movie)
    }
    return (
        <TouchableWithoutFeedback onPress={_changeMovie}>
            <View style={styles.containerImg}>
                <Image
                    style={styles.image}
                    source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}/>
                <Text style={styles.titleImg}>{movie.title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}


const Similars = ({title, movies, changeMovie}) => (
    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.movies}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={movies}
                keyExtractor={this._keyExtractor}
                renderItem={({item}) => <CardImage changeMovie={changeMovie} movie={item}/>}/>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    title: {
        height: 40,
        backgroundColor: '#004c8c',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 7
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 16
    },
    movies: {
        paddingHorizontal: 16,
    },
    containerImg: {
        width: 100,
        marginRight: 10,
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    titleImg: {
        fontSize: 10,
        textAlign: 'center'
    }
})

export default Similars