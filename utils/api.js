import { AsyncStorage } from 'react-native'

const CHAVE = 'saulo:baralho'

export const fetchBaralhoResults = () => {
    return AsyncStorage.getItem(CHAVE)
      .then([])
  }

export const submitBaralho = ({ baralho }) => {
    return AsyncStorage.mergeItem(CHAVE, JSON.stringify({
        [baralho.key]: baralho,
    }))
}

export const removeBaralho = (key) => {
    return AsyncStorage.getItem(CHAVE)
        .then((results) => {
            const data = JSON.parse(results)
            data[key] = undefined
            delete data[key]
            AsyncStorage.setItem(CHAVE, JSON.stringify(data))
        })
}