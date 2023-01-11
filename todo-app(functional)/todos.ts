interface Task {
  id: number;
  description: string;
}

const addTodo = (id: number, description: string) => {
  const newTodo: Task = {id, description};
  return newTodo;
}

console.log(addTodo(1,"hello"));