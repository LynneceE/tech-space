import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
    query products($name: String) {    
        products(name: $name) {
        _id
        name
        image
        description
        price
        category
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
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
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
