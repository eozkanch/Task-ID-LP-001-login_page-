import Image from 'next/image'
import React from 'react'
import Login from './components/login'
import { Container, Row, Col } from 'react-bootstrap'

const LoginPage = () => {
  return (
    <main className="h-screen w-screen bg-left-bottom bg-no-repeat me-100" style={{backgroundImage: 'url("/images/banner.png")'}}>
      <Container fluid className='h-screen w-screen bg-[#EDC7B7] bg-opacity-80'>
        <Row  className="h-100 d-flex justify-content-center align-items-center">
          
          <Col  xxl={4} xl={5} lg={6} md={8} sm={12} xs={12} className="d-flex justify-content-center align-items-center">
            <Login/>
          </Col>
          <Col xxl={7} xl={7} lg={6} className="d-none d-lg-block">
            <div className="h-100 d-flex justify-content-center align-items-center">
              <Image src={'/images/banner.png'} alt="logo" width={800} height={200}/>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default LoginPage
