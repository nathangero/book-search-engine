import { gql } from "@apollo/client";

export const MUTATION_CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const MUTATION_LOGIN = gql`
  mutation Login($user: UserInput!) {
    login(user: $user) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const MUTATION_SAVE_BOOK = gql`
  mutation SaveBook($user: UserInput!, $book: BookInput!) {
    saveBook(user: $user, book: $book) {
      _id
      username
      savedBooks {
        _id
        bookId
        title
        description
        authors
        link
        image
      }
    }
  }
`;

export const MUTATION_DELETE_BOOK = gql`
  mutation DeleteBook($user: UserInput!, $bookId: ID) {
    deleteBook(user: $user, bookId: $bookId) {
      _id
      username
      savedBooks {
        _id
        bookId
        title
        description
        authors
        link
        image
      }
    }
  }
`;
