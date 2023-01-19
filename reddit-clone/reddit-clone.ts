interface User {
  userId: number;
  email: string;
  password: string;
  post: Post[]
}

interface Post {
  postId: number;
  title: string;
  postType: PostType;
}

let nextUserId = 1;
let users: User[] = [];

const createUser = (email: string, password: string) => {
  const newUser: User = {
    userId: nextUserId,
    email,
    password,
    post: [],
  }
  users.push(newUser)
}

const getUsers = () => {
  console.log(users);
}

enum PostType {
  Text,
  Image,
  Link,
}

createUser("b1@xgmi", "pass123");
getUsers();