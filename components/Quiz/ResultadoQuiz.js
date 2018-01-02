import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Button } from 'native-base';
import { connect } from 'react-redux'

export const ResultadoQuiz = (props) => {
  const { pontuacao, indice, resetaQuiz, navigation, BtnText } = props;
  return (
    <View style={styles.container}>
      <Text style={BtnText ? BtnText : {}}>{`Você acertou ${pontuacao} de um total de ${indice} pergunta(s)`}</Text>
      <View
        style={styles.containerBtn}>
        <Button
          iconRight
          style={styles.btnStyle}
          onPress={() => navigation.dispatch(NavigationActions.reset({
            index: 1,
            actions: [
              NavigationActions.navigate({ routeName: 'Home' }),
              NavigationActions.navigate({ routeName: 'DetalheBaralho' }),
            ]
          }))}>
          <Text style={{ color: 'white' }}>Voltar ao baralho</Text>
        </Button>
        <Button
          iconLeft
          onPress={ resetaQuiz }
          style={styles.btnStyle}>
          <Text style={{ color: 'white' }}>Reiniciar Quiz</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  containerBtn: {
    flexDirection: "row",
    flex: 1,
    position: "relative",
    top: 25,
    marginBottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
    padding: 15
  },
  btnStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'orange',
  }
})

export default connect()(ResultadoQuiz)