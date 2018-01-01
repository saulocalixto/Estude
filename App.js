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

function BaralhoStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  ListaBaralho: {
    screen: ListaBaralho,
    navigationOptions: {
      tabBarLabel: 'Baralhos',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
}, {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  })

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