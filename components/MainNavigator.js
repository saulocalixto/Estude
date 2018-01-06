import MultiploQuiz from '../components/Quiz/MultiploQuiz.js'
import FlashCard from '../components/Quiz/FlashCard.js'
import ModalidadeQuiz from '../components/Quiz/ModalidadeQuiz.js'
import DetalheBaralho from '../components/Baralho/DetalheBaralho.js'
import NovaPergunta from '../components/Baralho/NovaPergunta.js'
import HomeBaralho from '../components/Baralho/HomeBaralho.js'
import NovoBaralho from '../components/Baralho/NovoBaralho.js'
import { StackNavigator } from 'react-navigation'

const MainNavigator = StackNavigator({
  Home: {
    screen: HomeBaralho,
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