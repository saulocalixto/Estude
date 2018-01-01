import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux'
import { Button } from 'native-base';
import { NavigationActions } from 'react-navigation'
import { orange } from '../../utils/colors';

class FlashCard extends Component {

  state = {
    indice: 0,
    mostrarResposta: false,
    pontuacao: 0,
    desabilitarBotao: true,
  }

  chavePerguntas = [
    'resposta',
    'opcao2',
    'opcao3',
    'opcao4'
  ]

  render() {
    const { perguntas, tituloBaralho } = this.props.navigation.state.params;
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
                  <Button iconRight style={{ paddingLeft: 10, paddingRight: 10 }}
                    onPress={() => this.setState({
                      indice: indice + 1,
                      pontuacao: pontuacao + 1,
                      mostrarResposta: false
                    })}
                    transparent light>
                    <Text style={{ fontSize: 20, color: '#dbd7b7' }}>Acertei!</Text>
                  </Button>
                  <Button iconLeft onPress={() => this.setState({
                    indice: indice + 1,
                    mostrarResposta: false
                  })} style={{ paddingLeft: 10, paddingRight: 10 }}
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
            <View style={styles.cardStyle}>
              <Text style={styles.BtnText}>
                {`Você acertou ${pontuacao} de um total de ${perguntas.length} pergunta(s)`}
              </Text>
              <View style={styles.containerBtn}>
                <Button 
                  iconRight 
                  style={styles.styleBtn}
                  onPress={() => this.props.navigation.dispatch(NavigationActions.reset({
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
                  onPress={() => this.setState({ indice: 0, pontuacao: 0 })} 
                  style={styles.styleBtn}>
                  <Text style={{ color: 'white' }}>Reiniciar Quiz</Text>
                </Button>
              </View>
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

export default connect()(FlashCard)