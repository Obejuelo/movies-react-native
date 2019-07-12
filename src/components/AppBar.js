import React, { Component } from 'react';
import {Header, Body, Right, Button, Icon, Title } from 'native-base';
import {StatusBar, StyleSheet} from 'react-native';

export default class AppBar extends Component {
  render() {
    return (
        <Header style={styles.appbar}>
            <StatusBar backgroundColor="#004c8c" barStyle="light-content" />
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '#0277bd',
  }
})