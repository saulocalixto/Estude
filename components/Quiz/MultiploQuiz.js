import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
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

class MultiploQuiz extends Component {

  state = {
    indice: 0,
    pontuacao: 0,
    desabilitarBotao: true,
    perguntasSelecionadas: {
      'resposta': {
        value: 'resposta',
        selecionado: false,
        textColor: '#FE6D38'
      },
      'opcao2': {
        value: 'opcao2',
        selecionado: false,
        textColor: '#FE6D38'
      },
      'opcao3': {
        value: 'opcao3',
        selecionado: false,
        textColor: '#FE6D38'
      },
      'opcao4': {
        value: 'opcao4',
        selecionado: false,
        textColor: '#FE6D38'
      }
    }
  }

  chavePerguntas = [
    'resposta',
    'opcao2',
    'opcao3',
    'opcao4'
  ]

  componentWillMount() {
    this.chavePerguntas = this.shuffle(this.chavePerguntas)
  }

  responder = () => {

    const { perguntas, tituloBaralho } = this.props.navigation.state.params;
    const { indice, perguntasSelecionadas, pontuacao } = this.state;

    const novoEstado = perguntasSelecionadas;

    this.setState({ indice: indice + 1 })

    if (indice < perguntas.length) {
      this.chavePerguntas = this.shuffle(this.chavePerguntas)
    }

    this.chavePerguntas.map(x => {
      if (novoEstado[x].selecionado && novoEstado[x].value === 'resposta') {
        this.setState({ pontuacao: pontuacao + 1 })
      }

      novoEstado[x].selecionado = false
      novoEstado[x].textColor = '#FE6D38'

    })
    this.setState({ perguntasSelecionadas: novoEstado, desabilitarBotao: true })
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

  shuffle = (array) => {
    let counter = array.length;

    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;

      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

  render() {
    const { perguntas, tituloBaralho } = this.props.navigation.state.params;
    const { indice, perguntasSelecionadas, desabilitarBotao, pontuacao } = this.state;
    const qtdPerguntas = perguntas.length;
    const pergunta = perguntas[indice < qtdPerguntas ? indice : qtdPerguntas - 1];
    questionImg = require('../../imagens/questao.jpg');
    exclamationImg = require('../../imagens/exclamacao.jpg');
    return (
      <Container>
        <Content>
          <Card style={{ elevation: 3 }}>
            <CabecalhoQuiz
              imagem={indice !== qtdPerguntas ? questionImg : exclamationImg}
              titulo={indice !== qtdPerguntas ? pergunta.pergunta : 'Resultado'}
              indice={indice}
              qtdPerguntas={qtdPerguntas}
              tituloBaralho={tituloBaralho} />
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
                        { indice === perguntas.length - 1
                          ? 'Resultado'
                          : 'Próxima Pergunta'
                        }
                      </Text>
                    </Button>
                  </View>
                </View>
              ) : (
                <View>
                  <CardItem>
                    <Body>
                      <Text>{`Você acertou ${pontuacao} de um total de ${indice} pergunta(s)`}</Text>
                    </Body>
                  </CardItem>
                  <View 
                    style={ styles.containerBtn }>
                    <Button 
                      iconRight 
                      style={ styles.btnStyle } 
                      onPress={() => this.props.navigation.dispatch(NavigationActions.reset({
                        index: 1,
                        actions: [
                          NavigationActions.navigate({ routeName: 'Home'}),
                          NavigationActions.navigate({ routeName: 'DetalheBaralho'}),
                        ]
                      }))}>
                      <Text style={{ color: 'white' }}>Voltar ao baralho</Text>
                    </Button>
                    <Button 
                      iconLeft 
                      onPress={() => this.setState({ indice: 0, pontuacao: 0 })} 
                      style={styles.btnStyle}>
                      <Text style={{ color: 'white' }}>Reiniciar Quiz</Text>
                    </Button>
                  </View>
                </View>
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
    backgroundColor: 'orange' 
  }
})

export default connect()(MultiploQuiz)