import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import {white, purple} from '../utils/colors.js'

export default class ListaBaralho extends React.Component {
  render() {
    return (
      <View>
        <View>
            <Text>Título Baralho</Text>
            <Text>100</Text>
          </View>
          <TouchableOpacity style={Platform.OS === 'ios' ? 
            styles.iosSubmitButton : 
            styles.androidSubmitButton}>
            <Text style={{color: white}}>Novo Baralho</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  row: {
    flexDirection : 'column',
    flex: 1,
    alignItems: 'center'
  },
  iosSubmitButton: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  androidSubmitButton: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    height: 45,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitBtnText:{
    color: white,
    fontSize: 22,
    textAlign: 'center'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  }
})
