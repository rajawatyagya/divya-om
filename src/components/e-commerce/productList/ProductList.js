import React from "react";
import withContext from "../../withContext";
import './ProductList.scss';
import {MDBContainer} from "mdbreact";
import ProductCategory from "./productCategory/ProductCategory";

const ProductList = props => {
  const { products } = props.context;
  return (
    <MDBContainer className="product-container">
      <div className="product-title mt-5">
        <div className="hero-body container">
          <h1 className="title">Our Products</h1>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {products ? (
            Object.keys(products).map((category, index) => (
              <ProductCategory
                  key={index}
                  products={products[category]}
                  category={category}
                  addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No product found!
              </span>
            </div>
          )}
        </div>
      </div>
    </MDBContainer>
  );
};

export default withContext(ProductList);
