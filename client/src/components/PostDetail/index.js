import { Row, Col, Button, Image, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST } from "./queries";
import Comment from "../Comment";
import CommentForm from "../CommentForm";

function PostDetail() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  console.log(data);
  const { cover, title, description, user, comments } = data.post;

  return (
    <Container>
      <h2>Post Detail</h2>
      <Row>
        <Col sm={5}>
          <Image src={cover} />
        </Col>
        <Col sm={7}>
          <h3>{title}</h3>
          <p>{description}</p>
          <i>Posted by {user.fullName}</i>
          <br />
          <h6>Comments</h6>
          <Comment />
          {comments.map((comment) => (
            <Comment commentData={comment} key={comment._id} />
          ))}
          <CommentForm post_id={id} />
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetail;
