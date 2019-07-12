import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

const Img = ({image, name}) => (
    <View>
        <Image
            style={styles.image}
            source={{uri: `https://image.tmdb.org/t/p/w500/${image}`}}/>
        <Text style={styles.name}>{name}</Text>
    </View>
)

_keyExtractor = (item, index) => item.id.toString()

const Cast = ({cast}) => (
    <View style={styles.container}>
        <FlatList
            horizontal
            keyExtractor={this._keyExtractor}
            data={cast}
            renderItem={({item}) => <Img image={item.profile_path} name={item.name}/>}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16
    },
    image: {
        width: 60,
        height: 85,
        marginRight: 10,
        backgroundColor: 'grey',
        borderRadius: 5
    },
    name: {
        width: 60,
        fontSize: 10,
        textAlign: 'center'
    }
})

export default Cast