import React from "react";
import { View, TouchableOpacity, StyleSheet, Platform, Text } from "react-native";
import { white, purple } from '../utils/colors.js'
import { Button, Card, CardItem, Icon, Right, Body, Container, Content } from 'native-base';
import { FontAwesome, Ionicons } from '@expo/vector-icons'

export default class DetalheBaralho extends React.Component {

  render() {
    return (
      <Container style={{ padding: 10 }}>
        <Content>
          <Text style={{ fontSize: 30 }}>Detalhes</Text>

          <Card>
            <CardItem>
              <FontAwesome 
                name="question-circle-o" 
                style={{ color: 'orange', paddingRight: 10 }} 
                size={30}/>
              <Text>Pergunta 1</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
            <FontAwesome 
                name="question-circle-o" 
                style={{ color: 'orange', paddingRight: 10 }} 
                size={30}/>
              <Text>Pergunta 2</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>

          <Button block style={{ marginTop: 20 }}>
            <Text style={{ color: white }}>Iniciar Quiz</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
