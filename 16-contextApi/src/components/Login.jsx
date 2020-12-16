import React, { useContext } from 'react'
import styled from 'styled-components'
import { LoginContext } from '../context/Login.context'

const Button = styled.button`
  background: none;
  background-color: ${({ login }) => (login ? 'orange' : 'steelblue')};
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0.3rem 1.5rem;
  font-size: 1.2rem;
  outline: none;
`

const Login = () => {
  const [login, setLogin] = useContext(LoginContext)

  const handleLogin = () => {
    setLogin(!login)
  }
  return (
    <>
      {login ? <h1>User Login</h1> : <h1>User Not Login</h1>}
      <Button onClick={handleLogin}>{login ? 'Logout' : 'Login'} User</Button>
    </>
  )
}

export default Login
