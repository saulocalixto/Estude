import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardItem, Thumbnail, Left, Body } from 'native-base';
import { styleBaralhos } from '../../theme'


const CabecalhoQuiz = (props) => {
  const { imagem, titulo, indice, qtdPerguntas, tituloBaralho } = props
  return (
    <CardItem>
      <Left>
        <Thumbnail source={imagem} />
        <Body>
          <Text 
            style={ [styleBaralhos.titulo, {fontSize: 20}] }>
              {titulo}
          </Text>
          {indice !== qtdPerguntas ? (
            <Text style={ styleBaralhos.subTitulo }>
              {`Pergunta ${indice + 1} de ${qtdPerguntas}`}
            </Text>
          ) : (<Text></Text>)}
        </Body>
      </Left>
    </CardItem>
  );
}

export default CabecalhoQuiz