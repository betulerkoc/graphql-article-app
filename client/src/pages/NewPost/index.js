import { useState } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS, ADD_POST } from "./queries";

function NewPost() {
  const { data: users_data } = useQuery(GET_USERS);

  const [saveNewPost, { loading, error, data }] = useMutation(ADD_POST);
  const [post, setPost] = useState({});

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit");
    await saveNewPost({
      variables: {
        data: post,
      },
    });
  };
  console.log(post);

  const handleInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>New post</h1>
      <Form>
        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Post Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            value={post.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Post Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Image"
            name="cover"
            value={post.cover}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea2">
          <Form.Label>Post Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Description"
            name="description"
            value={post.description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
          <select
            value={post.user_id}
            className="form-control"
            name="user_id"
            onChange={(e) => handleInputChange(e)}
          >
            {users_data &&
              users_data.users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.fullName}
                </option>
              ))}
          </select>
        <Button type="submit" variant="light" onClick={onHandleSubmit}>
          Add
        </Button>
      </Form>
    </>
  );
}

export default NewPost;
