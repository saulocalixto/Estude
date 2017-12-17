import React from "react";
import {Text} from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';
import { white } from '../utils/colors.js'

export default class NovoBaralho extends React.Component {
    render() {
      return (
        <Container style={{padding: 10}}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nome do Baralho</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Descrição</Label>
              <Input multiline/>
            </Item>
          </Form>
          <Button block style={{ marginTop: 20 }}>
            <Text style={{ color: white }}>Salvar</Text>
          </Button>
        </Content>
      </Container>
      );
    }
  }