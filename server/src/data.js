const users = [
  {
    id: "1",
    fullName: "Betul Erkoc",
    age: 28
  },
  {
    id: "2",
    fullName: "Fatma Erkoc",
    age: 30
  },
];

const posts = [
  {
    id: "1",
    title: "Betul'un gönderisi",
    user_id: "1",
  },
  {
    id: "2",
    title: "Betul'un gönderisi",
    user_id: "1",
  },
  {
    id: "3",
    title: "Fatma'nin gönderisi",
    user_id: "2",
  },
];

const comments = [
  {
    id: "1",
    text: "Fatma'nin yorumu",
    post_id: "1",
    user_id: "2",
  },
  {
    id: "2",
    text: "Fatma'nin yorumu",
    post_id: "2",
    user_id: "2",
  },
  {
    id: "3",
    text: "Betul'un yorumu",
    post_id: "3",
    user_id: "1",
  },
];

module.exports = {
  users,
  posts,
  comments,
};
