import React, { Component } from 'react'
import BurgerConstructorStyle from './burger-constructor.module.css'
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'; // ES6

export class BurgerConstructor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            burger: null
        }
    }

    getConstructorComponent(el) {
        if (el === this.props.data[0]) {
            return <ConstructorElement
                type="top"
                isLocked={true}
                text={el.name}
                price={el.price}
                thumbnail={el.image}
            />
        }
        if (el === this.props.data[this.props.data.length - 1]) {
            return <ConstructorElement
                type="bottom"
                isLocked={false}
                text={el.name}
                price={el.price}
                thumbnail={el.image}
            />
        }

        return <ConstructorElement
            text={el.name}
            price={el.price}
            thumbnail={el.image}
        />
    }
    render() {
        console.log(this.props.data)
        return (
            <div className={BurgerConstructorStyle.container}>
                <div className={BurgerConstructorStyle.container__component}>
                    <div className={BurgerConstructorStyle.component__container}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                            {this.props.data && this.props.data.map((el, i) => (
                                this.getConstructorComponent(el)
                            ))}
                        </div>
                    </div>
                </div>
                <div className={BurgerConstructorStyle.info}>
                    <div className={BurgerConstructorStyle.info__price}>
                        <h1 className={BurgerConstructorStyle.info__price__text}>610</h1>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button type="primary" size="large" className={BurgerConstructorStyle.button__text}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
        )
    }
}

BurgerConstructor.propTypes = {
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

export default BurgerConstructor