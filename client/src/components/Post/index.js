import { Row, Col, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Post({ data }) {
  return (
    <ListGroup.Item>
      <Row>
        <Col sm={2}>
          <Image src={data.user.image} rounded />
        </Col>
        <Col sm={10}>
          <Link to={`/post/${data._id}`}>
            <h3>{data.title}</h3>
          </Link>
          <p>{data.description}</p>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}

export default Post;
