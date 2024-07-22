import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();
  let existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  let user = { fullName: "", email: "", password: "" };
  const [state, setState] = useState(user);
  let {  email, password } = state;

  const handleChange = (e) => {
    setState(  (prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    })
    );
    
  }
  const loginUserButton = (e) => {
    e.preventDefault();
    console.log(email);
    // let userData = {email, password };
    const checkUser = existingUsers.find((user) => user.email === email && user.password === password)
    console.log(checkUser);
    // console.log(Array.isArray(existingUsers));
    
        if (checkUser) {
          navigate('/home');
          alert("User logged in");
        } else {
          alert("Register first");
        }
  };

  
  return (
    <>
      <div className="container w-25 py-5">
        <div className="row ">
          <div className="card text-center ">

            <div className="col-12 ">
              <h1  className='text-center' >Login</h1>
            </div>

            <div className="col justify-content-center">
              <form onSubmit={loginUserButton} >
              
                <div className="row pt-2">
                  <div className="col-12">
                    <input onChange={handleChange}  type="email" className="form-control" name="email"  placeholder="Enter Your Email" /><br />
                  </div>
                </div>
                
                <div className="row pt-2">
                  <div className="col-12">
                    <input onChange={handleChange}  type="password" className="form-control" name="password"  placeholder="Enter Your Password " /><br />
                    <p> <Link to="/Forget"> <b className='text-black '>Forget Password?? </b></Link></p>

                    <div className="container">
                      <p className='p-6'>Don't have an account<Link to="/register"> Register Your Account</Link></p> 
                    </div>
                  </div>
                    <button className="w-25 m-2 text-white bg-primary" onClick={loginUserButton}>Login</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
