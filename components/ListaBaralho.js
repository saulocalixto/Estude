import React from "react";
import { View, TouchableOpacity, StyleSheet, Platform, Text } from "react-native";
import { white, purple } from '../utils/colors.js'
import { Button, Card, CardItem, Icon, Right, Body, Container, Content } from 'native-base';

export default class ListaBaralho extends React.Component {

  render() {
    return (
      <Container style={{ padding: 10 }}>
        <Content>
          <Text style={{ fontSize: 30 }}>Lista de Baralhos</Text>
          <Card>
            <CardItem header>
              <Text>React Native</Text>
            </CardItem>
            <CardItem footer>
              <Text>10 cartas</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Animais</Text>
            </CardItem>
            <CardItem footer>
              <Text>70 cartas</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Engenharia de Software</Text>
            </CardItem>
            <CardItem footer>
              <Text>21 cartas</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Temas Atuais</Text>
            </CardItem>
            <CardItem footer>
              <Text>14 cartas</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Programação</Text>
            </CardItem>
            <CardItem footer>
              <Text>50 cartas</Text>
            </CardItem>
          </Card>
          <Button block style={{ marginTop: 20 }}>
            <Text style={{ color: white }}>Novo Baralho</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
