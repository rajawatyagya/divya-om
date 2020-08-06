import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer,
    MDBView, MDBMask } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import './NavbarPage.css';
import logo_image from '../../assets/img/logo_white.png';
import back_head from '../../assets/img/stock/back-1.jpg';


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
                        <MDBNavbar color="default-color-dark" dark expand="md" fixed="top">
                            <MDBNavbarBrand href="/">
                                <img src={logo_image} alt='Om Agro Food Products'
                                     className='image-fluid logo' />
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav right>
                                    <MDBNavItem active>
                                        <MDBNavLink to="#!">Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Products</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Recipes</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#!">Gallery</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="#about_us"> About Us</MDBNavLink>
                                        {/*<MDBDropdown>*/}
                                        {/*    <MDBDropdownToggle nav caret>*/}
                                        {/*        <div className="d-none d-md-inline">Dropdown</div>*/}
                                        {/*    </MDBDropdownToggle>*/}
                                        {/*    <MDBDropdownMenu className="dropdown-default">*/}
                                        {/*        <MDBDropdownItem href="#!">Action</MDBDropdownItem>*/}
                                        {/*        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>*/}
                                        {/*        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>*/}
                                        {/*        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>*/}
                                        {/*    </MDBDropdownMenu>*/}
                                        {/*</MDBDropdown>*/}
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </Router>

                    <MDBView src={back_head}>
                        <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                            <h1 className="display-1">Amrut</h1>
                            <h5>The hot gossip is our secret masala and granny tales-the best known preservative</h5>
                            <br />
                            <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
                        </MDBMask>
                    </MDBView>
                </header>

                <main>
                    <MDBContainer className="text-center my-5">
                        <p align="justify">
                            Our Vision is expand globally and be recognized as an Indian Household name around the world.
                            We are committed to grow with integrity.
                        </p>
                    </MDBContainer>
                </main>
            </div>
        );
    }
}

export default NavbarPage;
