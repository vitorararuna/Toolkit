import styled from 'styled-components';
import tenis from './tenis.png';

export const Body = styled.section`
    display: felx;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #131313;
`;

export const Container = styled.section`
    position:relative;

    .card{
        position: relative;
        width: 320px;
        height:450px;
        background: #232323;
        border-radius:20px;
        overflow: hidden;
    }

    .card:before{
        content: '';
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: #9bdc28;
        clip-path: circle(150px at 80% 20%);
        transition: 0.5s ease-in-out;
    }

    .card:hover:before{
        clip-path: circle(300px at 80% -20%);
    }

    .card:after{
        content: 'Nike';
        position: absolute;
        top:18%;
        left:-20%;
        font-size: 12rem;
        font-weight: 800;
        font-style: italic;
        color: rgba(255,255,255,0.04);
    }

    .imgBx{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        width:100%;
        height: 220%;
        transition: 0.5s;
    }

    .card:hover .imgBx{
        top: -80%;
        transform: translateY(0%);
    }

    .imgBx img{
       position: relative;
       top: 45%;
       left: 60%;
       transform: translate(-50%, -50%) rotate(-25deg);
       width:290px;
    }

    .card .contentBx {
        position: absolute;
        bottom: 0;
        width:100%;
        height: 100px;
        text-align: center;
        transition: 1s !important;
        z-index: 10;
    }

    .card:hover .contentBx {
        height: 180px;
    }

    .card .contentBx h2 {
        position: relative;
        font-weight: 600;
        letter-spacing:1px;
        color:#fff;
    }

    .card .contentBx .color,
    .card .contentBx .size {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 20px;
        transition: 0.5s;
        opacity: 0;
        visibility: hidden;
    }

    .card:hover .contentBx .size{
        opacity: 1;
        visibility: visible;
        transition-delay: 0.6s;
    }

    .card:hover .contentBx .color{
        opacity: 1;
        visibility: visible;
        transition-delay: 0.5s;
    }

    .card .contentBx .color h3
    .card .contentBx .size h3 {
       color: #fff !important;
       font-weight: 300;
       font-size: 14px;
       text-transform: uppercase;
       letter-spacing: 2px !important;
       margin-right:10px;
    }

    .card .contentBx .size span {
       width: 26px;
       height: 26px;
       text-align: center;
       line-height: 26px;
       font-size: 14px;
       display: inline-block;
       color:#111 !important;
       background-color:#fff;
       margin:0 5px;
       transition: 0.5s !important;
       color:#fff; 
       border-radius: 4px;
       cursor: pointer;
    }

    .card .contentBx .size span:hover {
       background-color:#9bdc28 !important;
    }

    .card .contentBx .color span{
       width: 20px;
       height: 20px;
       /* background:#ff0; */
       border-radius:50%;
       margin: 0 5px;
       cursor: pointer;
    }

    .green{
        background-color: #9bdc28 !important;
    }
    .blue{
        background-color: #03a9f4 !important;
    }
    .red{
        background-color: #e91e63 !important;
    }

    .card .contentBx a{
        display: inline-block;
        padding:10PX 20px;
        background: #fff;
        border-radius:4px;
        margin-top:10px;
        text-decoration: none;
        font-weight:600;
        color: #111;
        opacity: 0;
        transform: translateY(50px);
        transition: 0.5s;
        cursor: pointer;

    }

    .card:hover .contentBx a{
        opacity: 1;
        transform: translateY(0px);
        transition-delay: 0.75s;
        background: #fff;

    }

`;