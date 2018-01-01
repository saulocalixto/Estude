import React from "react";
import {Text} from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import { white } from '../utils/colors.js'
import { Guid } from '../utils/helpers.js'
import { submitBaralho, removeBaralho } from '../utils/api.js'
import { addBaralho } from '../actions'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import ListaBaralho from './ListaBaralho'

class NovoBaralho extends React.Component {
  
    state = {
      titulo: '',
      descricao: ''
    }

  submit = () => {

    const key = Guid();
    const {titulo, descricao} = this.state;
    const { baralhos } = this.props;

    const baralho = {
      titulo,
      descricao,
      perguntas: [],
      key
    }

    this.props.dispatch(addBaralho({
      [key]: baralho
    }, baralhos))

    this.toHome();

    this.setState({titulo : '', descricao: ''});
    submitBaralho({ baralho })
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

    render() {
      return (
        <Container style={{padding: 10, backgroundColor:'white'}}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nome do Baralho</Label>
              <Input 
                onChangeText={(titulo) => {this.setState({titulo}); }}
                value={this.state.titulo}/>
            </Item>
            <Item stackedLabel last>
              <Label>Descrição</Label>
              <Input 
                onChangeText={(descricao) => {this.setState({descricao}); }}
                value={this.state.descricao}
                multiline/>
            </Item>
          </Form>
          <Button block style={{ marginTop: 20 }} onPress={() => this.submit()}>
            <Text style={{ color: white }}>Salvar</Text>
          </Button>
        </Content>
      </Container>
      );
    }
  }

  function mapStateToProps(store) {
    const baralhos = store["baralhos"]
    return {
      baralhos: baralhos
    }
  }
  
export default connect(mapStateToProps)(NovoBaralho)