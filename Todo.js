import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const Todo = () => {
  const titleRef = useRef(null);
  const locationRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);

  let navigate = useNavigate();

  const addNewTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      title: titleRef.current.value,
      location: locationRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
      status: "active",
      dateCreated: new Date().toISOString(),
      user_id: Math.floor(Math.random() * 1000000)
    };

    let existingTodos = JSON.parse(localStorage.getItem("Todos")) || [];

    const todoFound = existingTodos.find((todo) => todo.title === newTodo.title);
    if (todoFound) {
      return alert("Todo item already exists !!");
    }

    let updatedTodos = [...existingTodos, newTodo];
    localStorage.setItem("Todos", JSON.stringify(updatedTodos));

    titleRef.current.value = '';
    locationRef.current.value = '';
    descriptionRef.current.value = '';
    dateRef.current.value = '';

    navigate('/todoList');
  }
  
  return (
    <>
      <div className="container w-50 border rounded mt-4 pb-3">
        <div className="row">
          <div className="col">
            <h1 className='text-center text-primary'>New Todo</h1>
            <hr />
          </div>

          <form onSubmit={addNewTodo}>
            <div className="col">
              <label htmlFor="title"><h5 className="text-primary my-2">Title</h5></label>
              <input ref={titleRef} type="text" name="title" id="title" placeholder='Title' required className='form-control' />
            </div>

            <div className="col">
              <label htmlFor="description"><h5 className="text-primary my-2">Description</h5></label>
              <input ref={descriptionRef} type="text" name="description" placeholder='Description' required id='description' className='form-control' />
            </div>

            <div className="col">
              <label htmlFor='location'><h5 className="text-primary my-2">Location</h5></label>
              <input ref={locationRef} type="text" name="location" placeholder='Location' id='location' className='form-control' />
            </div>

            <div className="col">
              <label htmlFor="date"><h5 className="text-primary my-2">Date</h5></label>
              <input ref={dateRef} type="date" name="date" id='date' className='form-control my-2' />

              <button className='btn btn-primary mt-2 w-100' type='submit'>Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Todo;