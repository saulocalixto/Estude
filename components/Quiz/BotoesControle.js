import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import { styleButton } from '../../theme'

const BotoesControle = (props) => {
  const { responder, desabilitarBotao, verResposta, EhUltimaPergunta } = props
  return (
    <View style={styleButton.containerBtn}>
      <TouchableOpacity iconRight
        style={styleButton.styleBtnAtive}
        onPress={verResposta}>
        <Text style={styleButton.btnTextAtive}>Resposta Correta</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled={desabilitarBotao}
        iconLeft
        onPress={responder}
        style={ !desabilitarBotao ? styleButton.styleBtnAtive : styleButton.styleBtnInative }>
        <Text
          style={ !desabilitarBotao ? styleButton.btnTextAtive : styleButton.btnTextInative }>
          { EhUltimaPergunta
            ? 'Resultado'
            : 'Próxima Pergunta'
          }
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BotoesControle