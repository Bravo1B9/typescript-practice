interface User {
  userId: number;
  email: string;
  password: string;
  posts: Post[]
}

interface Post {
  postId: number;
  title: string;
  postType: PostType;
}

enum PostType {
  Text,
  Image,
  Link,
}

let nextUserId = 1;
let nextPostId = 1;
let users: User[] = [];

const createUser = (email: string, password: string) => {
  const newUser: User = {
    userId: nextUserId,
    email,
    password,
    posts: [],
  }
  users.push(newUser);
  nextUserId++;
}

const createPost = (userId: number, title: string, postType: number) => {
  const newPost: Post = {
    postId: nextPostId,
    title,
    postType,
  }
  for(let i = 0; i < users.length; i++) {
    if(users[i].userId === userId) {
      users[i].posts.push(newPost);
    }
  }
  nextPostId++;
}

const getPostsByUserId = (userId: number) => {
  for(let i = 0; i < users.length; i++) {
    if(users[i].userId === userId) {
      console.log(users[i].posts);
    }
  }
}

const getUsers = () => {
  console.log(users);
}

createUser("b1@xgmi", "pass123");
getUsers();
createPost(1, "First post", 0);
getPostsByUserId(1);