import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import './NavbarPage.css';
import logo_image from '../../assets/img/logo_white.png';


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
            <Router>
                <MDBNavbar color="stylish-color" dark expand="md">
                    <MDBNavbarBrand>
                        <img src={logo_image} style={{width: 150}} alt='Om Agro Food Products' className='image-fluid' />
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
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
                        {/*<MDBNavbarNav right>*/}
                        {/*    <MDBNavItem>*/}
                        {/*        <MDBNavLink className="waves-effect waves-light" to="#!">*/}
                        {/*            <a style={{*/}
                        {/*                textDecoration: "none",*/}
                        {/*                color: "white"*/}
                        {/*            }}*/}
                        {/*               href="mailto:info@omagrofoodproducts.com">*/}
                        {/*                <MDBIcon fas icon="envelope" />*/}
                        {/*            </a>*/}
                        {/*        </MDBNavLink>*/}
                        {/*    </MDBNavItem>*/}
                        {/*</MDBNavbarNav>*/}
                    </MDBCollapse>
                </MDBNavbar>
            </Router>
        );
    }
}

export default NavbarPage;
