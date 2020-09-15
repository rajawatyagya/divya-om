import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import ShowMoreText from 'react-show-more-text';
import './ProductItem.scss';

class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amountAddedToCart: 0
        };
    }

    addToAmount(amount) {
        this.setState(prevState => ({
            amountAddedToCart: prevState.amountAddedToCart + amount
        }));
    }

    executeOnClick() {

    }

  render() {
      return (
          <div className=" column is-half">
              <div className="box">
                  <div className="media">
                      <div className="media-left">
                          <figure className="image is-64x64">
                              <img
                                  src={this.props.product.image}
                                  alt="product"
                                  width='128px'
                              />
                          </figure>
                      </div>
                      <div>
                          <h4 style={{ textTransform: "capitalize"}}>
                              {this.props.product.Name}{' '}
                              <span className="text-info">₹{this.props.product.Price}</span>
                          </h4>
                          <ShowMoreText
                              lines={1}
                              more='Show more'
                              less='Show less'
                              anchorClass=''
                              onClick={this.executeOnClick}
                              expanded={false}
                          >
                              {this.props.product.Description}
                          </ShowMoreText>
                          <div className="is-clearfix">
                              {parseInt(this.props.product.Stock) > 0 ? (
                                      <div>
                                          <small className='pr-3 text-success'>{this.state.amountAddedToCart + " in cart"}</small>
                                          <small className='pr-3 text-primary'>{this.props.product.Stock + " Available"}</small>
                                      </div>
                              ) : (
                                  <div>
                                      <small className="text-danger">Out Of Stock</small>
                                  </div>
                              )}
                              <Button variant="primary" size='sm'
                                      onClick={() => {
                                          this.props.addToCart({
                                              id: this.props.product.Name,
                                              product: this.props.product,
                                              amount: 1
                                          })
                                          this.addToAmount(1)
                                      }
                                      }
                                      disabled={
                                          parseInt(this.props.product.Stock) === 0 ||
                                          this.state.amountAddedToCart >= parseInt(this.props.product.Stock)
                                      }
                              >
                                  Add to Cart
                              </Button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
  }
};

export default ProductItem;
