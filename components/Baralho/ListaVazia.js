import React from 'react'
import { Text } from 'react-native'
import { Card, CardItem } from 'native-base'

const ListaVazia = (props) => {
  const { mensagem } = props;
  return (
    <Card>
      <CardItem header>
        <Text style={{ textAlign: 'center', fontSize: 20, color: '#FE6D38' }}>
          { mensagem }
        </Text>
      </CardItem>
    </Card>
  )
}

export default ListaVazia