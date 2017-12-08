import React from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";

export default class NovoBaralho extends React.Component {
    render() {
      return (
        <View>
          <Text>NOVO BARALHO</Text>
            <View>
                <TextInput underlineColorAndroid='transparent' placeholder='Nome' />
            </View>
          <TouchableOpacity>
            <Text>Enviar</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }