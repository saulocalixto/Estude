import React from "react";
import { Text, StyleSheet, View } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Guid } from '../../utils/helpers.js'
import { submitBaralho, removeBaralho } from '../../utils/api.js'
import { addBaralho } from '../../actions'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class NovoBaralho extends React.Component {

  state = {
    titulo: '',
    descricao: ''
  }

  submit = () => {

    const key = Guid();
    const { titulo, descricao } = this.state;
    const { setaBaralho } = this.props.navigation.state.params;

    const baralho = {
      titulo,
      descricao,
      perguntas: [],
      key
    }

    this.props.dispatch(addBaralho({
      [key]: baralho
    }))

    this.setState({ titulo: '', descricao: '' });
    setaBaralho(key);
    submitBaralho({ baralho })
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    const { titulo, descricao } = this.state;
    const habilitarBotao = titulo !== '' && descricao !== '';
    return (
      <Container style={{ padding: 10, backgroundColor: 'white' }}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nome do Baralho</Label>
              <Input
                onChangeText={(titulo) => { this.setState({ titulo }); }}
                value={this.state.titulo} />
            </Item>
            <Item stackedLabel last>
              <Label>Descrição</Label>
              <Input
                onChangeText={(descricao) => { this.setState({ descricao }); }}
                value={this.state.descricao}
                multiline />
            </Item>
          </Form>
          <View
            style={styles.containerBtn}>
            <Button
              iconLeft
              onPress={() => this.submit()}
              style={[styles.btnStyle, { backgroundColor: habilitarBotao ? 'orange' : 'gray' }]}
              disabled={!habilitarBotao}>
              <Text style={{ color: 'white' }}>Adicionar Baralho</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
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

export default connect()(NovoBaralho)