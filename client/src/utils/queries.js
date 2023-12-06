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