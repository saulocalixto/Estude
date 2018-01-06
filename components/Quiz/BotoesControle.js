import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';

const BotoesControle = (props) => {
  const { responder, desabilitarBotao, verResposta, perguntasSelecionadas, indice, perguntas } = props
  return (
    <View style={styles.containerBtn}>
      <Button iconRight
        style={styles.btnStyle}
        onPress={verResposta}>
        <Text style={{ color: 'white' }}>Resposta Correta</Text>
      </Button>
      <Button disabled={desabilitarBotao}
        iconLeft
        onPress={responder}
        style={[styles.btnStyle, { backgroundColor: !desabilitarBotao ? 'orange' : 'gray' }]}>
        <Text
          style={{ paddingLeft: 10, paddingRight: 10, color: 'white' }}>
          {indice === perguntas.length - 1
            ? 'Resultado'
            : 'Próxima Pergunta'
          }
        </Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default BotoesControle