import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Button, Card, CardItem, Container, Content, SwipeRow } from 'native-base';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { fetchPegarBaralhos, fetchRemoveBaralho, pegaDetalhes } from '../../actions'
import { Feather } from '@expo/vector-icons'
import ListarBaralhos from './ListarBaralhos.js'

class HomeBaralho extends React.Component {

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
            <Feather onPress={() => this.props.navigation.navigate(
              'NovoBaralho',
              { setaBaralho: (chave) => this.setaBaralho(chave) }
            )} name={'plus-circle'} size={50} style={{ color: 'orange' }} />
          </View>
          {listaChaves.length !== 0 ? (
            <ListarBaralhos 
              listaChaves={ listaChaves }
              setaBaralho={ (chave) => this.setaBaralho(chave) }
              deleteBaralho={(baralho) => this.deleteBaralho(baralho)} />
          )
            :
            (
              <Card>
                <CardItem header>
                  <Text style={{ textAlign: 'center', fontSize: 20, color: '#FE6D38' }}>
                    Sem baralhos cadastrados!
                  </Text>
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
  containerBtn: {
    flexDirection: "row",
    flex: 1,
    position: "relative",
    marginBottom: 5,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
  }
})

function mapStateToProps(store) {
  const baralhos = store["baralhos"]
  return {
    baralhos
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    pegarBaralhos: () => dispatch(fetchPegarBaralhos()),
    removeBaralho: (baralho) => dispatch(fetchRemoveBaralho(baralho)),
    detalhesBaralho: (chave) => dispatch(pegaDetalhes(chave))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeBaralho)
