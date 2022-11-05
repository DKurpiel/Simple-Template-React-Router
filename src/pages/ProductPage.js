import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = ({ match }) => {

  return (
    <>
      <div>Product page</div><br />
      <Product name={match.params.name} /><br />
      <Link to="/products">Back to the list of products</Link>
    </>
  )
}

export default ProductPage