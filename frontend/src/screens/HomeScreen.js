import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Button } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import Product from "../components/Product"
import Message from "../components/Message"
import Loader from "../components/Loader"
import ProductCarousel from "../components/ProductCarousel"
import Meta from "../components/Meta"
import Video from "../components/HomeScreenVideo/Video"
import { listTopProducts } from "../actions/productActions"

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return (
    <>
      <Meta />

      <div className='shop-now'>
        <Container fluid>
          <Row className='justify-content-md-end'>
            <Col lg={6}>
              <h4 className=''>Visit Our Online Shop</h4>
              <p>
                {" "}
                Sweet Tooth bakery offers something for everyone. This is a one of
                a kind bakery, where the aroma of home-style baking weakens even
                the strongest will. We a wide variety of freshly baked goods daily
                that no one can resist.
              </p>

              <Button className='btn btn-dark my-1 py-1'>Shop</Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Video />
      <Container className='top-products'>
        <h2>Top Rated products</h2>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  )
}

export default HomeScreen
