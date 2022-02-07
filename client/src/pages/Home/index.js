import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import Post from "../../components/Post";
import { useQuery } from "@apollo/client";
import {GET_ALL_POSTS, POST_SUBSCRIPTION} from "./queries";

function Home() {
  const { loading, error, data, subscribeToMore } = useQuery(GET_ALL_POSTS);

  useEffect(() => {
    subscribeToMore({
      document: POST_SUBSCRIPTION,
      updateQuery: (prev, {subscriptionData}) => {
        console.log(subscriptionData)
        console.log(prev)
        if(!subscriptionData.data) return prev;
        return {
          posts: [
            ...prev.posts, subscriptionData.data.postCreated
          ]
        }
      }
    })
  }, [subscribeToMore])

  if (loading) {
    return <h1>Loading</h1>
  } 
  if (error) {
    return <h1>Error: {error.message}</h1>
  } 

  return (
    <ListGroup variant="flush">
      {data.posts.map((post) => <Post key={post._id} data={post}/> )}
    </ListGroup>
  );
}

export default Home;
