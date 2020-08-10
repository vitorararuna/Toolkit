import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PRODUCT_REQUEST } from '../../constants/sagaActions';

import { ProductList, Container } from './styles';

export default function Home() {

  const dispatch = useDispatch();

  const fetchUsers = () => {
    dispatch({ type: SET_PRODUCT_REQUEST });
  };

  return (

    <Container>
      <h1>HOME</h1>
      <button onClick={fetchUsers}>
        Click
      </button>
    </Container>
  )
}