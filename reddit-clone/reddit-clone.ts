class User {
  userId: number;
  posts: Post[] = [];
}

class Post {
  postId: number;
  postType: PostType;
}

enum PostType {
  Text,
  Image,
  Link,
}