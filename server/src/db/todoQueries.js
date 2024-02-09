exports.todoQueries = {
  getAllTodos: 'SELECT * FROM todo_lists',
  getTodoById: 'SELECT * FROM todo_lists WHERE todo_id=$1',
  insertTodo: 'INSERT INTO todo_lists(description) VALUES($1) RETURNING *',
  updateTodoById: 'UPDATE todo_lists SET description=$1 WHERE todo_id=$2 RETURNING *', // prettier-ignore
  deleteTodoById: 'DELETE FROM todo_lists WHERE todo_id=$1 RETURNING *',
};
