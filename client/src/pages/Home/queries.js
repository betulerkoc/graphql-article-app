import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query getAllPost {
    posts{
      id
      title
      description
        user{
          image
        }
    }
  }

`;