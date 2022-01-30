import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "./queries";

function CommentForm({ post_id }) {
  const [saveNewComment, { loading, error, data }] = useMutation(ADD_COMMENT);

  const [comment, setComment] = useState({
    post_id: post_id,
    user_id: 1,
  });

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    console.log("handle submit");
    await saveNewComment({
      variables: {
        data: comment,
      },
    });
  };
  console.log(comment);

  const handleInputChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="text"
            placeholder="Enter your comment"
            name="text"
            value={comment.text}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
        <Button type="submit" variant="light" onClick={onHandleSubmit}>
          Add Comment
        </Button>
      </Form>
    </>
  );
}

export default CommentForm;
