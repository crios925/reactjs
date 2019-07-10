import React from 'react';

const ProductDetail = ({data:{productTitle,size,price, priceT}}) =>{

    return(
        <div>
            <h1>{productTitle}</h1>
            <span>{size}</span>
        </div>
    )
};


export default ProductDetail;