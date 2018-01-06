import React from "react";
import { Text, KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Guid } from '../../utils/helpers.js'
import { submitBaralho, removeBaralho } from '../../utils/api.js'
import { addBaralho, addPergunta } from '../../actions'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class NovaPergunta extends React.Component {

  state = {
    pergunta: '',
    resposta: '',
    opcao2: '',
    opcao3: '',
    opcao4: ''
  }

  submit = () => {

    const key = Guid();
    const { pergunta, resposta, opcao2, opcao3, opcao4 } = this.state;
    const { baralho } = this.props.navigation.state.params;
    const { baralhos } = this.props;

    const novaPergunta = {
      pergunta,
      resposta,
      opcao2,
      opcao3,
      opcao4
    }

    this.props.dispatch(addPergunta(novaPergunta, baralho))

    this.toHome();

    this.setState({
      pergunta: '',
      resposta: '',
      opcao2: '',
      opcao3: '',
      opcao4: ''
    });

    submitBaralho({ baralho })
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    const { pergunta, resposta, opcao2, opcao3, opcao4 } = this.state;
    const habilitarBotao =
      pergunta !== '' &&
      resposta !== '' &&
      opcao2 !== '' &&
      opcao3 !== '' &&
      opcao4 !== '';
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Container>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Pergunta</Label>
                <Input
                  onChangeText={(pergunta) => { this.setState({ pergunta }); }}
                  value={pergunta} />
              </Item>
              <Item floatingLabel last>
                <Label>Resposta</Label>
                <Input
                  onChangeText={(resposta) => { this.setState({ resposta }); }}
                  value={resposta} />
              </Item>
              <Item floatingLabel last>
                <Label>Opção 2</Label>
                <Input
                  onChangeText={(opcao2) => { this.setState({ opcao2 }); }}
                  value={opcao2} />
              </Item>
              <Item floatingLabel last>
                <Label>Opção 3</Label>
                <Input
                  onChangeText={(opcao3) => { this.setState({ opcao3 }); }}
                  value={opcao3} />
              </Item>
              <Item floatingLabel last>
                <Label>Opção 4</Label>
                <Input
                  onChangeText={(opcao4) => { this.setState({ opcao4 }); }}
                  value={opcao4} />
              </Item>
            </Form>
            <View
              style={styles.containerBtn}>
              <Button
                iconLeft
                onPress={() => this.submit()}
                style={[styles.btnStyle, { backgroundColor: habilitarBotao ? 'orange' : 'gray' }]}
                disabled={!habilitarBotao}>
                <Text style={{ color: 'white' }}>Adicionar Pergunta</Text>
              </Button>
            </View>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(store) {
  const baralhos = store["baralhos"]
  return {
    baralhos: baralhos
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    backgroundColor: 'orange',
  }
})


export default connect(mapStateToProps)(NovaPergunta)