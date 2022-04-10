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
    image: String
    category: Category
}

type User {
    _id: ID 
    username: String
    email: String
    password: String
}

type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    Product(_id: ID!): Product
    user: User
}



`;

module.exports = typeDefs;
