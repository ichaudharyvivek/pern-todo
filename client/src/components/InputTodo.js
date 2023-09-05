import React, { Fragment, useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };

      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/todo`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(body),
        }
      );

      window.location = '/'; // Refreshes the page to reset input field
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <h1 className='text-center mt-5'>PERN Todo List</h1>
      <form
        className='d-flex w-50 mx-auto mt-5 justify-content-between'
        onSubmit={onSubmitForm}
      >
        <input
          type='text'
          className='form-control mr-3'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Write your todo here...'
        />
        <button className='btn btn-success'>Add &#43;</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
