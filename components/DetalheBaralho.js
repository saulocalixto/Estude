import React from "react";
import { View, Text } from "react-native";
import { Button, Card, CardItem, Icon, Right, Body, Container, Content, SwipeRow } from 'native-base';
import { Feather } from '@expo/vector-icons'
import { NavigationActions } from 'react-navigation'
import { submitBaralho, removeBaralho } from '../utils/api.js'
import { removePergunta } from '../actions'
import { connect } from 'react-redux'

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
                    <View>
                      <Text style={{ color: '#FE6D38' }}>{x.pergunta}</Text>
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
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Cadastre perguntas!</Text>
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
                { perguntas: baralho.perguntas }
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

function mapStateToProps(store) {
  const baralhos = store["baralhos"]
  const baralho = store["baralho"]
  return {
    baralhos: baralhos,
    baralho
  }
}

export default connect(mapStateToProps)(DetalheBaralho)
