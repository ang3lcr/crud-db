import React, { useState } from 'react'
import '../styles/form.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IconX } from '@tabler/icons-react';
const Forms = ({ showForm, handleVisible }) => {


  return (
    <div className='main-container-form' style={{ display: showForm ? 'block' : 'none' }}>
      <div className="overlayforms"></div>
      <div className="second-container">

       <Form>
        <IconX  className='icon-x' onClick={handleVisible}/>
       <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingresa un nombre" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="Ingresa un email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    </div>
  )
}

export default Forms