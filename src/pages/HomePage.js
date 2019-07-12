import React, { Component } from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import AppBar from '../components/AppBar';
import SwipeCard from '../components/SwipeCard';
import GetSection from '../components/GetSection';

import {getMovies} from '../utils/keys';

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
        return (
            <View style={styles.container}>
                <AppBar title='Movies'/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.swipecard}>
                        <SwipeCard 
                            movies={this.state.movies}
                            navigation={this.props.navigation}/>
                    </View>
                    <GetSection 
                        navigation={this.props.navigation}
                        title='Populars'
                        option='movie'
                        section='popular'/>
                    <GetSection 
                        navigation={this.props.navigation}
                        title='Top Rated'
                        option='movie'
                        section='top_rated'/>
                    <GetSection 
                        navigation={this.props.navigation}
                        title='Upcoming'
                        option='movie'
                        section='upcoming'/>
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