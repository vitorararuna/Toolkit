import React from 'react'
import bvb from './bvb.png';
import { Container, Body } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';



export default function Card({ color }) {
    return (
        <Container color={color} >
            <div className="card">
                <div className="imgBx">
                    <img src={bvb} />
                </div>
                <div className="contentBx">
                    <h2>Nike Shoes</h2>
                    <div className="size">
                        <h3 style={{ 'color': 'white' }}>Tamanho :</h3>
                        <span>P</span>
                        <span>M</span>
                        <span>G</span>
                    </div>
                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" /> 0
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </div>
            </div>
        </Container>
    );
}