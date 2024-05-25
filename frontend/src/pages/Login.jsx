import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AuthContext from '../components/context/AuthContext'
import axios from "axios"

const Login = () => {
  let navigate=useNavigate()
  let store=useContext(AuthContext);


  let emailRef=useRef()
  let passwordRef=useRef()
  async function handleSubmit(e){
    e.preventDefault();
    let obj={
      email:emailRef.current.value,
      password:passwordRef.current.value   
     }
    //  let res=await axios.post('http://localhost:7070/login',obj)
   let req = await fetch('http://localhost:8080/backendApiLogin',{
          method:'POST',
         headers:{
               "Content-Type":"application/json"
          },
           body:JSON.stringify(obj)
        })
     let data=await req.json()
      //  console.log(res)
      console.log(data)
  if(data.success===true){
    localStorage.setItem('userDetails',JSON.stringify(data.userDetails))   // userDetails here key and res value
    store.setuserDetails({
      name:data.userDetails.name,
      _id:data.userDetails._id,
      login:true
    })
    navigate('/')
     toast.success(data.msg)
  }

  else {
    toast.error(data.msg)
   }
  }
  

  return (
    <form onSubmit={handleSubmit} className='loginPage'>
        <h1>Login Page</h1>
    
        <label htmlFor="">Email</label>
        <input ref={emailRef} type="email" />
        <label htmlFor="">Password</label>
        <input ref={passwordRef} type="password" />
         <p>Not a user?  <Link to="/register">Sinup?</Link>   </p>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Login
