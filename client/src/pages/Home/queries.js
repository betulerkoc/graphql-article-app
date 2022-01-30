import { gql } from "@apollo/client";

const postFragment  = gql`
  fragment PostFragment on Post {
    id
    title
    description
    user{
      image
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query getAllPost {
    posts{
      ...PostFragment
    }
  }
${postFragment}
`;

export const POST_SUBSCRIPTION = gql`
  subscription {
      postCreated{
        ...PostFragment
      }
  }
  ${postFragment}
`;



