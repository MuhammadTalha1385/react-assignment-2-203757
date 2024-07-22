import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';

export default function Correction() {
  const [email, setEmail] = useState('');

    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  let navigate = useNavigate();
  // let { email } = user
  // console.log(user);
  

  const handleChange = (e) => {
    e.preventDefault();
        setEmail(e.target.value );
  };  
  
  const forgotButton = (e) => {
    e.preventDefault();
    let findingForgot = existingUsers.find((user) => user.email === email);
    if (findingForgot) {
      navigate("/reset");
    }

    //   alert("kcji")
    // if ()
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Reset Email Password</h1>
//         <div className="container w-25 my-5">
//           <div className="row">
//             <div className="col">
//               <div className="card ">

//                 <div className="col">
//                   <h4 className='text-center'>Reset Your Email Or Password there</h4>
//                 </div>
              
//                 <div className="container">
//                   <form onSubmit={''}>
//                     {/* <div className="row my-3">
//                     <div className="col">
//                       <input type="Email"   className="form-control" placeholder ="Enter Your Email" name="email" />
//                     </div>
//                   </div> */}

//                     <div className="row py-2">
//                       <div className="col">
//                         <input type="Email" onChange={handleChange} className="form-control " placeholder="Enter Your Email" name="email" />
//                         <button className='w-50 text-white bg-primary ms-5  my-2 justify-content-center' onClick={''}>Register Again</button>
//                       </div>
//                     </div>

//                     <div className="row py-2">
//                       <div className="col">
//                         {/* <input type="password" onChange={handleChange} className="form-control " placeholder="Enter Your Email" name="password" /> */}
//                         <p>reset Page</p>
//                         <button className='w-50 text-white bg-primary ms-5  my-2 justify-content-center' onClick={forgotButton}>Register Again</button>
//                       </div>
//                     </div>

//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
          </div>
        </div>
      </div>
    </>
  )
}
