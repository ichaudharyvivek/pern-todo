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
        className='btn btn-primary w-75 ml-auto mr-auto d-block'
        data-toggle='modal'
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      {/* Bootstrap Modal */}
      <div
        className='modal'
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className='modal-dialog'>
          {/* Modal heading */}
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Edit ToDo</h4>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            {/* Modal body */}
            <div className='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Modal footer */}
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-success'
                data-dismiss='modal'
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>

              <button
                type='button'
                className='btn btn-danger'
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
