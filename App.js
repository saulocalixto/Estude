import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListaBaralho from './components/ListaBaralho.js'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <ListaBaralho />
      </View>
    );
  }
}