const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Category {
    _id: ID
    name: String
}

type Product {
    _id: ID
    name: String
    description: String
    price: String
    image: String
    category: Category
}

type User {
    _id: ID 
    username: String
    email: String
    password: String
}

type Auth {
    token: ID
    user: User
  }



type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    Product(_id: ID!): Product
    user: User
}

type Mutation {
    addUser(username: String!, email: String!, password: String): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
}



`;

module.exports = typeDefs;
