import React from 'react';

const Product = ({ product, handleAddToCart }) => (
    <div className="Products-item">
    <img src={product.banner} alt={product.nombre} />
    <div className="Products-item-info">
      <h2>
        {product.nombre}
        <span>
          $
          {product.precio}
        </span>
      </h2>
    </div>
    <button type="button" onClick={handleAddToCart(product)}>Add to Cart</button>
  </div>
);

export default Product;

