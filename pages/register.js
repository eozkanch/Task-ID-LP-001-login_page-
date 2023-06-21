import React from 'react'
import { Container,Button } from 'react-bootstrap'

const Register = () => {
  return (
    <Container fluid className='flex-col justify-center items-center p-20 bg-green-900 h-screen w-screen'>
      
       <h1 className='text-center text-blue-400 uppercase text-4xl'> Welcome to the Register Page</h1>
       <Container className='flex justify-center items-center gap-10 mt-10'>
       <Button variant="primary" href="/login">Login</Button>
    <Button variant="warning" href="/password">Password</Button>
    <Button variant="danger" href="/">Home</Button>
       </Container>
    
    </Container>
   
  )
}

export default Register