import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
import './Layout.css';


class Layout extends Component {
    render() {
        return <div className='App'>
            <nav>
                <NavLink to='/' className="nav-link">На главную!</NavLink>
                <NavLink to='/burger' className="nav-link">Заказать бургер!</NavLink>
                <NavLink to='/game' className="nav-link">Сыграть в сапера</NavLink>
                <NavLink to='/about' className="nav-link">О компании!</NavLink>
            </nav>
            <div>
                {this.props.children}
            </div>
        </div>;
    }
}


export default Layout;
