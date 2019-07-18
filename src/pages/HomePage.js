import React, { Component } from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import AppBar from '../components/AppBar';
import SwipeCard from '../components/SwipeCard';
import GetSection from '../components/GetSection';

import {getMovies} from '../utils/keys';
import GetSeason from '../components/GetSeason';

class HomePage extends Component {
    state = {
        movies: [
            'hello',
            'world'
        ]
    }

    componentDidMount() {
        getMovies('now_playing', 'es-ES',)
            .then(data => {
                this.setState({movies: data.results})
            })
    }

    render() {
        const {navigation} = this.props
        return (
            <View style={styles.container}>
                <AppBar title='Películas'/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.swipecard}>
                        <SwipeCard 
                            movies={this.state.movies}
                            navigation={navigation}/>
                    </View>
                    <GetSection 
                        navigation={navigation}
                        title='Películas populares'
                        section='popular'/>
                    <GetSection 
                        navigation={navigation}
                        title='Películas mejor valoradas'
                        section='top_rated'/>
                    <GetSection 
                        navigation={navigation}
                        title='Proximamente'
                        section='upcoming'/>
                    <GetSeason 
                        navigation={navigation}
                        title='Series en emisión'
                        section='on_the_air'/>
                    <GetSeason 
                        navigation={navigation}
                        title='Series populares'
                        section='popular'/>
                    <GetSeason 
                        navigation={navigation}
                        title='Series mejor valoradas'
                        section='top_rated'/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 46
    },
    swipecard: {
        alignItems: 'center',
    }
})
 
export default HomePage;