import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import {Provider } from 'react-redux'; 
import LoginPage from '~/pages/Login';
import  HomePage from '~/pages/Home';
import  Cardapio from '~/pages/Cardapio';
import store from './store/identity';



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

export default class Routes extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Navigation />
        </Provider>
      );
    }
  }
