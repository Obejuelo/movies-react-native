import React, { Component } from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CardImage from './CardMovie';

import {getMovies} from '../utils/keys';

class GetSection extends Component {
    state = {
        movies: []
    }

    componentWillMount() {
        const {section} = this.props
        getMovies(section, 'es-ES')
            .then(data => {
                this.setState({movies: data.results})
            })
    }

    _keyExtractor = (item, index) => item.id.toString()

    render() { 
        const {navigation, title} = this.props
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}>{title}</Text>
                </View>
                <View style={styles.movies}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={this.state.movies}
                        keyExtractor={this._keyExtractor}
                        renderItem={({item}) => <CardImage navigation={navigation} movie={item}/>}/>
                </View>
            </View>
        );
    }
}

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
    }
})
 
export default GetSection;