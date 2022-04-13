import React from 'react';
import { Link } from 'react-router-dom';

const productList = ({ products, title }) => {
  if (!products.length) {
    return <h3>no products available... yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {products &&
        products.map(product => (
          <div key={product._id} className="card mb-3">
            <p className="card-header">
              {product.name}
            </p>
            <div className="card-body">
              <p>{product.description}</p>
                {// filler for extras maybe
                }
            </div>
          </div>
        ))}
    </div>
  );
};

export default productList;