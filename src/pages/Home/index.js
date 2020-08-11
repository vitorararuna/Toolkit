import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanProducts, setProductsRequest } from '../../store/produtct/slice';

import { ProductList, Container } from './styles';

import Card from '../../components/card/index';
import Card2 from '../../components/card2/index';

export default function Home() {

  const prodi = useSelector(state => state.product)
  const dispatch = useDispatch();

  const fetchUsers = () => {
    console.log("dis")
    dispatch(setProductsRequest());
  };

  return (

    <Container>
      <h1>HOME</h1>
      <button onClick={fetchUsers}>
        Click
      </button>
      <button onClick={() => console.log(prodi)}>
        Click2
      </button>

      <br></br> <br></br> <br></br> <br></br>

      {/* <Card /> */}

      <Card2 color={"#fcea3e"}/>

    </Container>
  )
}