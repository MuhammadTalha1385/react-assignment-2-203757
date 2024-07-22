import React from 'react';
import { useState } from 'react';

function TodoModal({ todo, saveHandler, editing }) {
  const [title, setTitle] = useState(todo.title);
  const [location, setLocation] = useState(todo.location);
  const [description, setDescription] = useState(todo.description);
  const [date, setDate] = useState(todo.date);

  const buttonClickHandler = () => {
    if (editing) {
      const updatedTodo = {
        title,
        location,
        description,
        date
      };

      saveHandler(updatedTodo);
    } else {
      saveHandler(todo);
    }
  }

  return (
    <>
      <div className="modal fade" id="todoModal" tabIndex="-1" aria-labelledby="todoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="todoModalLabel">{editing ? "Update Todo" : "Delete Todo"}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              {!editing ? <p>Are you sure, you want to delete this todo item?</p> :
                <div>
                  <div className="col">
                    <label htmlFor="title"><h5 className="text-primary my-2">Title</h5></label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" placeholder='Title' required className='form-control' />
                  </div>

                  <div className="col">
                    <label htmlFor="description"><h5 className="text-primary my-2">Description</h5></label>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder='Description' required id='description' className='form-control' />
                  </div>

                  <div className="col">
                    <label htmlFor='location'><h5 className="text-primary my-2">Location</h5></label>
                    <input value={location} onChange={(e) => setLocation(e.target.value)}  type="text" name="location" placeholder='Location' id='location' className='form-control' />
                  </div>

                  <div className="col">
                    <label htmlFor="date"><h5 className="text-primary my-2">Date</h5></label>
                    <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" id='date' className='form-control my-2' />
                  </div>
                </div>}
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className={editing ? "btn btn-primary" : "btn btn-danger"}  onClick={buttonClickHandler}>{editing ? "Update" : "Yes"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoModal;