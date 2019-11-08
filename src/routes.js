import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import {Provider } from 'react-redux'; 
import LoginPage from '~/pages/Login';
import  HomePage from '~/pages/Home';
import  Cardapio from '~/pages/Cardapio';
import reducers  from './store/reducers';
import { createStore,combineReducers } from 'redux';
import firebase from 'firebase';
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  firebase: firebaseReducer
  // firestore: firestoreReducer // <- needed if using firestore
})


const LoginStack = createStackNavigator({ LoginPage}, {
    initialRouteName: 'LoginPage',
    headerMode: 'none'
})

const HomeStack = createStackNavigator(
{ HomePage:{
screen: HomePage,
navigationOptions: {
  headerTitle: 'Home',
}},
Cardapio:{
  screen: Cardapio,
  navigationOptions: {
    headerTitle: 'Cardapio',
  }}
}, {
  initialRouteName: 'HomePage',
  headerMode: 'screen'
})

const MainSwitch = createSwitchNavigator({
  Login: LoginStack,
  Home: HomeStack
  },
  {
    initialRouteName: 'Login'
  } 
);

const Navigation = createAppContainer(MainSwitch);

var firebaseConfig = {
  apiKey: "AIzaSyCno596fleJdcEhCgA65bIeJM7EVD8TZiI",
  authDomain: "eletronicorder.firebaseapp.com",
  databaseURL: "https://eletronicorder.firebaseio.com",
  projectId: "eletronicorder",
  storageBucket: "eletronicorder.appspot.com",
  messagingSenderId: "684419841593",
  appId: "1:684419841593:web:d7bc4656fb9e35bab457e8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const initialState = {}
const store = createStore(rootReducer, initialState)
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
}


export default class Routes extends React.Component {



    render() {
      return (
        <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
          <Navigation />
          </ReactReduxFirebaseProvider>
        </Provider>
      );
    }
  }
