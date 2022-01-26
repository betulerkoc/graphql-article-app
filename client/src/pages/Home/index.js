import { ListGroup } from "react-bootstrap";
import Post from "../../components/Post";
import { gql, useQuery } from "@apollo/client";
import {GET_ALL_POSTS} from "./queries";

function Home() {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) {
    return <h1>Loading</h1>
  } 
  if (error) {
    return <h1>Error: {error.message}</h1>
  } 

  return (
    <ListGroup variant="flush">
      {data.posts.map((post) => <Post key={post.id} data={post}/> )}
    </ListGroup>
  );
}

export default Home;
