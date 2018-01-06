import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';

const BotoesAcertoErro = (props) => {
  const { marcarAcerto, marcarErro,  } = props
  return (
    <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'flex-end', padding: 15 }}>
      <Button
        iconRight
        style={{ paddingLeft: 10, paddingRight: 10 }}
        onPress={marcarAcerto}
        transparent light>
        <Text style={{ fontSize: 20, color: '#dbd7b7' }}>Acertei!</Text>
      </Button>
      <Button iconLeft
        onPress={marcarErro}
        style={{ paddingLeft: 10, paddingRight: 10 }}
        transparent light>
        <Text style={{ fontSize: 20, color: '#dbd7b7' }}>Errei!</Text>
      </Button>
    </View>
  )
}

export default (BotoesAcertoErro)