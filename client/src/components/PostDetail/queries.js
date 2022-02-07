import { gql } from "@apollo/client";

export const GET_POST = gql`
  query getPost($id: ID!) {
    post(_id: $id) {
      _id
      title
      description
      cover
      user {
        _id
        fullName
      }
      comments{
        _id
        text
        user{
          _id
          fullName
        }
      }
    }
  }
`;