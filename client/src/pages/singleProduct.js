// import React from 'react';
// import { useParams } from 'react-router-dom';

// // import productList from '../components/ProductsList';
// import ProductForm from '../components/ProductForm';

// import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { QUERY_PRODUCT } from '../utils/queries';

// const OneProduct = (props) => {
//     const { id: productId } = useParams();
  
//     const { loading, data } = useQuery(QUERY_PRODUCT, {
//       variables: { id: productId },
//     });
  
//     const product = data?.product || {};
  
//     if (loading) {
//       return <div>Loading...</div>;
//     }
  
//     return (
//       <div>
//         <div className="card mb-3">
//           <p className="card-header">
//             <span style={{ fontWeight: 700 }} className="text-light">
//               {product.name}
//             </span>{' '}
//           </p>
//           <div className="card-body">
//             <p>{product.description}</p>
//           </div>
//         </div>
  
//         {Auth.loggedIn() && <ProductForm productId={product._id} />}
//       </div>
//     );
// };
  
// export default OneProduct;
  