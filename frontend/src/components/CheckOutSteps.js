import React from "react"
import { Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const CheckOutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-start mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link className='step_link'>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className='step_link'>
            Sign In
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link className='step_link'>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className='step_link'>
            Shipping
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link className='step_link'>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className='step_link'>
            Payment
          </Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link className='step_link'>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled className='step_link'>
            Place Order
          </Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckOutSteps
