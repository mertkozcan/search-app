import React from 'react';
import PropTypes from 'prop-types';

import '../css/Product.css';

const Product = props => {

    return (
        <div className="product">
            <img src={require("../img/products/" + props.ImageName + ".png")}/>
            <p>{props.ProductName}</p>
            <p>Marka: {props.Brand}</p>
            <p>Renk: {props.Color}</p>
            <p>{props.Price} TL</p>
            <p>{props.Price} TL</p> <p>{props.DiscountPercentage}%</p>
        </div>
    );
};

Product.propTypes = {
    ProductName:PropTypes.string,
    Brand:PropTypes.string,
    Color:PropTypes.string,
    Price:PropTypes.number,
    DiscountPercentage:PropTypes.number,
    ImageName:PropTypes.string
};

export default Product;