var todos = ['item1', 'Item2', 'Item3'];

function displayTodos() {
  console.log('My Todos:', todos);
}

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
  }

  function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
  }

function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
