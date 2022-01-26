import { Row, Col, ListGroup, Image, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST } from "./queries";

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


  return (
    <Container>
      <h2>Post Detail</h2>
      <Row>
        <Col sm={5}>
          <Image src={data.post.cover} />
        </Col>
        <Col sm={7}>
          <h3>{data.post.title}</h3>
          <p>{data.post.description}</p>
          <i>Posted by {data.post.user.fullName}</i>
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetail;
