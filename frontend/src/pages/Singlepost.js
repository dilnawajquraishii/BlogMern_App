import React from 'react'
import { useLocation } from 'react-router-dom'

const Singlepost = () => {
    let location=useLocation()
    console.log(location.state)


  return (
    <div className='row'>
      <h1>Single Page</h1>
      <div className='col'>
    <img src={location.state.image}/>
    <h5>{location.state.author.name}</h5>
    <p>Title:{location.state.title}</p>
    <p>Description:{location.state.description}</p>


      </div>
    </div>
  )
}

export default Singlepost
