import React from 'react'
import Container from './Container'
import Footer from './Footer'
import Header from './Header'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Home() {
    let shoppingCart = useSelector((state) => state.carts)
    let count = shoppingCart.length
    return (

        <div className="main">
            <Header></Header>
            <Container></Container>
            <Footer></Footer>
            <a href="#" className="go-to-top">
                <i className="go-to-top__icon fas fa-chevron-circle-up" />
            </a>

            <NavLink to={"/cart"} className="go-to-chat">
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="totalCount">
                    <b>{count}</b>
                </div>
            </NavLink>

        </div>



    )
}
