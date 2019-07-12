import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, TouchableWithoutFeedback, Image, StyleSheet, Dimensions} from 'react-native';

var width = Dimensions.get('window').width;

export default class SwipeCard extends Component {
    state = {
        entries: []
    }

    _navigate = (movie) => {
        const {navigation} = this.props
        navigation.navigate('Detail', {
            movie: movie 
        })
    }
    
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={()=>this._navigate(item)}>
                    <Image
                        style={styles.image}
                        source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}/>
                </TouchableWithoutFeedback>
            </View>
        );
    }
  
    render () {
        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.props.movies}
                renderItem={this._renderItem}
                itemWidth={250}
                sliderWidth={width}
                // layout={'stack'}
                />
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20,
    },
    image: {
        width: 250,
        height: 360,
        borderRadius: 20
    }
})