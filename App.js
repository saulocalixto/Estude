import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk';
import { setLocalNotification } from './utils/helpers'
import MainNavigator from './components/MainNavigator'

function BaralhoStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

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