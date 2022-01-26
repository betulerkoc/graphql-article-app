npm init -
npm i --save-dev nodemon
npm i graphql apollo-server

imports:
https://www.apollographql.com/docs/apollo-server/getting-started/#step-3-define-your-graphql-schema

https://www.apollographql.com/docs/apollo-server/api/plugin/landing-pages/#graphql-playground-landing-page
npm i apollo-server-core


query getAllUsers{
  users{
    id
    fullName
    posts{
      id
      title
    }
    comments{
      id
      text
    }
  }
}

query getUser{
  user(id:"2") {
    fullName
    posts{
      id
      title
    }
  }
}

query getAllPosts{
  posts{
    title
    user_id
    user{
      id
      fullName
    }
  }
}

query getPost{
  post(id: "2") {
    id
    title
    user_id
    user{
      id
      fullName
    }
  }
}

query getAllCommments{
  comments{
    id
    text
    user{
      id
      fullName
    }
    post{
      id
      title
    }
  }
}

query getComment{
  comment(id:1) {
    id
    text
    user{
      id
      fullName
    }
    post{
      id
      title
    }
  }
}


query getAll{
  posts{
    id
    title
    user{
      id
      fullName
    }
    comments{
      id
      text
    }
  }
}

---
// mutation add

mutation addNewUser{
  createUser(data: {age: 35, fullName: "Sevgi Şen"}) {
    id
    fullName
    comments{
      text
    }
    posts{
      title
    }
  }
}

mutation addNewPost{
  createPost(data: {title: "New added posttt", user_id:"1"}) {
    id
    title
    user{
      id
      fullName
      posts{
        title
      }
    }
  }
}

mutation addNewComment{
  createComment(data: {text: "Selam", post_id: "1", user_id:"1"}) {
    id
    text
    user{
      fullName
    }
    post{
      title
    }
  }
}

// mutation update
mutation updateUser{
  updateUser(
    id: "1",
    data: {
      age: 32
    }
  ) {
    id
    fullName
    age
  }
}

mutation updatePost{ 
  updatePost(
    id: "2",
    data: {
      title: "Yeeeyy "
    }
  ) {
    id
    title
  }
}

mutation updateComment{ 
  updateComment(
    id: "1",
    data: {
      text: "Changed comment"
    }
  ) {
    id
    text
    user_id
  }
}

//mutation delete(spesific)

mutation deleteUser{
  deleteUser(id: "2"){
    id
    fullName
  }
}


mutation deletePost{
  deletePost(id: "2"){
    id
    title
  }
}


mutation deleteComment{
  deleteComment(id: "2"){
    id, 
    text
  }
}

//mutation delete all

mutation deleteAllUsers{
  deleteAllUsers{
    count
  }
}

mutation deleteAllPosts{
  deleteAllPosts{
    count
  }
}

mutation deleteAllComments{
  deleteAllComments{
    count
  }
}

----

- Subscription

npm i graphql-yoga

subscription CountData{
  count
}

subscription UserCreated{
  userCreated{
    id
    fullName
  }
}

subscription UserUpdated{
  userUpdated{
    id
    fullName
  }
}

subscription UserDeleted {
  userDeleted{
    id
    fullName
  }
}

subscription PostCreated {
  postCreated(
    user_id: "1"
  ){
    id
    title
  }
}

subscription PostUpdated {
  postUpdated{
    id
    title
  }
}

subscription PostDeleted {
  postDeleted{
    id
    title
  }
}

subscription CommentCreated {
  commentCreated{
    id
    text
  }
}

subscription CommentUpdated {
  commentUpdated{
    id
    text
  }
}

subscription CommentDeleted {
  commentDeleted {
    id
    text
  }
}



---
type ve resolver'ları merge etme: 
 graphql tools: https://www.graphql-tools.com/docs/introduction 

---
babel.js
https://babeljs.io/setup 
