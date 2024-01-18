import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
 

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       <Card className='shadow mb-5 ' style={{ width: '25rem' }} onClick={handleShow}>
      <Card.Img variant="top" src="https://bauensolutions.com/wp-content/uploads/2019/01/Technology-Projects-you-can-do-in-2020-sentient-robot-thinking.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6} >
              <img  className='img-fluid' src="https://bauensolutions.com/wp-content/uploads/2019/01/Technology-Projects-you-can-do-in-2020-sentient-robot-thinking.jpg" />
            </Col>
            <Col sm={12} md={6}>
              <h2 className="fw-bolder text-warning"> Title</h2>
              <p>Project Overview <span  className='fw-bolder'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur excepturi dolor eaque ab nobis nam quia laboriosam eligendi soluta.</span></p>
           <p>Language Used : <span className="fw-bolder text-danger">HTML ,CSS,JS   </span></p>
            </Col>
          </Row>
          <div>
            <a href="https://github.com/" target='_blank' style={{cursor:'pointer',color:'black'}}> <i style={{height:'34px'}} className="fa-brands fa-github fa-2x"></i> </a>
            <a href="" target='_blank' style={{cursor:'pointer',color:'black'}} className='ms-5'> <i style={{height:'34px'}} className="fa-solid fa-link fa-2x"></i> </a>

          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard
