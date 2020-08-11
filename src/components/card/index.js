import React from 'react'
import tenis from './tenis.png';
import { Container, Body } from './styles';



export default function Card() {
    return (
        <Container>
            <div className="card">
                <div className="imgBx">
                    <img src={tenis} />
                </div>
                <div className="contentBx">
                    <h2>Nike Shoes</h2>
                    <div className="size">
                        <h3 style={{ 'color': 'white' }}>Size :</h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                    </div>
                    <div className="color">
                        <h3 style={{ 'color': 'white' }}>Color :</h3>
                        <span className="green"></span>
                        <span className="blue"></span>
                        <span className="red"></span>
                    </div>
                    <a href="#">Buy Now</a>
                </div>
            </div>
        </Container>
    );
}