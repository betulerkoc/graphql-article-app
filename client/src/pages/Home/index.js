import { Row, Col, ListGroup, Image } from "react-bootstrap";

function Home() {
  return (
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col sm={2}>
              {" "}
              <Image
                src="https://randomuser.me/api/portraits/women/44.jpg"
                rounded
              />
            </Col>
            <Col sm={10}>
              <h1>Title</h1>
              <p>Description</p>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col sm={2}>
              <Image
                src="https://randomuser.me/api/portraits/women/57.jpg"
                rounded
              />
            </Col>
            <Col sm={10}>
              <h1>Title</h1>
              <p>Description</p>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
  );
}

export default Home;
