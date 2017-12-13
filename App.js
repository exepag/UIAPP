
import React, {Component} from 'react'
import MainPage from './src/MainPage'
import LoginPage from './src/LoginPage'
import RegisterPage from './src/RegisterPage'
import Products from './src/Products'
import ProductDetails from './src/products/ProductDetails'
import {StackNavigator} from 'react-navigation'

const Router = StackNavigator({
  Main: {screen: MainPage },
  Log: {screen: LoginPage},
  Reg: {screen: RegisterPage},
  Prod: {screen: Products},
  Det: {screen: ProductDetails}
})

export default class App extends Component {
  render() {
    return <Router />

  }
}

