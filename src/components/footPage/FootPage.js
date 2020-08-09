import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import './FootPage.css';

const FootPage = () => {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4 w-auto">
            <MDBContainer fluid className="d-flex justify-content-center">
                <MDBRow className="w-100">
                    <MDBCol md="6" className="p-4 d-flex justify-content-end">
                        <h5 className="title">Contact Us :</h5>
                        <ul>
                            <li className="list-unstyled">
                                <p>Om Agro Food Products</p>
                            </li>
                            <li className="list-unstyled">
                                <p><MDBIcon className='mr-2' fas icon="phone-alt" />+91 7977076257</p>
                            </li>
                            <li className="list-unstyled">

                                <a style={{
                                    textDecoration: "none"}}
                                   href="mailto:info@omagrofoodproducts.com">
                                    <MDBIcon className='mr-2' fas icon="envelope" />info@omagrofoodproducts.com
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="6" className="p-4 d-flex flex-column justify-content-start">
                        <h5 className="title">Find us here :</h5>
                        <div className="mt-2">
                            <a href="https://facebook.com/omagrofoodproducts" className="">
                                <MDBIcon className='mr-2' fab icon="facebook-f" size="lg" />
                            </a>
                            <a href="https://instagram.com/omagrofoodproducts" className="pl-2">
                                <MDBIcon className='mr-2' fab icon="instagram" size="lg" />
                            </a>
                            {/*<a href="https://twitter.com/omagrofood?s=20" className="pl-2">*/}
                            {/*    <MDBIcon className='mr-2' fab icon="twitter" size="lg" />*/}
                            {/*</a>*/}
                            <a href="https://youtube.com/profile" className="pl-2">
                                <MDBIcon className='mr-2' fab icon="youtube" size="lg" />
                            </a>
                            <a href="https://wa.me/message/VRZRXGSO2ZUCD1" className="pl-2">
                                <MDBIcon className='mr-2' fab icon="whatsapp" size="lg" />
                            </a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://omagrofoodproducts.com"> omagrofoodproducts.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FootPage;
