import { gql } from "@apollo/client";

export const QUERY_SINGLE_USER = gql`
  query GetSingleUser($user: UserInput!) {
    getSingleUser(user: $user) {
      _id
      username
      email
    }
  }
`;

export const QUERY_GET_ME = gql`
  query GetMe {
    getMe {
      _id
      username
      email
      password
      savedBooks {
        _id
        bookId
        title
        description
        authors
        image
        link
      }
    }
  }
`;