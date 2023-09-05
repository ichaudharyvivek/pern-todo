import React, { Fragment, useState, useEffect } from 'react';
import EditTodo from './EditTodo';

const ListTodos = () => {
  const [todoList, setTodoList] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/todo`
      );

      const { data } = await response.json();

      setTodoList(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (todo_id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/todo/${todo_id}`,
        {
          method: 'DELETE',
        }
      );

      // Reset the todo lists
      setTodoList(todoList.filter((todo) => todo.todo_id !== todo_id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <table className='table table-bordered w-75 ml-auto mr-auto mt-5'>
        <thead>
          <tr>
            <th className='w-75'>Todo List</th>
            <th className='w-25'>Edit</th>
            <th className='w-25'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
