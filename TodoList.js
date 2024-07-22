import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TodoModal from './TodoModal';

function TodoList() {
  const [existingTodos, setExistingTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('Todos'));
      setExistingTodos(todos);
    }, []
  );

  const handleClick = (todo, editing) => {
    setCurrentTodo(todo);
    setIsEditing(editing);
    setShowModal(true);
  }

  const updateOrDeleteTodo = (todoItem) => {
    let updatedTodos;

    if (isEditing) {
      console.log("Updating", todoItem.title);
      updatedTodos = existingTodos.map((todo) =>
        todo.user_id === todoItem.user_id ? { ...todo, ...todoItem } : todo
      );

      setExistingTodos(updatedTodos);
    } else {
      console.log("Deleting", todoItem.title);
      updatedTodos = existingTodos.filter((todo) => todo.user_id !== todoItem.user_id);

      setExistingTodos(updatedTodos);
    }

    localStorage.setItem('Todos', JSON.stringify(updatedTodos));
    setCurrentTodo(null);
    setShowModal(false);
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col d-flex justify-content-end mb-3">
            <button className="btn btn-primary" onClick={() => navigate("/todo")}>Add Todo</button>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        {existingTodos && existingTodos.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr#</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col">Description</th>
                <th scope="col">Location</th>
                <th scope="col">Date</th>
                <th scope="col">Date_Created</th>
                <th scope="col">User_Id</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {existingTodos.map((todo, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td colSpan="1">{todo.title}</td>
                    <td colSpan="1">{todo.status}</td>
                    <td colSpan="1">{todo.description}</td>
                    <td colSpan="1">{todo.location}</td>
                    <td colSpan="1">{todo.date}</td>
                    <td colSpan="1">{todo.dateCreated}</td>
                    <td colSpan="1">{todo.user_id}</td>
                    <td colSpan="1">
                      <button className="badge text-bg-warning border-0 m-1" data-bs-toggle="modal" data-bs-target="#todoModal" onClick={()=>handleClick(todo, true)}>Edit</button>
                      <button className="badge text-bg-danger border-0" data-bs-toggle="modal" data-bs-target="#todoModal" onClick={()=> handleClick(todo, false)}>Delete</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>) : <h3 className="text-primary">You don't have any todos right now</h3>
        }
      </div>

      {showModal && (<TodoModal todo={currentTodo} saveHandler={updateOrDeleteTodo} editing={isEditing} />)}
    </>
  );
}

export default TodoList;