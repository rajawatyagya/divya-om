import React from "react";
import withContext from "../../../withContext";
import CartItem from "./CartItem";
import {MDBContainer} from "mdbreact";
import './Cart.scss';
import Button from "react-bootstrap/Button";

const Cart = props => {
  const { cart } = props.context;
  const cartKeys = Object.keys(cart || {});
  return (
    <MDBContainer className='cart'>
        <h1 className="title">My Cart</h1>
      <br />
      <div className="container">
        {cartKeys.length ? (
          <div className="column columns is-multiline">
            {cartKeys.map(key => (
              <CartItem
                cartKey={key}
                key={key}
                cartItem={cart[key]}
                removeFromCart={props.context.removeFromCart}
              />
            ))}
            <div className="column is-12 is-clearfix">
              <br />
              <div className="is-pulled-right">
                  <Button variant="danger"
                          onClick={props.context.clearCart}
                  >
                      Clear cart
                  </Button>
                <Button variant='primary'
                        disabled
                >
                    Checkout
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="column">
            <div className="title has-text-grey-light">No item in cart!</div>
          </div>
        )}
      </div>
    </MDBContainer>
  );
};

export default withContext(Cart);
