import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { Shuffle, EstadoPergunta } from '../../utils/helpers'
import CabecalhoQuiz from './CabecalhoQuiz.js'
import {
  Container,
  View,
  Content,
  Card,
  CardItem,
  Radio,
  Right,
  Body,
  Button
} from 'native-base';
import { NavigationActions } from 'react-navigation'
import { clearLocalNotification, setLocalNotification } from '../../utils/helpers'
import ResultadoQuiz from './ResultadoQuiz.js'

class MultiploQuiz extends Component {

  state = {
    indice: 0,
    pontuacao: 0,
    desabilitarBotao: true,
    perguntasSelecionadas: EstadoPergunta
  }

  chavePerguntas = [
    'resposta',
    'opcao2',
    'opcao3',
    'opcao4'
  ]

  componentWillMount() {
    this.chavePerguntas = Shuffle(this.chavePerguntas)
  }

  componentDidUpdate() {
    const { perguntas } = this.props.navigation.state.params;
    if (this.state.indice === perguntas.length) {
      clearLocalNotification()
        .then(setLocalNotification)
    }
  }

  responder = () => {

    const { perguntas } = this.props.navigation.state.params;
    const { indice, perguntasSelecionadas } = this.state;
    const qtdPerguntas = perguntas.length;

    this.setState({ indice: indice + 1 })

    if (indice < perguntas.length) {
      this.chavePerguntas = Shuffle(this.chavePerguntas)
    }

    const novoEstado = this._mudaStatus(this.chavePerguntas, perguntasSelecionadas);

    this.setState({ perguntasSelecionadas: novoEstado, desabilitarBotao: true })
  }

  _mudaStatus(chave, perguntasSelecionadas) {
    const estado = perguntasSelecionadas;
    const { pontuacao } = this.state;
    chave.map(x => {
      if (estado[x].selecionado && estado[x].value === 'resposta') {
        this.setState({ pontuacao: pontuacao + 1 })
      }
      estado[x].selecionado = false
      estado[x].textColor = '#FE6D38'
    })
    return estado;
  }

  Marcar = (chave) => {
    const { perguntasSelecionadas } = this.state;
    const novoEstado = perguntasSelecionadas;
    if (!perguntasSelecionadas[chave].selecionado) {
      novoEstado[chave].selecionado = !perguntasSelecionadas[chave].selecionado
      this.chavePerguntas.map(x => {
        if (x !== chave) {
          novoEstado[x].selecionado = false
        }
      })
      this.setState({ perguntasSelecionadas: novoEstado, desabilitarBotao: false })
    }
  }

  render() {
    const { perguntas } = this.props.navigation.state.params;
    const { indice, perguntasSelecionadas, desabilitarBotao, pontuacao } = this.state;
    const qtdPerguntas = perguntas.length;
    const pergunta = perguntas[indice < qtdPerguntas ? indice : qtdPerguntas - 1];
    questionImg = require('../../imagens/questao.jpg');
    exclamationImg = require('../../imagens/exclamacao.jpg');
    return (
      <Container style={{ backgroundColor: 'white' }}>
        <Content>
          <Card style={{ elevation: 3 }}>
            <CabecalhoQuiz
              imagem={indice !== qtdPerguntas ? questionImg : exclamationImg}
              titulo={indice !== qtdPerguntas ? pergunta.pergunta : 'Resultado'}
              indice={indice}
              qtdPerguntas={qtdPerguntas} />
            {indice !== qtdPerguntas ?
              (
                <View>
                  {
                    this.chavePerguntas.map(x => (
                      <TouchableOpacity
                        onPress={() => this.Marcar(x)} key={x}
                        style={styles.questionario}>
                        <Text style={{ color: perguntasSelecionadas[x].textColor, maxWidth: 300 }}>
                          {pergunta[x]}
                        </Text>
                        <Right>
                          <Radio selected={perguntasSelecionadas[x].selecionado} />
                        </Right>
                      </TouchableOpacity>
                    ))}
                  <View style={styles.containerBtn}>
                    <Button iconRight
                      style={styles.btnStyle}
                      onPress={() => {
                        perguntasSelecionadas['resposta'].textColor = 'green';
                        this.setState({ perguntasSelecionadas })
                      }}>
                      <Text style={{ color: 'white' }}>Resposta Correta</Text>
                    </Button>
                    <Button disabled={desabilitarBotao}
                      iconLeft
                      onPress={() => this.responder()}
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
                </View>
              ) : (
                <ResultadoQuiz
                  pontuacao={pontuacao}
                  indice={indice} 
                  resetaQuiz={ () => this.setState({ indice: 0, pontuacao: 0 }) }
                  navigation={ this.props.navigation }/>
              )
            }
          </Card>
        </Content>
      </Container>
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
  questionario: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
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

export default connect()(MultiploQuiz)