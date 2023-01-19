var nextUserId = 1;
var users = [];
var createUser = function (email, password) {
    var newUser = {
        userId: nextUserId,
        email: email,
        password: password,
        post: []
    };
    users.push(newUser);
};
var getUsers = function () {
    console.log(users);
};
var PostType;
(function (PostType) {
    PostType[PostType["Text"] = 0] = "Text";
    PostType[PostType["Image"] = 1] = "Image";
    PostType[PostType["Link"] = 2] = "Link";
})(PostType || (PostType = {}));
createUser("b1@xgmi", "pass123");
getUsers();
