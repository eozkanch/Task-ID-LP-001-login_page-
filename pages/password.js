import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Password = () => {
  return (
    
  


<Container fluid className='flex-col justify-center items-center p-20 bg-slate-500 h-screen w-screen'>
      
<h1 className='text-center text-blue-400 uppercase text-4xl'> WELCOME TO PASSWORD RENEWAL PAGE</h1>
      <Container className='flex justify-center items-center gap-10 mt-10'>
      <Button variant="primary" href="/login">Login</Button>
   <Button variant="warning" href="/register">Register</Button>
   <Button variant="danger" href="/">Home</Button>
      </Container>
   
   </Container>
  )
}

export default Password