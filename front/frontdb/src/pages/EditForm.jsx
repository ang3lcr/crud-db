import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IconX } from '@tabler/icons-react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const EditForm = ({ showFormEdit, handleVisibleEdit, oldemail, oldname, id }) => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    data.id = id;
    axios.put("http://localhost/proyectobd/back/services/updateUser.php", data)
        .then(alert("todo bien"))
    console.log(data);

  };

  return (
    <div className='main-container-form' style={{ display: showFormEdit ? 'block' : 'none' }}>
      <div className="overlayforms"></div>
      <div className="second-container">

        <Form onSubmit={handleSubmit(onSubmit)}>
          <IconX className='icon-x' onClick={handleVisibleEdit} />
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nuevo Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa un nombre"
              defaultValue={oldname}
              {...register('name')}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nuevo Correo Electronico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa un email"
              defaultValue={oldemail}
              {...register('email')}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditForm;
