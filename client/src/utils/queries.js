import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
    query products($name: String) {    
        products(name: $name) {
        _id
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