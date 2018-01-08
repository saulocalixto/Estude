import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { styleButton, styleCard } from '../../themes'

export const ResultadoQuiz = (props) => {
  const { pontuacao, indice, resetaQuiz, navigation, BtnText } = props;
  return (
    <View>
    <View style={styleCard.cardStyle} >
      <Text style={BtnText ? BtnText : {}}>{`Você acertou ${pontuacao} de um total de ${indice} pergunta(s)`}</Text>
    </View>
      <View
        style={styleButton.containerBtn}>
        <TouchableOpacity
          style={styleButton.styleBtnAtive}
          onPress={() => navigation.dispatch(NavigationActions.reset({
            index: 1,
            actions: [
              NavigationActions.navigate({ routeName: 'Home' }),
              NavigationActions.navigate({ routeName: 'DetalheBaralho' }),
            ]
          }))}>
          <Text style={styleButton.btnTextAtive}>Voltar ao baralho</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ resetaQuiz }
          style={ styleButton.styleBtnAtive }>
          <Text style={ styleButton.btnTextAtive }>Reiniciar Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
})

export default connect()(ResultadoQuiz)