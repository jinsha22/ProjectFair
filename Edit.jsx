import React, { useState } from 'react'
import ub from '../assets/ub.png'
import { Button, Modal } from 'react-bootstrap'


function Edit() {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <>
    <button  onClick={handleShow}  style={{ textDecoration: 'none' }} className='btn btn-link  text-success d-flex align-center fw-bolder'> <i style={{ height: '34px' }} className='fa-solid fa-edit fa-2x me-2'> </i></button>

    <Modal size='lg'
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Project Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='row'>
        <div className='col-lg-6'>
          <label>
            <input type="file" style={{display:'none'}} />
            <img height={'250px'} width={'250px'}  className='mt-5 p-3 text-center' src={ub} alt="project upload pic" />

          </label>
          </div>
          <div className='col-lg-6'>
      <div className='mb-3 '>
    <input className='border rounded p-2 w-100' type="text" placeholder='Project Title' />
      </div>
      <div className='mb-3'>
    <input className='border rounded p-2 w-100' type="text" placeholder='Language Used' />
      </div>
      <div className='mb-3'>
    <input className='border rounded p-2 w-100' type="text" placeholder='Project Github Link ' />
      </div>
      <div className='mb-3'>
    <input className='border rounded p-2 w-100' type="text" placeholder='Project Website Link' />
      </div>
      <div className='mb-3'>
    <input className='border rounded p-2 w-100' type="text" placeholder='Project Overview' />
      </div>

          </div>
          
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success">Update</Button>
      </Modal.Footer>
    </Modal>

  </>

  )
}

export default Edit
