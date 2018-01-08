import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styleButton } from '../../themes'

const BotoesAcertoErro = (props) => {
  const { marcarAcerto, marcarErro,  } = props
  return (
    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-end', padding: 15 }}>
      <TouchableOpacity
        style={styleButton.styleBtnAtive}
        onPress={marcarAcerto}>
        <Text style={ [styleButton.btnTextAtive, { fontSize: 20 }] }>Acertei!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={marcarErro}
        style={styleButton.styleBtnAtive}>
        <Text style={ [styleButton.btnTextAtive, { fontSize: 20 }] }>Errei!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default (BotoesAcertoErro)