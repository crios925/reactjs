import React from 'react';



const ProductDetail = ({productTitle, size}) =>{
    return(
        <div>
            <h1>{productTitle}</h1>
            <span>{size}</span>
        </div>
    )
}



export default ProductDetail;