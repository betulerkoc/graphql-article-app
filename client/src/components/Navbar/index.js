import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Nav className="justify-content-center" activeKey="/">
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/new">New Post</Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
