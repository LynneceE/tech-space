import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
    query getProducts {    
        products {
        _id
        name
        image
        description
        price
        category {
          _id
          name
          description
        }
      }
    }
`;

export const QUERY_PRODUCT = gql`
  query product($id: ID!) {
    product(_id: $id) {
      _id
      name
      image
      description
      price 
      category {
        _id
        name
        description
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      password
      cart
  }
}
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      password
  }
}
`;

// export const QUERY_ME_BASIC = gql`
//   {
//     me {
//       _id
//       username
//       email
//     }
//   }
// `;
