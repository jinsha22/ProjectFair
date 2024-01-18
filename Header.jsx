import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideDashBoard}) {
  return (
    <div>
    <Navbar  style={{width:"100%",position:'fixed', top:'0px',zIndex:'5',backgroundColor:'#90ee90'}}>
    <Container>
      <Navbar.Brand href="#home">
<Link to={'/'} style={{textDecoration:'none'}}>
        <h1  className='fw-bolder text-light '>
  
  <i  className='fa-solid fa-hands-holding-circle me-2'> </i>
  Project Fair
  
  </h1>
  
</Link> 
     </Navbar.Brand>
{
  insideDashBoard&&
  <div  className="ms-auto">
    <button  style={{textDecoration:'none'}} className='btn btn-link text-dark fw-bolder'> <i className="fa-solid fa-gear me-2" ></i>
    LogOut</button>
  </div>
}

    </Container>
</Navbar>
    </div>
  )
}

export default Header
