import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container className='color-footer' fluid>
        <Row>
          <Col className='text-center py-3'>
            <i className='fas fa-facebook-official'></i>
            Copyright &copy; Sweet Tooth Bakery
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
            <a href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
              <i className='fab fa-facebook'></i>
            </a>
            &emsp;
            <a href='https://www.instagram.com/' rel='noreferrer' target='_blank'>
              <i className='fab fa-instagram'></i>
            </a>
            &emsp;
            <a href='https://twitter.com/' rel='noreferrer' target='_blank'>
              <i className='fab fa-twitter-square'></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
