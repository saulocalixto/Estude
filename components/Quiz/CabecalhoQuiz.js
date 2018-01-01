import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux'
import { Container, Header, CardItem, Thumbnail, Left, Body } from 'native-base';


export default class CabecalhoQuiz extends Component {
  render() {
    const { imagem, titulo, indice, qtdPerguntas, tituloBaralho } = this.props
    return (
      <CardItem>
        <Left>
          <Thumbnail source={imagem} />
          <Body>
            <Text style={{ fontSize: 20 }}>{titulo}</Text>
            <Text>{tituloBaralho}</Text>
            {indice !== qtdPerguntas ? (
              <Text>{`Pergunta ${indice + 1} de ${qtdPerguntas}`}</Text>
            ) : (<Text></Text>)}
          </Body>
        </Left>
      </CardItem>
    );
  }
}