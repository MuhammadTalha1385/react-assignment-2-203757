// import { React, useState } from 'react';

// export default function SignUp() {

//   let user = { fullName: "", email: "", password: "" };
//   const [state, setState] = useState(user);
//   let { fullName, email, password } = state;
//   // let users = [];

//   const handleChange = (e) => {
//     setState((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const registerUserButton = (e) => {
//     e.preventDefault();

//     let existingUsers = JSON.parse(localStorage.getItem("users"))|| [];
//     console.log('users from locals :>> ', existingUsers);
//     // if (!fullName || !email || !password) {
//     //   alert("Complete Requirements ");
//     //   return;
//     // }

//     if (fullName.length < 3  ) {
//       return alert("FullName characters should be 3");
//     }
//     if (password.length < 8) {
//       return alert("Minimum length of password should be 8 ");
//     }

//     fullName = fullName.trim();
//     email = email.trim();

//     let userData = { fullName, email, password };
//     const findingUser = existingUsers.find((user) => user.email === email);

//     if (findingUser) {
//       return alert("User Already Exists");
//     }

//     const updatedUsers = [...existingUsers, userData];

//     localStorage.setItem("users", JSON.stringify(updatedUsers));

//   }

//   const loginUserButton = (e) => {
//     const { email } = state;
    
//     e.preventDefault();
//     let existingUsers = JSON.parse(localStorage.getItem('users')) || [];

//     // let userData = {email, password };
//     const checkUser = existingUsers.find((user)=> user.email === email)
//     // console.log(Array.isArray(existingUsers));
    
//         if (checkUser) {
//           alert("User Logged In");
//         } else {
//           alert("Register first");
//         }
    
//     // const userLoggedIn =[...existingUsers,userData]
//     // localStorage.setItem("users",JSON.stringify("users"))
// }
//   return (
//     <>
//       <p>fullName: {state.fullName}</p>
//       <p>Email: {state.email}</p>
//       <p>Password: {state.password}</p>

//       <div className="container w-25 my-5">
//         <div className="row ">
//           <div className="card text-center ">

//             <div className="col">
//               <h1>Register</h1>
//             </div>

//             <div className=" justify-content-center">
//               <form onSubmit={registerUserButton} >

//                 <div className="row pt-2">
//                   <div className="col">
//                     <input type="text" className="form-control" name="fullName" onChange={handleChange} placeholder="Enter Your Full Name" /><br />
//                   </div>
//                 </div>

//                 <div className="row pt-2 ">
//                   <div className="col">
//                     <input type="email" className="form-control" name="email" onChange={handleChange} placeholder="Enter Your Email" /><br />
//                   </div>
//                 </div>

//                 <div className="row pt-2">
//                   <div className="col">
//                     <input type="password" className="form-control" name="password" onChange={handleChange} placeholder="Enter Password" /><br />
//                     <button className="w-2 m-2 text-white bg-primary" onClick={handleChange}>Register</button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container w-25 my-5">
//         <div className="row ">
//           <div className="card text-center ">

//             <div className="col-6 ">
//               <h1  className='text-center' >Login</h1>
//             </div>

//             <div className="col justify-content-center">
//               <form >
              
//                 <div className="row pt-2">
//                   <div className="col">
//                     <input type="email" className="form-control" name="fullName"  placeholder="Enter Your Email" /><br />
//                   </div>
//                 </div>
                
//                 <div className="row pt-2">
//                   <div className="col">
//                     <input type="password" className="form-control" name="password"  placeholder="Enter Your Password " /><br />
//                      <p className='p-6'>Don't have an account </p> 
//                     <button className="w-2 m-2 text-white bg-primary" onClick={loginUserButton}>Login</button>
//                   </div>
//                 </div>

//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )

// }