import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


function CheckOutSteps({ step1, step2, step3, step4 }) {
  return (
    <Nav className='justify-content-center mb-4'>
        <Nav.Item>
            {step1 ? (
              <LinkContainer>
                  <Nav.Link to='/login'>Login</Nav.Link>
              </LinkContainer>
            ) : (
                <Nav.Link disabled>Login</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            {step2 ? (
              <LinkContainer>
                  <Nav.Link to='/shipping'>Shipping</Nav.Link>
              </LinkContainer>
            ) : (
                <Nav.Link disabled>Shipping</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            {step3 ? (
              <LinkContainer>
                  <Nav.Link to='/payment'>Payment</Nav.Link>
              </LinkContainer>
            ) : (
                <Nav.Link disabled>Payment</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            {step4 ? (
              <LinkContainer>
                  <Nav.Link to='/placeorder'>Place Order</Nav.Link>
              </LinkContainer>
            ) : (
                <Nav.Link disabled>Place Order</Nav.Link>
            )}
        </Nav.Item>
        
       
    </Nav>
  )
}

export default CheckOutSteps