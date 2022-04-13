import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from '../../utils/mutations.js';
// import { Product } from '../../../server/models/Product.js';
import { QUERY_PRODUCTS, QUERY_ME } from '../../utils/queries.js';

const ProductForm = ({ product_id }) => {
    const ProductForm = () => {
        const [description, setText] = useState('');
        const [characterCount, setCharacterCount] = useState(0);
      
        const [addProduct, { error }] = useMutation(ADD_PRODUCT, {
          update(cache, { data: { addProduct } }) {
            try {
              // update thought array's cache
              // could potentially not exist yet, so wrap in a try/catch
              const { products } = cache.readQuery({ query: QUERY_PRODUCTS });
              cache.writeQuery({
                query: QUERY_PRODUCTS,
                data: { products: [addProduct, ...products] },
              });
            } catch (e) {
              console.error(e);
            }
      
            // update me object's cache
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
              query: QUERY_ME,
              data: { me: { ...me, products: [...me.products, addProduct] } },
            });
          },
        });
      
        // update state based on form input changes
        const handleChange = (event) => {
          if (event.target.value.length <= 280) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
          }
        };
      
        // submit form
        const handleFormSubmit = async (event) => {
          event.preventDefault();
      
          try {
            await addProduct({
              variables: { description },
            });
      
            // clear form value
            setText('');
            setCharacterCount(0);
          } catch (e) {
            console.error(e);
          }
        };
      
        return (
          <div>
            <p
              className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}
            >
              Character Count: {characterCount}/280
              {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form
              className="flex-row justify-center justify-space-between-md align-stretch"
              onSubmit={handleFormSubmit}
            >
              <textarea
                placeholder="hello hello product here"
                value={description}
                className="form-input col-12 col-md-9"
                onChange={handleChange}
              ></textarea>
              <button className="btn col-12 col-md-3" type="submit">
                Submit
              </button>
            </form>
          </div>
        );
    }
};
   
export default ProductForm;