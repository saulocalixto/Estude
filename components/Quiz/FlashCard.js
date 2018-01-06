import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button } from 'native-base';
import { NavigationActions } from 'react-navigation'
import { clearLocalNotification, setLocalNotification } from '../../utils/helpers'
import ResultadoQuiz from './ResultadoQuiz.js'
import { connect } from 'react-redux'

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
          <TouchableOpacity onPress={() => this.setState({ mostrarResposta: !mostrarResposta })}>
            <View style={styles.cardStyle}>
              <Text style={styles.BtnText}>
                {mostrarResposta ? pergunta.resposta : pergunta.pergunta}
              </Text>
              {mostrarResposta ? (
                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-end', padding: 15 }}>
                  <Button
                    iconRight
                    style={{ paddingLeft: 10, paddingRight: 10 }}
                    onPress={() => this.setState({
                      indice: indice + 1,
                      pontuacao: pontuacao + 1,
                      mostrarResposta: false
                    })}
                    transparent light>
                    <Text style={{ fontSize: 20, color: '#dbd7b7' }}>Acertei!</Text>
                  </Button>
                  <Button iconLeft
                    onPress={() => this.setState({
                      indice: indice + 1,
                      mostrarResposta: false
                    })}
                    style={{ paddingLeft: 10, paddingRight: 10 }}
                    transparent light>
                    <Text style={{ fontSize: 20, color: '#dbd7b7' }}>Errei!</Text>
                  </Button>
                </View>
              ) : (
                  <View>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                      Pressione a carta para ver a resposta!
                    </Text>
                    <Text style={{ color: 'white', textAlign: 'center' }}>
                      {`Pergunta ${indice + 1} de ${qtdPerguntas}`}
                    </Text>
                  </View>
                )}
            </View>
          </TouchableOpacity>
        ) : (
            <View style={[styles.cardStyle, {height: '50%'}]}>
              <ResultadoQuiz
                pontuacao={pontuacao}
                indice={indice}
                resetaQuiz={() => this.setState({ indice: 0, pontuacao: 0 })}
                navigation={this.props.navigation}
                BtnText={styles.BtnText} />
            </View>
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
  cardStyle: {
    backgroundColor: '#FE6D38',
    padding: 10,
    borderRadius: 5,
    height: '70%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerBtn: {
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 15
  },
  styleBtn: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'orange'
  },
  BtnText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
})

function mapStateToProps(store) {
  const perguntas = store["baralho"].perguntas
  return {
    perguntas
  }
}

export default connect(mapStateToProps)(FlashCard)