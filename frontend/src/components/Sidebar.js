import React from 'react'

const Sidebar = (props) => {
    // console.log(props)
  return (
    <div>
      <button onClick={()=>props.setclick(true)} className='btn  create-blog  mt-3'style={{background:""}}>Create Blog</button>
    </div>
  )
}

export default Sidebar
