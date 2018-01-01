import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import ListaBaralho from './components/ListaBaralho.js'
import NovoBaralho from './components/NovoBaralho.js'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { purple, white } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import DetalheBaralho from './components/DetalheBaralho.js'
import NovaPergunta from './components/NovaPergunta.js'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ModalidadeQuiz from './components/Quiz/ModalidadeQuiz.js'
import MultiploQuiz from './components/Quiz/MultiploQuiz.js'
import FlashCard from './components/Quiz/FlashCard.js'
import reducer from './reducers'
import thunk from 'redux-thunk';
import { setLocalNotification } from './utils/helpers'

function BaralhoStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const MainNavigator = StackNavigator({
  Home: {
    screen: ListaBaralho,
    navigationOptions: {
      title: 'Baralhos',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: '#ED7733',
      }
    }
  },
  NovoBaralho: {
    screen: NovoBaralho,
    navigationOptions: {
      headerTintColor: white,
      title: 'Novo Baralho',
      headerStyle: {
        backgroundColor: '#ED7733',
      }
    }
  },
  DetalheBaralho: {
    screen: DetalheBaralho,
    navigationOptions: {
      title: 'Detalhes',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: '#ED7733',
      }
    }
  },
  NovaPergunta: {
    screen: NovaPergunta,
    navigationOptions: {
      headerTintColor: white,
      title: 'Nova Pergunta',
      headerStyle: {
        backgroundColor: '#ED7733',
      }
    },
  },
  ModalidadeQuiz: {
    screen: ModalidadeQuiz,
    navigationOptions: {
      headerTintColor: white,
      title: 'Quiz',
      headerStyle: {
        backgroundColor: '#ED7733',
      }
    },
  },
  MultiploQuiz: {
    screen: MultiploQuiz,
    navigationOptions: {
      headerTintColor: white,
      title: 'Quiz',
      headerStyle: {
        backgroundColor: '#ED7733',
      }
    },
  },
  FlashCard: {
    screen: FlashCard,
    navigationOptions: {
      headerTintColor: white,
      title: 'Quiz',
      headerStyle: {
        backgroundColor: '#ED7733',
      }
    },
  }
})

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    const store = createStore(
      reducer,
      applyMiddleware(thunk)
    );
    return (
      <Provider store={store}>
        <View style={{ flex: 1, backgroundColor:'white' }}>
          <BaralhoStatusBar backgroundColor={'#ED7733'} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}