import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
import Message from "../components/Message"
import Loader from "../components/Loader"
import ProductCarousel from "../components/ProductCarousel"
import Meta from "../components/Meta"
import Video from "../components/HomeScreenVideo/Video"
import { listProducts } from "../actions/productActions"

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)

  let { loading, error, products } = productList

  // products = products.filter((p) => Number(p.rating) > 4)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <Meta />
      <Video />
      {/* <ProductCarousel /> */}
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
    </>
  )
}

export default HomeScreen
