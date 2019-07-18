import React, { Component } from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {Spinner} from 'native-base';
import CardSeason from './CardSeason';

import {getSerie} from '../utils/keys';

class GetSeason extends Component {
    state = {
        movies: []
    }

    componentWillMount() {
        const {section} = this.props
        getSerie(section, 'es-ES')
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
                {this.state.movies.length === 0 
                    ? <Spinner color='#004c8c'/>
                    : <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={this.state.movies}
                        keyExtractor={this._keyExtractor}
                        renderItem={({item}) => <CardSeason navigation={navigation} movie={item}/>}/>}
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
        fontSize: 18,
        color: 'white',
        paddingLeft: 16
    },
    movies: {
        paddingHorizontal: 16,
    }
})
 
export default GetSeason;