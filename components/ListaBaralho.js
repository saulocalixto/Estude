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

    this.props.navigation.dispatch(NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({ routeName: 'DetalheBaralho' }),
      ]
    }))

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
        <View
            style={styles.containerBtn}>
            <Button
              iconLeft
              onPress={() => this.props.navigation.navigate(
                'NovoBaralho',
                { setaBaralho: (chave) => this.setaBaralho(chave) }
              )}
              style={styles.btnStyle}>
              <Text style={{ color: 'white' }}>Novo Baralho</Text>
            </Button>
          </View>
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
                        <Text style={{ fontSize: 25, color: '#D08401', padding: 10 }}>{baralhos[chave].titulo}</Text>
                        <Text style={{ color: '#FEB638', paddingLeft: 10 }}>{baralhos[chave].perguntas.length} carta(s)</Text>
                      </View>
                      <MaterialIcons name='keyboard-arrow-left' size={25} style={{ color: '#FEB638' }} />
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
                  <Text style={{ textAlign: 'center', fontSize: 20, color: '#FE6D38' }}>Sem baralhos cadastrados!</Text>
                </CardItem>
              </Card>
            )
          }
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
    marginBottom: 5,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
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
