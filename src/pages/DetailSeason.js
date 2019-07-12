import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';
import {Button, Icon} from 'native-base';
import MovieInfo from '../components/MovieInfo';
import Cast from '../components/Cast';
import {key} from '../utils/keys';
import Similars from '../components/Similars';

var width = Dimensions.get('window').width

class DetailSeason extends Component {
    state = {
        movie: [],
        cast: [],
        similar: []
    }

    componentWillMount() {
        const {navigation} = this.props
        let movie = navigation.getParam('movie', [])
        this.setState({movie})
    }

    componentDidMount() {
        let id = this.state.movie.id
        const url = 'https://api.themoviedb.org/3/movie/'

        this._getCast(id, url)
        this._getSimilars(id, url)
    }

    _getCast = (id, url) => {
        console.log(id);
        fetch(`${url}${id}/credits?api_key=${key}`)
            .then(res => res.json())
            .then(data => {
                this.setState({cast: data.cast})
            })
    }

    _getSimilars = (id, url) => {
        fetch(`${url}${id}/similar?api_key=${key}&language=es-ES`)
            .then(res=>res.json())
            .then(data=> {
                this.setState({similar: data.results})
            })
    }

    _changeMovie = (movie) => {
        const url = 'https://api.themoviedb.org/3/movie/'

        this.setState({movie})

        setTimeout(() => {
            this._getCast(this.state.movie.id, url)
            this._getSimilars(this.state.movie.id, url)
        }, 100);
    }

    renderContent = () => (
        <View>
            <MovieInfo movie={this.state.movie}/>
            <Cast cast={this.state.cast}/>
            <Similars 
                title='Similars'
                changeMovie={this._changeMovie}
                movies={this.state.similar}/>
        </View>
    );

    renderNavBar = () => (
        <View style={styles.container}>
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
                <Icon style={styles.icon} name='arrow-back' />
            </Button>
            <Text style={{ textAlign: 'center', color: '#FFF' }}>{this.state.movie.title}</Text>
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
                <Icon style={styles.icon} name='menu' />
            </Button>
        </View>
    );

    render() { 
        const {movie} = this.state
        const image = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
        return (
            <CollapsibleToolbar
                renderContent={this.renderContent}
                renderNavBar={this.renderNavBar}
                imageSource={image}
                collapsedNavBarBackgroundColor='#0277bd'
                toolBarHeight={250}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    },
    header: {
        flex: 3
    },
    image: {
        width: width,
        height: 250,
        position: 'absolute',
        alignSelf: 'stretch',
        zIndex: 2,
    },
    button: {
        position: 'absolute',
        top: 0,
        left: 0
    },
    icon: {
        color: 'white'
    }
})
 
export default DetailSeason;