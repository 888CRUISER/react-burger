import React, { Component } from 'react'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeaderStyle from './app-header.module.css'

export class AppHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            BurgerIcon: false,
            ListIcon: false,
            ProfileIcon: false
        }

        
    }

    burgerIconEditor = () => {
        this.setState({ListIcon: false, ProfileIcon: false, BurgerIcon: true})
    }

    listIconEditor = () => {
        this.setState({ListIcon: true, ProfileIcon: false, BurgerIcon: false})
    }

    profileIconEditor = () => {
        this.setState({ListIcon: false, ProfileIcon: true, BurgerIcon: false})
    }




    render() {
        return (
            <header className={AppHeaderStyle.navigation__panel}>
                <div className={AppHeaderStyle.content}>
                    <div className={AppHeaderStyle.logo}>
                    <Logo/>
                    </div>
                    <div className={AppHeaderStyle.navigation}>
                        <div className={AppHeaderStyle.navigation__link}>
                            <BurgerIcon type={this.state.BurgerIcon  ? 'primary' : 'secondary'} className={AppHeaderStyle.icon}/>
                            <a href="#" className={this.state.BurgerIcon ? (AppHeaderStyle.link__text, AppHeaderStyle.active) : AppHeaderStyle.link__text} onClick={this.burgerIconEditor}>Конструктор</a>
                        </div>
                        <div className={AppHeaderStyle.navigation__link}>
                            <ListIcon type={this.state.ListIcon  ? 'primary' : 'secondary'} className={AppHeaderStyle.icon}/>
                            <a href="#" className={this.state.ListIcon ? (AppHeaderStyle.link__text, AppHeaderStyle.active) : AppHeaderStyle.link__text} onClick={this.listIconEditor}>Лента заказов</a>
                        </div>
                    </div>
                    <div className={AppHeaderStyle.nav__link}>
                        <ProfileIcon type={this.state.ProfileIcon  ? 'primary' : 'secondary'} className={AppHeaderStyle.icon}/>
                        <a href="#" className={this.state.ProfileIcon ? (AppHeaderStyle.link__text, AppHeaderStyle.active) : AppHeaderStyle.link__text} onClick={this.profileIconEditor}>Личный кабинет</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader