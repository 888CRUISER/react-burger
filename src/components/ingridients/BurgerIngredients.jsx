import React, { Component } from 'react'
import BurgerIngridientStyle from './burger-ingridients.module.css'
import ItemComponent from '../ingridient-items/ItemComponent'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'; // ES6

export class BurgerIngredients extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Burger: false,
            Sauce: false,
            Filling: false,
            Current: 'one',
            bunDataFirst: [],
            bunDataSecond: [],
            mainDataFirst: [],
            mainDataSecond: [],
            sauceDataFirst: [],
            sauceDataSecond: [],
        }

    }

    burgerEditor = () => {
        this.setState({ Sauce: false, Filling: false, Burger: true })
    }

    sauceEditor = () => {
        this.setState({ Sauce: true, Filling: false, Burger: false })
    }

    fillingEditor = () => {
        this.setState({ Sauce: false, Filling: true, Burger: false })
    }

    dataSorter = () => {
        const dataArray = this.props.data
        const bunDataFirst = []
        const mainDataFirst = []
        const sauceDataFirst = []

        dataArray.forEach((item) => {
            if (item.type === 'bun') {
                bunDataFirst.push(item)
            }
            if (item.type === 'main') {
                mainDataFirst.push(item)
            }
            if (item.type === 'sauce') {
                sauceDataFirst.push(item)
            }
        })

        const bunDataSecond = bunDataFirst.splice(0, bunDataFirst.length / 2)
        const mainDataSecond = mainDataFirst.splice(0, mainDataFirst.length / 2)
        const sauceDataSecond = sauceDataFirst.splice(0, sauceDataFirst.length / 2)

        this.setState({ bunDataFirst: bunDataFirst, bunDataSecond: bunDataSecond, sauceDataFirst: sauceDataFirst, sauceDataSecond: sauceDataSecond, mainDataFirst: mainDataFirst, mainDataSecond: mainDataSecond })
    }

    componentDidMount() {
        this.dataSorter()
    }

    render() {
        return (
            <div className={BurgerIngridientStyle.container}>
                <h1 className={BurgerIngridientStyle.title}>Соберите бургер</h1>
                <div className={BurgerIngridientStyle.tabs}>
                    <div style={{ display: 'flex' }}>
                        <Tab value="one" active={this.state.Burger === true} onClick={this.burgerEditor}>
                            Булки
                        </Tab>
                        <Tab value="two" active={this.state.Sauce === true} onClick={this.sauceEditor}>
                            Соусы
                        </Tab>
                        <Tab value="three" active={this.state.Filling === true} onClick={this.fillingEditor}>
                            Начинки
                        </Tab>
                    </div>
                </div>
                <div className={BurgerIngridientStyle.ingridients}>
                    <h2 className={BurgerIngridientStyle.headline}>
                        Булки
                    </h2>
                    <div className={BurgerIngridientStyle.columns__puns}>
                        <div className={BurgerIngridientStyle.column__first}>
                            {this.state.bunDataFirst && this.state.bunDataFirst.map((el) => (
                                <ItemComponent data={el} />
                            ))}
                        </div>
                        <div className={BurgerIngridientStyle.column__first}>
                            {this.state.bunDataSecond && this.state.bunDataSecond.map((el) => (
                                <ItemComponent data={el} />
                            ))}
                        </div>
                    </div>
                    <h2 className={BurgerIngridientStyle.headline__sauses}>Соусы</h2>
                    <div className={BurgerIngridientStyle.columns__sauses}>
                        <div className={BurgerIngridientStyle.column__sauses__first}>
                            {this.state.sauceDataFirst && this.state.sauceDataFirst.map((el) => (
                                <ItemComponent data={el} />
                            ))}
                        </div>
                        <div className={BurgerIngridientStyle.column__sauses__first}>
                            {this.state.sauceDataSecond && this.state.sauceDataSecond.map((el) => (
                                <ItemComponent data={el} />
                            ))}
                        </div>
                    </div>
                    <h2 className={BurgerIngridientStyle.headline__filling}>Начинки</h2>
                    <div className={BurgerIngridientStyle.column__filling}>
                        <div className={BurgerIngridientStyle.column__filling__first}>
                            {this.state.mainDataFirst && this.state.mainDataFirst.map((el) => (
                                <ItemComponent data={el} />
                            ))}
                        </div>
                        <div className={BurgerIngridientStyle.column__filling__first}>
                            {this.state.mainDataSecond && this.state.mainDataSecond.map((el) => (
                                <ItemComponent data={el} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(PropTypes.exact({
        calories: PropTypes.number,
        carbohydrates: PropTypes.number,
        fat: PropTypes.number,
        image: PropTypes.string,
        image_large: PropTypes.string,
        image_mobile: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        proteins: PropTypes.number,
        type: PropTypes.string,
        __v: PropTypes.number,
        _id: PropTypes.string,
    }))
}

export default BurgerIngredients