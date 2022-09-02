import React, { Component } from 'react'
import PunsComponentStyle from './puns-items.module.css'
import Image from '../../images/bun-02.png'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'

export class ItemComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            count: 0,
        }
    }
    render() {

        console.log(this.props.data)
        return (
                <div className={PunsComponentStyle.ingridient__item}>
                    <Counter count={1} size="default" />
                    <div className={PunsComponentStyle.content}>
                        <img src={this.props.data ? this.props.data.image : null} alt="" />
                        <div className={PunsComponentStyle.item__price}>
                            <div className={PunsComponentStyle.item__price__style}>{this.props.data ? this.props.data.price : null}
                            <CurrencyIcon type="primary" /> </div>
                            <div className={PunsComponentStyle.item__name__text}><p>{this.props.data ? this.props.data.name : null}</p></div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default ItemComponent