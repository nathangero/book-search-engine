const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    bookId: String
    title: String
    description: String
    authors: [String]
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getSingleUser(user: UserInput!): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(user: UserInput!): Auth

    saveBook(user: UserInput!, book: BookInput!): User
    deleteBook(user: UserInput!, bookId: ID): User
  }

  input UserInput {
    _id: ID
    username: String
    email: String
    password: String
  }

  input BookInput {
    _id: ID
    bookId: String
    title: String
    description: String
    authors: [String]
    image: String
    link: String
  }
`

module.exports = typeDefs;