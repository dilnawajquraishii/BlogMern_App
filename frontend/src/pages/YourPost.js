import React, { useContext, useEffect, useRef, useState } from 'react'
import AuthContext from '../components/context/AuthContext'
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const YourPost = () => {
  // const [yourpost, setyourpost] = useState();
  let store=useContext(AuthContext)   
  console.log(store)
  let id=store.userDetails._id
    console.log(id)
  const [data, setdata] = useState([]);
let singleuserallpost=async()=>{

  let res=await  fetch(`http://localhost:8080/post/userPosts/${id}`)
  let data=await res.json()
  console.log(data)
  console.log(data.allpost)
  setdata(data.allpost)

}  
useEffect(()=>{
  singleuserallpost()
},[])


// for delete item
const handleDelete=async(ans)=>{
  console.log(ans)
  let alertAns=window.confirm('are you sure for delete your post')  // alert sms
  console.log(alertAns)
  if(alertAns){
    let res=await fetch(`http://localhost:8080/post/delete/${ans._id}`,{
      method:"DELETE"
    })
    let data=await res.json()
    console.log(data)
    singleuserallpost()  // main function call for use dependency

  }
}



// i am working on edit post
// hidden and show form
const [showform, setshowform] = useState(false);

let titleRef=useRef()
let descriptionRef=useRef()

const [postid, setpostid] = useState('');
const handleedit=(ans)=>{
console.log(ans)
setpostid(ans._id)
setshowform(true)
}
const EditSubmit=async(e)=>{
  e.preventDefault()
  let obj ={
   title: titleRef.current.value,
    description:descriptionRef.current.value
  }
  console.log(obj)
  let res=await fetch(`http://localhost:8080/post/update/${postid}`,{
    method:'put',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(obj)
  })
  let data=res.json()
  singleuserallpost()  
  setshowform(false)  // after submit form hide 
}


  return (
  <>
    <div className='row  mt-5 'style={{display:"flex",justifyContent:"space-evenly"}}>
    {data.map((ele)=>{
    return <div className="card" style={{width: '18rem'}}>
      {/* if I want to select that data onclick or select then use this function ==  {onclick()=>handleDelete(ele)} */}
      <AiFillDelete onClick={()=>handleDelete(ele)} className='deleteIcon'  />
      <FaEdit onClick={()=>handleedit(ele)} className='deleteIcon' style={{marginRight:"50px"}} /> 
  <img  style={{width:"18rem"}} src={ele.image} className="card-img-top" alt="..." />
  <div className="card-body">
   
    <h5 className="card-title">Title:{ele.title}</h5>
    <h5 className="card-title">Description:{ele.description}</h5>
    <a href="#" className="btn btn-primary">Button</a>
  </div>
</div>
  
    
})}

{/* this is editing form  showform && mean form hide bydefault */}
  {showform && <div className='col-md-4 p-4 edit-form '>
  <button onClick={()=>setshowform(false)}  type='button' className='btn-close bg-white aria-label="close'></button>
    <form  className=''>
    
   
  <div className="mb-3  ">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input ref={titleRef} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <textarea  ref={descriptionRef} type="text" className="form-control" id="exampleInputPassword1" />
  </div>
 
  <button onClick={EditSubmit} type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>}
    </div>
</>

  )
}


export default YourPost


