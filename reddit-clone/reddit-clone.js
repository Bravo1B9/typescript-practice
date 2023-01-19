var PostType;
(function (PostType) {
    PostType[PostType["Text"] = 0] = "Text";
    PostType[PostType["Image"] = 1] = "Image";
    PostType[PostType["Link"] = 2] = "Link";
})(PostType || (PostType = {}));
var nextUserId = 1;
var nextPostId = 1;
var users = [];
var createUser = function (email, password) {
    var newUser = {
        userId: nextUserId,
        email: email,
        password: password,
        posts: []
    };
    users.push(newUser);
    nextUserId++;
};
var createPost = function (userId, title, postType) {
    var newPost = {
        postId: nextPostId,
        title: title,
        postType: postType
    };
    for (var i = 0; i < users.length; i++) {
        if (users[i].userId === userId) {
            users[i].posts.push(newPost);
        }
    }
    nextPostId++;
};
var getPostsByUserId = function (userId) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].userId === userId) {
            console.log(users[i].posts);
        }
    }
};
var getUsers = function () {
    console.log(users);
};
createUser("b1@xgmi", "pass123");
getUsers();
createPost(1, "First post", 0);
getPostsByUserId(1);
