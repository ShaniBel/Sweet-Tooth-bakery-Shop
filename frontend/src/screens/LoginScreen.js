import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Row, Col, Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import Meta from "../components/Meta"
import { login } from "../actions/userActions"
import FormContainer from "../components/FormContainer"

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const redirect = location.search ? location.search.split("=")[1] : "/"

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [userInfo, redirect, history])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      <Meta title='Sign In' />
      <FormContainer>
        <h1>Sign In</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='Password'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Sign In
          </Button>
        </Form>

        <Row className='py-3'>
          <Col>
            New Customer?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
              style={{ color: "blue" }}
            >
              Register here
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  )
}

export default LoginScreen
