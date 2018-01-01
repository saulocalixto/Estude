import { ADD_PERGUNTA, ADD_BARALHO, RECEBE_BARALHOS, REMOVE_BARALHO, REMOVE_PERGUNTA, PEGA_DETALHES } from '../actions'

export const initialStateBaralhos = {
    baralhos: {},
    detalheBaralho: {},
    perguntas: []
}

const baralho = (state = initialStateBaralhos, action) => {
    let baralhos;
    switch (action.type) {
        case ADD_PERGUNTA:
            const baralho = action.baralho;    
            baralho.perguntas.push(action.pergunta);
            baralhos = state.baralhos;
            baralhos[baralho.key] = baralho;
            return {
                ...state,
                ["baralhos"]: { ...baralhos }
            }
            return {
                ...state,
                ...action.baralho
            }
        case ADD_BARALHO:
            baralhos = Object.assign(state["baralhos"], action.baralho)
            return {
                ...state,
                ["baralhos"]: { ...baralhos }
            }
        case PEGA_DETALHES:
            baralhos = state.baralhos;
            const baralhoDetalhado = baralhos[action.chave]
            return {
                ...state,
                baralho : baralhoDetalhado
            }
        case RECEBE_BARALHOS:
            baralhos = state.baralhos
            baralhos = action.baralhos !== null
                ? JSON.parse(action.baralhos)
                : baralhos;
            return {
                ...state,
                baralhos
            }
        case REMOVE_BARALHO:
            baralhos = state.baralhos;
            delete baralhos[action.baralho.key];
            return {
                ...state,
                ["baralhos"]: { ...baralhos }
            }
        case REMOVE_PERGUNTA:
            const novasPerguntas = action.baralho.perguntas.filter(x => x.pergunta !== action.pergunta.pergunta)
            action.baralho.perguntas = novasPerguntas;
            baralhos = state.baralhos;
            baralhos[action.baralho.key] = action.baralho;
            return {
                ...state,
                ["baralhos"]: { ...baralhos }
            }
        default:
            return state
    }
}

export default baralho