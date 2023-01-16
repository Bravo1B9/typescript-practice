var Todo = /** @class */ (function () {
    function Todo(id, title) {
        var _this = this;
        this.subTasks = [];
        this.nextSubTaskId = 1;
        this.numSubTasksCompleted = 0;
        this.addSubTask = function (description) {
            var newSubTask = new SubTask(_this.nextSubTaskId, description);
            _this.subTasks.push(newSubTask);
            _this.nextSubTaskId++;
        };
        this.getSubTaskById = function (id) {
            for (var i = 0; i < _this.subTasks.length; i++) {
                if (_this.subTasks[i].id == id) {
                    console.log(_this.subTasks[i]);
                }
            }
        };
        this.completeSubTask = function (id) {
            for (var i = 0; i < _this.subTasks.length; i++) {
                if (_this.subTasks[i].id == id) {
                    _this.subTasks[i].completed = true;
                    _this.numSubTasksCompleted++;
                }
            }
        };
        this.id = id;
        this.title = title;
        this.completed = false;
    }
    return Todo;
}());
var SubTask = /** @class */ (function () {
    function SubTask(id, description) {
        this.id = id;
        this.description = description;
        this.completed = false;
    }
    return SubTask;
}());
var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    User.prototype.addTodo = function (todo) {
        todos.push(todo);
    };
    User.prototype.getTodos = function () {
        console.log(this.todos);
    };
    return User;
}());
var todos = [];
var users = [];
var nextTodoId = 1;
var nextUserId = 1;
var createUser = function (name) {
    var newUser = new User(nextUserId, name);
    users.push(newUser);
};
/*
  Todo operations
*/
var createTodo = function (title) {
    var newTodo = new Todo(nextTodoId, title);
    todos.push(newTodo);
    nextTodoId++;
};
var getTodoById = function (id) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            console.log(todos[i]);
        }
    }
};
var getAllTodos = function () {
    console.log(todos);
};
var updateTodoTitleById = function (id, newTitle) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].title = newTitle;
        }
    }
};
var removeTodoById = function (id) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(todos.indexOf(todos[i]), 1)[0];
            todos.pop();
        }
    }
};
/*
  SubTask operations
*/
var addSubTaskByTodoId = function (id, description) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].addSubTask(description);
        }
    }
};
var getSubTaskByIds = function (todoId, subTaskId) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == todoId) {
            todos[i].getSubTaskById(subTaskId);
        }
    }
};
var getAllSubTasks = function (todoId) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == todoId) {
            console.log(todos[i].subTasks);
        }
    }
};
var updateSubTaskByIds = function (todoId, subTaskId, newDescription) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == todoId) {
            for (var j = 0; j < todos[i].subTasks.length; j++) {
                if (todos[i].subTasks[j].id == subTaskId) {
                    todos[i].subTasks[j].description = newDescription;
                }
            }
        }
    }
};
var completeSubTask = function (todoId, subTaskId) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == todoId) {
            todos[i].completeSubTask(subTaskId);
            if (todos[i].numSubTasksCompleted == todos[i].subTasks.length) {
                todos[i].completed = true;
            }
        }
    }
};
var removeSubTaskByIds = function (todoId, subTaskId) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == todoId) {
            for (var j = 0; j < todos[i].subTasks.length; j++) {
                if (todos[i].subTasks[j].id == subTaskId) {
                    todos[i].subTasks.splice(todos[i].subTasks.indexOf(todos[i].subTasks[j], 1)[0]);
                    todos[i].subTasks.pop();
                }
            }
        }
    }
};
