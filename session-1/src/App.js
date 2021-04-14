import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'
import './style.css'

export default function App() {
  return (
    <Router>
      <div className="header">
        <div className="header-link">
          <div className="logo-wrap">
                <img className="logo" src="/img/logo.png" alt="Logo"/>
              </div>
          <span className="home-link"><Link to="/">Home</Link></span>
          <span className="cart-link"><Link to="/cart">Cart</Link></span>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/category/:categoryId">
          <CategoryPage />
        </Route>
        <Route path="/product">
          <ProductPage />
        </Route>
      </Switch>
    </Router>
  )
}
