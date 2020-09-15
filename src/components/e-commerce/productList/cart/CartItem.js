import React from "react";
import Button from "react-bootstrap/Button";
import ShowMoreText from 'react-show-more-text';

const CartItem = props => {
  const { cartItem, cartKey } = props;
  const { product, amount } = cartItem;
  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src={product.image || "https://bulma.io/images/placeholders/128x128.png"}
                alt="product"
                width='128px'
              />
            </figure>
          </div>
          <div className="media-content">
            <h4 style={{ textTransform: "capitalize" }}>
              {product.Name}{" "}
              <span className="text-info">₹{product.Price}</span>
            </h4>
            <ShowMoreText
                lines={1}
                more='Show more'
                less='Show less'
                anchorClass=''
                expanded={false}
            >
              {product.Description}
            </ShowMoreText>
            <small>{`${amount} in cart`}</small>
          </div>
          <Button variant='danger' size='sm'
            onClick={() => props.removeFromCart(cartKey)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
