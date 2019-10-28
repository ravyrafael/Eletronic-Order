import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import {Provider } from 'react-redux'; 
import LoginPage from '~/pages/Login';
import store from './store/identity';

const LoginStack = createStackNavigator({ LoginPage}, {
    initialRouteName: 'LoginPage',
    headerMode: 'none'
})

const Navigation = createAppContainer(LoginStack);

export default class Routes extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Navigation />
        </Provider>
      );
    }
  }
