import { fetchBaralhoResults, removeBaralho } from '../utils/api'

export const ADD_PERGUNTA = 'ADD_PERGUNTA'
export const ADD_BARALHO = 'ADD_BARALHO'
export const PEGA_DETALHES = 'PEGA_DETALHES'
export const RECEBE_BARALHOS = 'RECEBE_BARALHOS'
export const REMOVE_BARALHO = 'REMOVE_BARALHO'
export const REMOVE_PERGUNTA = 'REMOVE_PERGUNTA'

export const addBaralho = (baralho) => {
    return {
        type: ADD_BARALHO,
        baralho
    }
}

export const addPergunta = (pergunta, baralho) => {
    return {
        type: ADD_PERGUNTA,
        pergunta,
        baralho
    }
}

export const fetchPegarBaralhos = () => dispatch => (
    fetchBaralhoResults().then((baralhos) => dispatch(recebeBaralhos(baralhos)),
        erro => console.log(`Algo de errado não deu certo: ${erro}`))
);

export const recebeBaralhos = (baralhos) => {
    return {
        type: RECEBE_BARALHOS,
        baralhos,
    }
}

export const pegaDetalhes = (chave) => {
    return {
        type: PEGA_DETALHES,
        chave,
    }
}

export const fetchRemoveBaralho = (baralho) => dispatch => (
    removeBaralho(baralho.key).then(() => dispatch(removeBaralhoAction(baralho)),
        erro => console.log(`Algo de errado não deu certo: ${erro}`))
);

export const removeBaralhoAction = (baralho) => {
    return {
        type: REMOVE_BARALHO,
        baralho,
    }
}

export const removePergunta = (pergunta, baralho) => {
    return {
        type: REMOVE_PERGUNTA,
        baralho,
        pergunta
    }
}