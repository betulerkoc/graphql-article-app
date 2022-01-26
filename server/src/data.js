const users = [
  {
    id: "1",
    fullName: "Betul Erkoc",
    age: 28,
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: "2",
    fullName: "Fatma Erkoc",
    age: 30,
    image: "https://randomuser.me/api/portraits/women/31.jpg"
  },
  {
    id: "3",
    fullName: "Ayşe Yilmaz",
    age: 40,
    image: "https://randomuser.me/api/portraits/women/21.jpg"
  },
];

const posts = [
  {
    id: "1",
    title: "Betul'un gönderisi",
    description: "1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW6509Xrnys2Pp_8RB3ffNOsqDrKlPtkvkRQ&usqp=CAU",
    user_id: "1",
  },
  {
    id: "2",
    title: "Betul'un gönderisi",
    description: "2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExtoLVhMIfPRj_8d5RQKF2qjwUbuYL2tZTg&usqp=CAU",
    user_id: "1",
  },
  {
    id: "3",
    title: "Fatma'nin gönderisi",
    description: "3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUemGaDG-J97mxQfOxbh4HPlm4sw8rDNtP3w&usqp=CAU",
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
  {
    id: "3",
    text: "Ayşe'nin yorumu",
    post_id: "1",
    user_id: "3",
  },
];

module.exports = {
  users,
  posts,
  comments,
};
