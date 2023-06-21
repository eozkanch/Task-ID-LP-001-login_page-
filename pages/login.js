import Image from 'next/image'
import React from 'react'
import Login from './components/login'
import { Container } from 'react-bootstrap'

const LoginPage = () => {
  return (
    <main className="  h-screen w-screen  flex justify-center items-center  bg-left-bottom bg-no-repeat me-100 " style={{backgroundImage: 'url("/images/banner.png")'}}>
      <Container fluid className='h-screen w-screen flex justify-center items-center bg-[#EDC7B7] bg-opacity-80'>
      <div className="py-20 flex justify-center items-center 0 ">
        <div className='p-5 w-8/12  flex justify-center items-center '>
          <Login/>
        </div>
        <div className='p-5  hidden lg:block md:w-full  justify-center items-center'>
          <Image src={'/images/banner.png'} alt="logo" width={800} height={200}/>
        </div>
    </div>
      </Container>
   
   
  </main>
  )
}

export default LoginPage