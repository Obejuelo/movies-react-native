import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon} from 'native-base';

const SeasonInfo = ({movie}) => {
    const title = movie.name
    const subtitle = movie.original_name
    const titleSub = movie.name.substr(0, 27)
    const subtitleSub = movie.original_name.substr(0, 34)
    return(
        <View style={styles.container}>
            <View style={styles.containerMovie}>
                <Image
                    style={styles.image}
                    source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}/>
                <View>
                    <Text style={styles.title}>
                        {title.length > 27 ? `${titleSub}...` : title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {subtitle.length > 34 ? `${subtitleSub}...` : subtitle}
                    </Text>
                    <Text style={styles.subtitle}>
                        {movie.vote_average}
                        <Icon style={styles.icon} name='star' />
                    </Text>
                </View>
            </View>
            <Text style={styles.text}>{movie.overview}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    containerMovie: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 7
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 7
    },
    text: {
        textAlign: 'justify',
        paddingTop: 10
    },
    icon: {
        fontSize: 17,
        color: 'red',
    }
})

export default SeasonInfo