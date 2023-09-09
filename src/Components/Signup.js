import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const[email,setemail]=useState()
  const[password,setpassword]=useState()
  const navigate = useNavigate()
  const data={
    email:email,
    password:password
  }
  const handlelogin=()=>{
    
    if(data.email===""){
      return toast.error("enter your mailid")
    }
    if(data.password===""){
      return toast.error("enter your password")
    }
    if(!checkemail(data.email)){
      return toast.error("enter vailid emailid")
    }
    if(!checkpassword(data.password)){
      return toast.error("enter vailid password")
    }
    toast.success("login successfully")
    console.log(data);
  }
  function checkpassword(str) {
        var re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return re.test(str);
    }

    function checkemail(str) {
        return /^\S+@\S+\.\S+$/.test(str);

    }
  return (
    <div className='container'>
    <div className='col'>
      <div className='mt-2'>
        <h1>Registration</h1>
      </div>
    </div>
    <div className='border p-4 m-5 '>
      <form>
      <div>
        <label for="exampleInputEmail1" class="form-label">Username</label>
        <input type="text" 
        class="form-control" 
        id="exampleInputEmail1"
        placeholder='xyz'
        onChange={(event)=>setpassword(event.target.value)}
        aria-describedby="emailHelp" />
        </div>
        <br/>
        <div className='m-auto '>
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" 
        class="form-control"
         id="exampleInputEmail1" 
         placeholder='xyz@gmail.com'
         onChange={(event)=>setemail(event.target.value)}
         aria-describedby="emailHelp" />
        </div>
        <br/>
        <div>
        <label for="exampleInputEmail1" class="form-label">Password</label>
        <input type="password" 
        class="form-control" 
        id="exampleInputEmail1"
        placeholder='12345677'
        onChange={(event)=>setpassword(event.target.value)}
        aria-describedby="emailHelp" />
        </div>
        
        <div className='mt-3'>
         <input type='checkbox'/><label>I agree to the terms & conditions</label>
        </div>
        <Link to={'/todo'}>
        <div className='mt-3'>
           <button className='btn btn-sm btn-outline w-100 bg-warning p-2'
            onClick={()=>handlelogin()}>Register</button>
        </div>
        </Link>
        <div className=' m-4'>
          <p>Already have an account?</p>
        </div>
        <Link to={'/'}>
       <button className=' btn btn-sm btn-outline w-100 p-2 bg-warning'>
           Login
           </button>
        </Link>
      </form>
    </div>
    <Toaster/>
  </div>
  )
}

export default Signup