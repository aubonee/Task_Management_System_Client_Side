import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import GoogleLogin from '../socialLogin/GoogleLogin';


const Login = () => {

    const[user,setUser] =useState(null); 

    const {signIn} =useContext(AuthContext);
    const location = useLocation();
      const navigate = useNavigate();
      console.log(' login page', location);
  
      const handleLogin = e =>{
        e.preventDefault();
        const form =new FormData(e.currentTarget);
      const email=form.get('email');
      const password=form.get('password');
    console.log(email,password);
      signIn(email,password)
     
      .then(result=>{
          console.log(result.user)
          Swal.fire({
           icon: 'success',
           title: 'Login Succesful',
           showConfirmButton: false,
           timer: 1500
         })
            
         // navigate after login
         navigate(location?.state ? location.state : '/');
      })
      .catch(error=>{
        console.error(error)
        Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Something went wrong!',
        
       })
      }
      )
}
    return (
        <div className=' flex flex-col justify-center items-center'>
   
        <div className="hero min-h-screen ">
<div className="hero-content flex-col ">
<div className="text-center lg:text-left">
 

</div>
<div data-aos="fade-down"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000" className="card mx-24 flex-shrink-0 w-full border-2 border-yellow-500">
  <form  onSubmit={handleLogin} className="card-body ">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" required />
     
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-[#F7B32B] text-white">Login</button>

      <div className='flex items-center justify-center my-2'><GoogleLogin></GoogleLogin></div>
      
    </div>
    {/* <div className='flex items-center justify-center my-2'><GoogleLogin></GoogleLogin></div> */}
  </form>
  <div className='text-center mb-5'><p>Dont have an account?</p> <span className='text-[#F7B32B] font-bold'> <Link to="/signup">Register</Link></span> </div>
</div>
</div>
</div>



    </div>
    );
};

export default Login;