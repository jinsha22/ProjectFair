import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import p1 from '../assets/p1.png'

function Profile() {
  const [open,setOpen] = useState(false)
  return (
    <div className='border rounded p-2 '>
 <div className='d-flex justify-content-between'>   <h2 >Profile </h2>
 <button  onClick={() => setOpen(!open)} className='btn btn-outline-warning'> <i className='fa-solid fa-caret-down'></i> </button>
 </div>
 <Collapse in={open}>
        <div id="example-collapse-text">
<label>
          <input type="file" name="" id="" style={{display:'none'}}/>
          <img width={'200px'} height={'200px'} className='img-fluid rounded-circle' src={p1} alt="upload Profile pic" />
  
</label>
<form >
  <div className='mb-2'>
    <input type="text " className='p-1 w-75 form-control' placeholder='enter your GITHUB Link Here' />
  </div>
  <div className='mb-2'>
    <input type="text " className='p-1 w-75 form-control' placeholder='enter your LinkedIn Link Here' />
</div>
<div className='mb-3 d-grid w-75 text-center mx-auto'>
 <button className='btn btn-warning'> Update</button>
</div>
  </form>     
   </div>
      </Collapse>
    </div>
  )
}

export default Profile
