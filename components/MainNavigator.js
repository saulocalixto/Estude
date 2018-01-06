import MultiploQuiz from '../components/Quiz/MultiploQuiz.js'
import FlashCard from '../components/Quiz/FlashCard.js'
import ModalidadeQuiz from '../components/Quiz/ModalidadeQuiz.js'
import DetalheBaralho from '../components/DetalheBaralho.js'
import NovaPergunta from '../components/NovaPergunta.js'
import ListaBaralho from '../components/ListaBaralho.js'
import NovoBaralho from '../components/NovoBaralho.js'
import { StackNavigator } from 'react-navigation'

const MainNavigator = StackNavigator({
  Home: {
    screen: ListaBaralho,
    navigationOptions: {
      title: 'Baralhos',
    }
  },
  NovoBaralho: {
    screen: NovoBaralho,
    navigationOptions: {
      title: 'Novo Baralho',
    }
  },
  DetalheBaralho: {
    screen: DetalheBaralho,
    navigationOptions: {
      title: 'Detalhes',
    }
  },
  NovaPergunta: {
    screen: NovaPergunta,
    navigationOptions: {
      title: 'Nova Pergunta',
    },
  },
  ModalidadeQuiz: {
    screen: ModalidadeQuiz,
    navigationOptions: {
      title: 'Quiz',
    },
  },
  MultiploQuiz: {
    screen: MultiploQuiz,
    navigationOptions: {
      title: 'Múltipla Escolha',
    },
  },
  FlashCard: {
    screen: FlashCard,
    navigationOptions: {
      title: 'Flash Card',
    },
  }
}, 
{
  navigationOptions: {
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#ED7733',
    }
  },
})

export default MainNavigator