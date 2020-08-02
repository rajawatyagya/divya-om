import React, {Component} from 'react';
import './ComingSoon.css';
import tea from '../../assets/gif/tea-5.gif'

class ComingSoon extends Component {
    render() {
        return (
            <div className="coming-soon-con">
                <h1 className="coming-soon-text">Coming Soon . . . </h1>
                <img src={tea} alt='tea' height={200} />
            </div>
        );
    }
}

export default ComingSoon;
