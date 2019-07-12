import React, { Component } from 'react';
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';
import {StatusBar, StyleSheet} from 'react-native';

class AppBarBack extends Component {
  render() {
    const {navigation} = this.props
    return (
        <Header style={styles.header} transparent>
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent/>
          <Left>
            <Button transparent onPress={()=>navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
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
  header: {
    backgroundColor: '#0277bd',
    zIndex: 3
  }
})

export default AppBarBack