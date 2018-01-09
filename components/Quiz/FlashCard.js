import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button } from 'native-base';
import { NavigationActions } from 'react-navigation'
import { clearLocalNotification, setLocalNotification } from '../../utils/helpers'
import ResultadoQuiz from './ResultadoQuiz.js'
import { connect } from 'react-redux'
import BotoesAcertoErro from './BotoesAcertoErro.js'
import { styleCard } from '../../theme'

class FlashCard extends Component {

  state = {
    indice: 0,
    mostrarResposta: false,
    pontuacao: 0,
    desabilitarBotao: true,
  }

  componentDidUpdate() {
    const { perguntas } = this.props;
    if (this.state.indice === perguntas.length) {
      clearLocalNotification()
        .then(setLocalNotification)
    }
  }

  render() {
    const { perguntas } = this.props;
    const { indice, perguntasSelecionadas, desabilitarBotao, pontuacao, mostrarResposta } = this.state;
    const qtdPerguntas = perguntas.length;
    const pergunta = perguntas[indice < qtdPerguntas ? indice : qtdPerguntas - 1];
    questionImg = require('../../imagens/questao.jpg');
    exclamationImg = require('../../imagens/exclamacao.jpg');
    return (
      <View style={styles.container}>
        {indice !== qtdPerguntas ? (
          <View>
          <TouchableOpacity onPress={() => this.setState({ mostrarResposta: !mostrarResposta })}>
            <View style={ styleCard.cardStyle }>
              <Text style={ styleCard.cardText }>
                {mostrarResposta ? pergunta.resposta : pergunta.pergunta}
              </Text>
            </View>
          </TouchableOpacity>
          {mostrarResposta ? (
                <BotoesAcertoErro
                  marcarAcerto={() => {
                    this.setState({
                      indice: indice + 1,
                      pontuacao: pontuacao + 1,
                      mostrarResposta: false
                    })
                  }}
                  marcarErro={() => {
                    this.setState({
                      indice: indice + 1,
                      mostrarResposta: false
                    })
                  }} />
              ) : (
                  <View>
                    <Text style={{ color: '#ff6600', textAlign: 'center' }}>
                      Pressione a carta para ver a resposta!
                    </Text>
                    <Text style={{ color: '#ff6600', textAlign: 'center' }}>
                      {`Pergunta ${indice + 1} de ${qtdPerguntas}`}
                    </Text>
                  </View>
                )}
          </View>
        ) : (
              <ResultadoQuiz
                pontuacao={pontuacao}
                indice={indice}
                resetaQuiz={() => this.setState({ indice: 0, pontuacao: 0 })}
                navigation={this.props.navigation}
                BtnText={ styleCard.cardText } />
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center'
  },
})

function mapStateToProps(store) {
  const perguntas = store["baralho"].perguntas
  return {
    perguntas
  }
}

export default connect(mapStateToProps)(FlashCard)