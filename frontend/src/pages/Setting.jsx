import React, { useContext, useRef } from 'react'
import AuthContext from '../components/context/AuthContext'

const Setting = () => {
    let store=useContext(AuthContext)
    console.log(store.userDetails._id)
    let id=store.userDetails._id
    let nameRef=useRef()
    let emailRef=useRef()
    // console.log(nameRef.current.value)
    async function handlesubmit(e){
  e.preventDefault()
let obj={
    name:nameRef.current.value,
    password:emailRef.current.value
}

console.log(obj)

let updatadata=await  fetch(`http://localhost:8080/update/${id}`,{
  method:"PUT",
  headers: {
    "Context-Type":"application/json"
  },
    body:JSON.stringify(obj)

})
let res=await updatadata.json()
console.log(res)

    }



  return (
    <div>
      <form>
        <label htmlFor=''>
            Name:
        </label>
        <input ref={nameRef} type='text'></input>
        <label htmlFor=''>
            Password:
        </label>
        <input   ref={emailRef} type='password'></input>
        <button onClick={handlesubmit}>Update Button</button>
      </form>
    </div>
  )
}

export default Setting
