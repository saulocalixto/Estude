import React from "react";
import { Text, View, TouchableOpacity } from 'react-native'
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import { Guid } from '../../utils/helpers.js'
import { submitBaralho, removeBaralho } from '../../utils/api.js'
import { addBaralho } from '../../actions'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { styleButton } from '../../theme'

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
            style={styleButton.containerBtn}>
            <TouchableOpacity
              onPress={() => this.submit()}
              style={ habilitarBotao ? 
                styleButton.styleBtnAtive : 
                styleButton.styleBtnInative }
              disabled={!habilitarBotao}>
              <Text style={ habilitarBotao ? 
                styleButton.btnTextAtive : 
                styleButton.btnTextInative }>Adicionar Baralho</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

export default connect()(NovoBaralho)