import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer,
    MDBView, MDBMask, MDBNavLink, MDBAnimation
} from "mdbreact";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './NavbarPage.scss';
import logo_image from '../../assets/scss/img/logo_white.png';

import amrut from '../../assets/scss/img/amrut.png';
import data from "../Data";
import Context from "../Context";
import ProductList from "../e-commerce/productList/ProductList";
import Login from "../e-commerce/Login";
import Cart from "../e-commerce/productList/cart/Cart";
import AddProduct from "../e-commerce/productList/productCategory/productItem/AddProduct";


class NavbarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            cart: {},
            products: [],
            isOpen: false
        };

        this.routerRef = React.createRef();
    }
    login = (usn, pwd) => {
        let user = data.users.find(u => u.username === usn && u.password === pwd);
        if (user) {
            this.setState({ user });
            localStorage.setItem("user", JSON.stringify(user));
            return true;
        }
        return false;
    };

    logout = e => {
        e.preventDefault();
        this.setState({ user: null });
        localStorage.removeItem("user");
    };

    addProduct = (product, callback) => {
        let products = this.state.products.slice();
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        this.setState({ products }, () => callback && callback());
    };

    addToCart = cartItem => {
        let cart = this.state.cart;
        if (cart[cartItem.id]) {
            cart[cartItem.id].amount += cartItem.amount;
        } else {
            cart[cartItem.id] = cartItem;
        }
        if (cart[cartItem.id].amount > cart[cartItem.id].product.Stock) {
            cart[cartItem.id].amount = cart[cartItem.id].product.Stock;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        this.setState({ cart });
    };

    checkout = () => {
        if (!this.state.user) {
            this.routerRef.current.history.push("/login");
            return;
        }
        const cart = this.state.cart;
        const products = this.state.products.map(p => {
            if (cart[p.name]) {
                p.stock = p.stock - cart[p.name].amount;
            }
            return p;
        });
        this.setState({ products });
        this.clearCart();
    };

    removeFromCart = cartItemId => {
        let cart = this.state.cart;
        delete cart[cartItemId];
        localStorage.setItem("cart", JSON.stringify(cart));
        this.setState({ cart });
    };

    clearCart = () => {
        let cart = {};
        localStorage.setItem("cart", JSON.stringify(cart));
        this.setState({ cart });
    };

    componentDidMount() {
        let products = localStorage.getItem("products");
        let cart = localStorage.getItem("cart");
        let user = localStorage.getItem("user");
        products = products ? JSON.parse(products) : data.initProducts;
        cart = cart ? JSON.parse(cart) : {};
        user = user ? JSON.parse(user) : null;
        this.setState({ products, user, cart });
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: "transparent" }}
                onClick={this.toggleCollapse}
            />
        );
        return (
            <Context.Provider
                value={{
                    ...this.state,
                    removeFromCart: this.removeFromCart,
                    addToCart: this.addToCart,
                    login: this.login,
                    addProduct: this.addProduct,
                    clearCart: this.clearCart,
                    checkout: this.checkout
                }}
            >
                <div id="apppage">
                    <Router ref={this.routerRef}>
                        <div>
                            <MDBNavbar
                                color="primary-color"
                                dark
                                expand="md"
                                fixed="top"
                                scrolling
                            >
                                <MDBContainer>
                                    <MDBNavbarBrand href="/">
                                        <img src={logo_image} alt='Om Agro Food Products'
                                             className='image-fluid logo' />
                                    </MDBNavbarBrand>
                                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                                    <MDBCollapse isOpen={this.state.isOpen} navbar>
                                        <MDBNavbarNav right>
                                            <MDBNavItem>
                                                <MDBNavLink to="/" className='custom-color'>
                                                    Home
                                                </MDBNavLink>
                                            </MDBNavItem>
                                            <MDBNavItem>
                                                <MDBNavLink to="/products">
                                                    Products
                                                </MDBNavLink>
                                            </MDBNavItem>
                                            <MDBNavItem>
                                                <MDBNavLink to="/cart">
                                                    Cart (
                                                    <span>
                                                        {Object.keys(this.state.cart).length}
                                                    </span>)
                                                </MDBNavLink>
                                            </MDBNavItem>
                                        </MDBNavbarNav>
                                    </MDBCollapse>
                                </MDBContainer>
                            </MDBNavbar>
                            {this.state.isOpen && overlay}
                        </div>
                        <Switch>
                            <Route exact path="/">
                                <MDBView className='full-page'>
                                    <MDBMask className="d-flex justify-content-center flex-column align-items-center">
                                        <MDBContainer className="d-flex justify-content-center flex-row flex-wrap align-items-center welcome-ib">
                                            <MDBAnimation type="fadeInLeft" delay=".3s">
                                                <div className="text-center my-md-5">
                                                    <div className='my-md-3'>
                                                        <h1 className='ib-head h1-responsive text-center mt-sm-5 px-3'>
                                                            Welcome to</h1>
                                                        <hr className="hr-light" />
                                                    </div>
                                                </div>
                                            </MDBAnimation>
                                            <MDBAnimation type="fadeInRight" delay=".3s">
                                                <div>
                                                    <img
                                                        src={amrut}
                                                        alt=""
                                                        className="img-fluid"
                                                    />
                                                </div>
                                            </MDBAnimation>
                                        </MDBContainer>
                                    </MDBMask>
                                </MDBView>
                                <MDBContainer className="text-center my-5">
                                    <p align="text-center">
                                        Our Vision is to expand globally and be recognized as an Indian Household name around the world.
                                    </p>
                                    <p align="text-center">
                                        We are committed to grow with integrity.
                                    </p>
                                </MDBContainer>
                            </Route>
                            <Route exact path="/products" component={ProductList} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/cart" component={Cart} />
                            <Route exact path="/add-product" component={AddProduct} />
                        </Switch>
                    </Router>
                </div>
            </Context.Provider>
        );
    }
}

export default NavbarPage;
