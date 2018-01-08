import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Button, SwipeRow, Icon } from 'native-base';
import { connect } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons'
import { styleBaralhos } from '../../themes'

const ListarBaralhos = (props) => {
  const { listaChaves, baralhos, setaBaralho, deleteBaralho } = props;
  return (
    <View>
      {
        listaChaves.map(chave => (
          <SwipeRow
            leftOpenValue={0}
            rightOpenValue={-75}
            key={chave}
            body={
              <TouchableOpacity onPress={() => setaBaralho(chave) }
                style={styles.containerLinha}>
                <View style={styles.posicaoItemsLinha}>
                  <View>
                    <Text style={styleBaralhos.titulo}>
                      {baralhos[chave].titulo}
                    </Text>
                    <Text style={{ color: '#9BADAD', paddingLeft: 10 }}>
                      {baralhos[chave].perguntas.length} carta(s)
                  </Text>
                  </View>
                  <MaterialIcons 
                    name='keyboard-arrow-left' size={25} 
                    style={{ color: '#FEB638' }} />
                </View>
              </TouchableOpacity>
            }
            right={
              <Button danger onPress={() => deleteBaralho(baralhos[chave]) }>
                <Icon active name="trash" />
              </Button>
            }
            disableRightSwipe={true}
          />
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  containerLinha: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  posicaoItemsLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between'
  },
})

function mapStateToProps(store) {
  const baralhos = store["baralhos"]
  return {
    baralhos
  }
}


export default connect(mapStateToProps)(ListarBaralhos)