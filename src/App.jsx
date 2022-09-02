import React, { Component } from 'react'
import AppHeader from './components/header/AppHeader'
import BurgerIngredients from './components/ingridients/BurgerIngredients'
import BurgerConstructor from './components/constructor/BurgerConstructor'
import BurgerData from './utils/data'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: BurgerData()
        }
    }

  render() {
    return (
        <>
            <AppHeader />
            <BurgerIngredients data={this.state.data}/>
            <BurgerConstructor data={this.state.data}/>
        </>
    )
  }
}

export default App

