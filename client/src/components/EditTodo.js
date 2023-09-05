import React, { Fragment, useState } from 'react';

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { todo_id: todo.todo_id, description };
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/todo`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(body),
        }
      );

      // Refresh the page after updating it
      window.location = '/';
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      {/* HTML Edit button */}
      <button
        type='button'
        class='btn btn-primary w-75 ml-auto mr-auto d-block'
        data-toggle='modal'
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      {/* Bootstrap Modal */}
      <div
        class='modal'
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div class='modal-dialog'>
          {/* Modal heading */}
          <div class='modal-content'>
            <div class='modal-header'>
              <h4 class='modal-title'>Edit ToDo</h4>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            {/* Modal body */}
            <div class='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Modal footer */}
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-success'
                data-dismiss='modal'
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>

              <button
                type='button'
                class='btn btn-danger'
                data-dismiss='modal'
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
