import { Card } from "react-bootstrap";

function Comment({ commentData }) {
  return (
    <>
      {commentData && (
        <Card border="dark" style={{ width: "50rem" }}>
          <Card.Header>{commentData.user.fullName}</Card.Header>
          <Card.Body>
            <Card.Text>
              {commentData.text}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default Comment;
