import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Users from './pages/Users.jsx'
import Forms from './pages/Forms.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Users />
  </React.StrictMode>,
)
