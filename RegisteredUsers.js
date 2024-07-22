import React from 'react';
import { useNavigate } from 'react-router-dom';

function RegisteredUsers() {
  let navigate = useNavigate();
  let existingUsers = JSON.parse(localStorage.getItem("users"));
  console.log('users from locals :>> ', existingUsers);

  return (
    <>
      <div className="container mt-3">
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-primary" onClick={() => navigate("/register")}>
            Add User
          </button>
        </div>
      </div>

      <div className="container mt-3">
        { existingUsers && existingUsers.length > 0 ? (
          <table className="table mx-2">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
              
            <tbody>
              {
                existingUsers.map((user, i) => {
                  return (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>{user.fullName}</td>
                      <td>{user.email}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>) : <h3 className="text-primary">You don't have any registered users right now</h3>
        }
      </div>
    </>
  );
};

export default RegisteredUsers;
         