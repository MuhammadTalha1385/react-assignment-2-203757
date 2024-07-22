import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  let navigate = useNavigate();
  let user = { fullName: "", email: "", password: "" };
  const [state, setState] = useState(user);
  let { fullName, email, password } = state;
  // let users = [];

  const handleChange = (e) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const registerUserButton = (e) => {
    e.preventDefault();

    let existingUsers = JSON.parse(localStorage.getItem("users"))|| [];
    console.log('users from locals :>> ', existingUsers);
    // if (!fullName || !email || !password) {
    //   alert("Complete Requirements ");
    //   return;
    // }

    if (fullName.length < 3  ) {
      return alert("FullName characters should be 3");
    }
    if (password.length < 8) {
      return alert("Minimum length of password should be 8 ");
    }

    fullName = fullName.trim();
    email = email.trim();

    let userData = { fullName, email, password };
    const findingUser = existingUsers.find((user) => user.email === email);

    if (findingUser) {
      return alert("User Already Exists");
    }

    let  updatedUsers = [...existingUsers, userData];

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("User registered successfully, Now you can login");
    navigate('/login');
  }
  return (
    <>
      {/* <p>fullName: {fullName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p> */}
      <div className="container w-25 my-5">
        <div className="row ">
          <div className="card text-center ">

            <div className="col">
              <h1>Register</h1>
            </div>

            <div className=" justify-content-center">
              <form onSubmit={registerUserButton} >

                <div className="row pt-2">
                  <div className="col">
                    <input type="text" className="form-control" name="fullName" onChange={handleChange} placeholder="Enter Your Full Name" /><br />
                  </div>
                </div>

                <div className="row pt-2 ">
                  <div className="col">
                    <input type="email" className="form-control" name="email" onChange={handleChange} placeholder="Enter Your Email" /><br />
                  </div>
                </div>

                <div className="row pt-2">
                  <div className="col">
                    <input type="password" className="form-control" name="password" onChange={handleChange} placeholder="Enter Password" /><br />
                    <button className="w-2 m-2 text-white bg-primary" onClick={registerUserButton}>Register</button>
                  </div>
                </div>
                    <p>Already Have An Account?<Link to={"/login"}>Login</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
