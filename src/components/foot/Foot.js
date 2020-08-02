import React, {Component} from 'react';
import './Foot.css';
import logo from '../../assets/img/logo.png'

class Foot extends Component {
    render() {
        return (
            <footer className="foot">
                <div>
                    <h3>Contact Us:</h3>
                    <p>Om Agro Food Products</p>
                    <p>Ph. : +91 7977076257</p>
                    <p>
                        <a style={{
                            textDecoration: "none",
                            color: "green"}}
                           href="mailto:omagrofoodproducts@gmail.com">
                            omagrofoodproducts@gmail.com
                        </a>
                    </p>
                </div>
                <div>
                    <img src={logo} alt="logo" height={70}/>
                </div>
            </footer>
        );
    }
}

export default Foot;
