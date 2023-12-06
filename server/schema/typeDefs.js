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
    getSingleUser(userId: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(userId: ID!, book: Book!): User
    delete(userId: ID!, bookId: ID): User
  }
`

module.exports = typeDefs;