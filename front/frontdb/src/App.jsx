import { useState, useEffect } from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import Users from './pages/Users'


function App() {




  return (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Users />}/>
      {/* <Route element={<ProtectedRoutes />}>
        <Route path="/empleados/" element={<Users />}/> //Favorites
      </Route> */}
    </Routes>
  </HashRouter>
  )
}

export default App
