import React, {Component} from 'react';
import './Products.css';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: null,
        };
    }

    handlePageChange(number) {
        this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
    };

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Products;
