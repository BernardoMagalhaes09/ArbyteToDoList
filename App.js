import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Register from './src/screens/Register'
import Login from './src/screens/Login'
import TelaDeTarefas from './src/screens/TelaDeTarefas'
import {Provider} from 'react-redux'
import store from './src/store'


const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name = 'Register' component={Register}/>
          <Stack.Screen name="TelaDeTarefas" component={TelaDeTarefas} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}