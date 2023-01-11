var addTodo = function (id, description) {
    var newTodo = { id: id, description: description };
    return newTodo;
};
console.log(addTodo(1, "hello"));
