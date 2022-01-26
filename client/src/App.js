import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
 
function App() {
  return (
    <div className="App">
      <Container>
        <Router>
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={Home} />
          <Route path="/new" component={NewPost} />
        </Router>
      </Container>
    </div>
  );
}

export default App;
