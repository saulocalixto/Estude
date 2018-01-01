import React, { Component } from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  ListItem,
  Radio,
  Right,
  Left,
  Body,
  Icon,
  Button
} from 'native-base';
import { NavigationActions } from 'react-navigation'

export default class ModalidadeQuiz extends Component {
  render() {
    const { perguntas } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
          'FlashCard',
          { perguntas }
        )} >
          <View style={styles.cardStyle}>
            <Text style={styles.BtnText}>
              FlashCard
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate(
          'MultiploQuiz',
          { perguntas }
        )}>
          <View style={styles.cardStyle}>
            <Text style={styles.BtnText}>
              Múltipla Escolha
          </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  cardStyle: {
    backgroundColor: '#FE6D38',
    padding: 10,
    borderRadius: 5,
    height: 100,
    width: '100%',
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  BtnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
})
