import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Card, CardItem, Icon, Right, Body, Container, Content, SwipeRow } from 'native-base';
import { Feather } from '@expo/vector-icons'
import { NavigationActions } from 'react-navigation'
import { submitBaralho, removeBaralho } from '../utils/api.js'
import { removePergunta } from '../actions'
import { connect } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons'

class DetalheBaralho extends React.Component {

  deletePergunta = (pergunta) => {
    const { baralho } = this.props;
    const key = baralho.key

    this.props.dispatch(removePergunta(pergunta, baralho))

    submitBaralho({ baralho })
  }

  render() {
    const { baralho } = this.props;
    const temPerguntas = baralho.perguntas.length > 0;
    return (
      <Container style={{ padding: 10, backgroundColor: 'white' }}>
        <Content>
          <Text style={{ fontSize: 30, color: '#D08401' }}>{baralho.titulo}</Text>

          <Text style={{ color: '#FEB638', marginBottom: 10 }}>{baralho.descricao}</Text>
          {
            baralho.perguntas.length !== 0 ? (
              baralho.perguntas.map(x => (
                <SwipeRow
                  leftOpenValue={0}
                  rightOpenValue={-75}
                  body={
                    <View style={styles.posicaoItemsLinha}>
                      <Text style={{ color: '#FE6D38' }}>{x.pergunta}</Text>
                      <MaterialIcons name='keyboard-arrow-left' size={25} style={{ color: '#FE6D38' }} />
                    </View>
                  }
                  right={
                    <Button danger onPress={() => this.deletePergunta(x)}>
                      <Icon active name="trash" />
                    </Button>
                  }
                  key={x.pergunta}
                  disableRightSwipe={true}
                />
              ))
            ) : (
                <Card>
                  <CardItem header>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: '#FE6D38' }}>Cadastre perguntas!</Text>
                  </CardItem>
                </Card>
              )
          }
          <View style={{ flexDirection: "row", flex: 1, position: "relative", top: 25, marginBottom: 20, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          <Feather onPress={() => this.props.navigation.navigate(
              'NovaPergunta',
              { baralho: baralho, tituloBaralho: baralho.titulo }
            )} name={'plus-circle'} size={40} style={{color: 'orange'}} />
            <Button
              iconLeft
              onPress={() => 
                this.props.navigation.navigate(
                'ModalidadeQuiz',
              )}
              style={{ paddingLeft: 10, paddingRight: 10, backgroundColor: temPerguntas ? 'orange' : 'gray' }}
              disabled={!temPerguntas}>
              <Text style={{ color: 'white' }}>Iniciar Quiz</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  posicaoItemsLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between'
  },
})

function mapStateToProps(store) {
  const baralho = store["baralho"]
  const baralhos = store["baralhos"]
  return {
    baralho,
    baralhos
  }
}

export default connect(mapStateToProps)(DetalheBaralho)
