import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
    mutation addNewComment($data: CreateCommentInput!){
        createComment(data: $data) {
            text
        }
    }
`;
