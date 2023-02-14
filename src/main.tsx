import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginForm from './components/LoginForm'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>,
)
