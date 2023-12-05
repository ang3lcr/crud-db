import React, { useEffect, useImperativeHandle, useState } from 'react'
import axios from "axios"
import "../styles/users.css"
import Table from 'react-bootstrap/Table';
import { IconEraser } from '@tabler/icons-react';
import { IconEdit } from '@tabler/icons-react';
import Button from 'react-bootstrap/Button';
import Forms from "./Forms";
import EditForm from './EditForm';


const Users = () => {
   const [users, setUsers] = useState([]);
   const [isVisible, setIsVisisble] = useState(false);
   const [isVisibleEdit, setIsVisisbleEdit] = useState(false);



   const deleteUser = (id) => {
    let data = {
      "id": id
    }
    axios.delete(`http://localhost/proyectobd/back/services/deleteUser.php?id=${id}`)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.error("Hubo un error al eliminar el usuario:", error);
        });

    console.log(data)
};

   const handleVisible = () => {
    setIsVisisble(!isVisible);
   }

   const handleVisibleEdit = () => {
    setIsVisisbleEdit(!isVisibleEdit);
   }

   useEffect(() => {
    axios.get("http://localhost/proyectobd/back/services/getAllUsers.php")
        .then(res => setUsers(res.data))
        // .finally(res => console.log(res))
   },[deleteUser])

   return (
     <div className='main-container'>
      <Forms showForm={isVisible} handleVisible={handleVisible}/>
        <div className="content">
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td className='icon-container'>
            <IconEraser style={{color: "red"}} className='button-delete' onClick={() => deleteUser(user.id)}/>
            <IconEdit style={{color: "orange"}} className='button-edit' onClick={handleVisibleEdit}/>
              <EditForm showFormEdit={isVisibleEdit} handleVisibleEdit={handleVisibleEdit} name={user.name} email={user.email} id={user.id}/>
          </td>
        </tr>
        ))}
      </tbody>
    </Table>
        </div>
        <Button variant="outline-success" onClick={handleVisible}>Agregar</Button>
        </div>
  );
}

export default Users