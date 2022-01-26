import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to="/new">New Post</Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
