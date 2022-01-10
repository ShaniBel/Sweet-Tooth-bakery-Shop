import React from "react"
import { Helmet } from "react-helmet"

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: "Welcome To Sweet Tooth Bakery",
  keywords: "cakes, cookies, muffins",
  description: "We sell the best sweet baked goods",
}

export default Meta
