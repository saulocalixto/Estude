import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Button, Card, CardItem, Icon, Container, Content, SwipeRow } from 'native-base';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { fetchPegarBaralhos, fetchRemoveBaralho, pegaDetalhes } from '../actions'
import { MaterialIcons } from '@expo/vector-icons'

import {
  fetchPosts,
} from '../actions'

class ListaBaralho extends React.Component {

  deleteBaralho = (baralho) => {
    this.props.removeBaralho(baralho);
  }

  setaBaralho = (chave) => {

    this.props.navigation.navigate(
      'DetalheBaralho'
    )

    this.props.detalhesBaralho(chave)
  }

  componentDidMount = () => {
    this.props.pegarBaralhos();
  }
  
  render() {
    const { baralhos } = this.props;
    const listaChaves = Object.keys(baralhos);
    return (
      <Container style={styles.container}>
        <Content>
          {listaChaves.length !== 0 ? (
            listaChaves.map(chave => (
              <SwipeRow
                leftOpenValue={0}
                rightOpenValue={-75}
                key={chave}
                body={
                  <TouchableOpacity onPress={() => this.setaBaralho(chave)}
                    style={styles.containerLinha}>
                    <View style={styles.posicaoItemsLinha}>
                      <View>
                        <Text style={{ fontSize: 20, color: '#FFF', padding: 10 }}>{baralhos[chave].titulo}</Text>
                        <Text style={{ color: '#FFF', paddingLeft: 10 }}>{baralhos[chave].perguntas.length} carta(s)</Text>
                      </View>
                      <MaterialIcons name='keyboard-arrow-left' size={25} style={{ color: '#CD5A17' }} />
                    </View>
                  </TouchableOpacity>
                }
                right={
                  <Button danger onPress={() => this.deleteBaralho(baralhos[chave])}>
                    <Icon active name="trash" />
                  </Button>
                }
                disableRightSwipe={true}
              />
            ))
          )
            :
            (
              <Card>
                <CardItem header>
                  <Text style={styles.center}>Sem baralhos cadastrados!</Text>
                </CardItem>
              </Card>
            )
          }
          <View
            style={styles.containerBtn}>
            <Button
              iconLeft
              onPress={() => this.props.navigation.navigate(
                'NovoBaralho'
              )}
              style={styles.btnStyle}>
              <Text style={{ color: 'white' }}>Novo Baralho</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white'
  },
  containerLinha: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#FE6D38',
    width: '100%',
    height: '100%'
  },
  posicaoItemsLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between'
  },
  containerBtn: {
    flexDirection: "row",
    flex: 1,
    position: "relative",
    top: 25,
    marginBottom: 30,
    left: 0,
    right: 0,
    justifyContent: 'space-between',
  },
  btnStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'orange',
  }
})

function mapStateToProps(store) {
  const baralhos = store["baralhos"]
  return {
    baralhos: baralhos
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    pegarBaralhos: () => dispatch(fetchPegarBaralhos()),
    removeBaralho: (baralho) => dispatch(fetchRemoveBaralho(baralho)),
    detalhesBaralho: (chave) => dispatch(pegaDetalhes(chave))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaBaralho)
