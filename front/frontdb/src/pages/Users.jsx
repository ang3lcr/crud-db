import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../styles/users.css"
import Table from 'react-bootstrap/Table';
import { IconEraser } from '@tabler/icons-react';
import { IconEdit } from '@tabler/icons-react';
import Button from 'react-bootstrap/Button';
import Forms from "./Forms";


const Users = () => {
   const [users, setUsers] = useState([]);
   const [isVisible, setIsVisisble] = useState(false);


   const handleVisible = () => {
    setIsVisisble(!isVisible);
   }

   useEffect(() => {
    axios.get("http://localhost/proyectobd/back/services/getAllUsers.php")
        .then(res => setUsers(res.data));
   },[])

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
            <IconEraser style={{color: "red"}} className='button-delete'/>
            <IconEdit style={{color: "orange"}} className='button-edit'/>
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