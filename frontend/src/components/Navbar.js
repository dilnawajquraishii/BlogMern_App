import React, { useContext } from 'react'
import {Form, Link, useNavigate} from "react-router-dom"
import AuthContext from './context/AuthContext'
import Login from '../pages/Login'
import { CiSettings } from "react-icons/ci";
// import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  let store=useContext(AuthContext)
  let navigate=useNavigate()
  let  handlelogout=()=>{
    localStorage.removeItem('userDetail')
    store.setuserDetails({
      name:"",
      _id:"",
      Login:false
    })
    navigate('/login')
    
  }
 
  

  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Blog Application</Link>
  <li className="nav-item active"style={{listStyle:"none"}}>
        <Link className="nav-link" to="/">Home</Link>
      </li>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul className="navbar-nav m-auto" >
  <div className="dropdown drp">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Users
  </button>
  <ul className="dropdown-menu">  
  

    {   !store.userDetails.login &&<li><Link className="dropdown-item" to="/login">Login</Link></li>}  
{ !store.userDetails.login &&<li><Link className="dropdown-item" to="/register">Signup</Link></li>}
{  store.userDetails.login &&<li onClick={handlelogout}><Link className="dropdown-item" to="">Logout</Link></li>}
  </ul>
</div>


      {/* <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link" to="/yourpost" style={{marginLeft:"1100px"}}>Your Post</Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link" to="/">Get Alalll  Post</Link>
      </li> */}
      {/* .. */}
    
      

     
    
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
<div className='setting-icons'style={{display:"flex",flexDirection:"row",width:"25px",marginRight:"50px",justifyContent:"space-evenly"}}> 
<li className="nav-item active" style={{listStyle:"none"}}>
  <CiSettings style={{color:"",fontWeight:"bold"}} />

        <Link className="nav-link" to="/setting">Setting</Link>
      </li>
</div>
</nav>

    </div>
  )
}

export default Navbar
