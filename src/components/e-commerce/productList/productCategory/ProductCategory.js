import React, {Component} from "react";
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCollapse, MDBIcon} from "mdbreact";
import ProductItem from "./productItem/ProductItem";
import ShowMoreText from "react-show-more-text";
import './ProductCategory.scss';
import Button from "react-bootstrap/Button";

class ProductCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseID: "",
            icon: 'plus',
            variant: 'outline-success'
        };
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
                collapseID: prevState.collapseID !== collapseID ? collapseID : "",
                icon: prevState.collapseID !== '' ? 'plus' : 'minus',
                variant: prevState.collapseID !== '' ? 'outline-success' : 'outline-danger'
        })
        );
    }
    render() {
        return (
            <MDBCard className='mb-4'>
                <MDBCardBody>
                    <MDBCardTitle className='click-cursor'
                                  onClick={this.toggleCollapse(this.props.category)}
                    >
                        <span className='heading'>
                            <h3>{this.props.category}</h3> <Button variant={this.state.variant} size='sm'><MDBIcon icon={this.state.icon} /></Button>
                        </span>
                    </MDBCardTitle>
                    <ShowMoreText
                        lines={1}
                        more='Show more'
                        less='Show less'
                        anchorClass=''
                        onClick={this.executeOnClick}
                        expanded={false}
                    >
                        {this.props.products.Description}
                    </ShowMoreText>
                    <MDBCollapse className='mt-3' id={this.props.category}
                                 isOpen={this.state.collapseID}
                    >
                        {this.props.products.items && this.props.products.items.length ? (
                            this.props.products.items.map((product, index) => (
                                <ProductItem
                                    product={product}
                                    key={index}
                                    addToCart={this.props.addToCart}
                                />
                            ))
                        ) : (
                            <div className="column">
                                    <span className="title has-text-grey-light">
                                        No product found!
                                    </span>
                            </div>
                        )}
                    </MDBCollapse>
                </MDBCardBody>
            </MDBCard>
        )
    }
}

export default ProductCategory;
