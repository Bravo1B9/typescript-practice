class Todo {
  id: number;
  title: string;
  completed: boolean;
  subTasks: SubTask[] = [];
  nextSubTaskId: number = 1;
  numSubTasksCompleted: number = 0;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.completed = false;
  }

  addSubTask = (description: string) => {
    const newSubTask = new SubTask(this.nextSubTaskId, description);
    this.subTasks.push(newSubTask);
    this.nextSubTaskId++;
  }

  getSubTaskById = (id: number) => {
    for (let i = 0; i < this.subTasks.length; i++) {
      if (this.subTasks[i].id == id) {
        console.log(this.subTasks[i]);
      }
    }
  }

  completeSubTask = (id: number) => {
    for (let i = 0; i < this.subTasks.length; i++) {
      if (this.subTasks[i].id == id) {
        this.subTasks[i].completed = true;
        this.numSubTasksCompleted++;
      }
    }
  }
}

class SubTask {
  id: number;
  description: string;
  completed: boolean;

  constructor(id: number, description: string) {
    this.id = id;
    this.description = description;
    this.completed = false;
  }
}

class User {
  id: number;
  name: string;
  todos: Todo[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  addTodo(todo: Todo) {
    todos.push(todo);
  }
}

let todos: Todo[] = [];
let users: User[] = [];

let nextTodoId: number = 1;
let nextUserId: number = 1;

const createUser = (name: string) => {
  const newUser = new User(nextUserId, name);
  users.push(newUser);
}

/*
  Todo operations
*/
const createTodo = (title: string) => {
  const newTodo = new Todo(nextTodoId, title);
  todos.push(newTodo);
  nextTodoId++;
}

const getTodoById = (id: number) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      console.log(todos[i]);
    }
  }
}

const getAllTodos = () => {
  console.log(todos);
}

const updateTodoTitleById = (id: number, newTitle: string) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].title = newTitle;
    }
  }
}

const removeTodoById = (id: number) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos.splice(todos.indexOf(todos[i]), 1)[0];
      todos.pop();
    }
  }
}

/*
  SubTask operations
*/
const addSubTaskByTodoId = (id: number, description: string) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].addSubTask(description);
    }
  }
}

const getSubTaskByIds = (todoId: number, subTaskId: number) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == todoId) {
      todos[i].getSubTaskById(subTaskId);
    }
  }
}

const getAllSubTasks = (todoId: number) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == todoId) {
      console.log(todos[i].subTasks);
    }
  }
}

const updateSubTaskByIds = (todoId: number, subTaskId: number, newDescription: string) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == todoId) {
      for (let j = 0; j < todos[i].subTasks.length; j++) {
        if (todos[i].subTasks[j].id == subTaskId) {
          todos[i].subTasks[j].description = newDescription;
        }
      }
    }
  }
}

const completeSubTask = (todoId: number, subTaskId: number) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == todoId) {
      todos[i].completeSubTask(subTaskId);
      if (todos[i].numSubTasksCompleted == todos[i].subTasks.length) {
        todos[i].completed = true;
      }
    }
  }
}

const removeSubTaskByIds = (todoId: number, subTaskId: number) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == todoId) {
      for (let j = 0; j < todos[i].subTasks.length; j++) {
        if (todos[i].subTasks[j].id == subTaskId) {
          todos[i].subTasks.splice(todos[i].subTasks.indexOf(todos[i].subTasks[j], 1)[0]);
          todos[i].subTasks.pop();
        }
      }
    }
  }
}