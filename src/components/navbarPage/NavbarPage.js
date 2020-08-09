import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer,
    MDBView, MDBMask } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import './NavbarPage.css';
import logo_image from '../../assets/scss/img/logo_white.png';
import back_head from '../../assets/scss/img/stock/back-1.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MainPage from "../mainPage/MainPage";
import Recipes from "../recipes/Recipes";
import Gallery from "../gallery/Gallery";
import About from "../about/About";

import amrut from '../../assets/scss/img/amrut.png';


class NavbarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div>
                <header>
                    <Router>
                        <MDBNavbar color="secondary-om" dark expand="md" fixed="top">
                            <MDBNavbarBrand href="/">
                                <img src={logo_image} alt='Om Agro Food Products'
                                     className='image-fluid logo' />
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav right>
                                    <MDBNavItem active>
                                        <AnchorLink offset={() => 100} href='#home'
                                                    style={{ color:"white" }}
                                                    className="pl-3">
                                            Home
                                        </AnchorLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <AnchorLink offset={() => 100} href='#products'
                                                    style={{ color:"white" }}
                                                    className="pl-3">
                                            Products
                                        </AnchorLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <AnchorLink offset={() => 100} href='#recipes'
                                                    style={{ color:"white" }}
                                                    className="pl-3">
                                            Recipes
                                        </AnchorLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <AnchorLink offset={() => 100} href='#gallery'
                                                    style={{ color:"white" }}
                                                    className="pl-3">
                                            Gallery
                                        </AnchorLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <AnchorLink offset={() => 100} href='#about'
                                                    style={{ color:"white" }}
                                                    className="pl-3">
                                            About Us
                                        </AnchorLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </Router>

                    <section id='home'>
                        <MDBView src={back_head}>
                            <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                                <img src={amrut} alt="Amrut" className="amrut-logo" />
                                <h4>The hot gossip is our secret masala and granny tales-the best known preservative.</h4>
                                <br />
                                <p>Made with love, goodness and care.</p>
                            </MDBMask>
                        </MDBView>
                    </section>
                </header>

                <main>
                    <MDBContainer className="text-center my-5">
                        <p align="text-center">
                            Our Vision is to expand globally and be recognized as an Indian Household name around the world.
                        </p>
                        <p align="text-center">
                            We are committed to grow with integrity.
                        </p>
                    </MDBContainer>
                    <section id='products'>
                        <MDBContainer>
                            <MainPage />
                        </MDBContainer>
                    </section>
                    <section id='recipes'>
                        <MDBContainer className="text-center my-5">
                            <Recipes />
                        </MDBContainer>
                    </section>
                    <section id='gallery'>
                        <MDBContainer className="text-center my-5">
                            <Gallery />
                        </MDBContainer>
                    </section>
                    <section id='about'>
                        <MDBContainer className="text-center my-5">
                            <About />
                        </MDBContainer>
                    </section>

                </main>
            </div>
        );
    }
}

export default NavbarPage;
