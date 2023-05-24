import styled from 'styled-components';

export const Nav = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    background-color: #F4F4F4;
    height: 80px; 
    margin:0;
    padding: 0%;

    @media (max-width: 768px) {
        max-width: 100vw;
        width: 100%;
        justify-content: center;
    }
`
/* export const Nav = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    background-color: #F4F4F4;
    width: 1280px;
    height: 80px;
    padding: 16px 40px;
    gap: 24px;
    margin:0;
    padding: 0%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
` */

export const Box = styled.div`
display:flex;
flex-direction:row;
align-items: center;
margin-left: 114px;
margin-right: 24px;
width: 230px;
height: 48px;
background-color: #FFFFFF;
border-radius: 4px;


img:nth-child(3) {
    color:#D80000;
    width: 12px;
    height: 7.41px;
}
    @media (max-width: 768px) {
        display:none;
    }

`

export const Figure = styled.figure`
    display:flex;

    @media (max-width: 768px) {
        width: 160px;
        height: 50px;
    }

`
export const Spans = styled.div`
    display:flex;
    flex-direction: column;
    margin-right: auto;
    & > span {
        font-size:12px;
        margin-left: 0.5rem;
        margin-top: 0.5rem;
    }

    span:first-child {
        color:#D80000;
    }
    span:nth-child(2) {
        margin-bottom: 0.5rem;
        color:#656363;
    }

`
export const Search = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: center;
    width: 354px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #ED3237;
    border-radius: 4px;
    input:first-child {
        width: 319px;
        height: 48px;
        margin-left: 16px;
        border: none;
        outline: none;  
    }

    @media (max-width: 768px) {
        display:none;
    }
`

export const Login = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 88px;
    height: 32px;
    background-color: transparent;
    margin-left: 24px;

    span:nth-child(2){
        color: #ED3237;
        font-size: 16px;
        margin-left: 10.60px;
    }

    @media (max-width: 768px) {
        display:none;
    }
`
export const Cart = styled.div`
    width: 106px;
    height: 40px;
    flex: none;
    order: 3;
    flex-grow: 0;
    @media (max-width: 768px) {
        display:none;
    }
`

export const ShopCart = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.25rem;
    margin-left:24px;
    width: 32px;
    height: 32px;
    &>button{
        border:none;
        background: transparent;
        cursor:pointer;
    }
    @media (max-width: 768px) {
        display:none;
    }
`
export const ValueCart = styled.div`
    position: absolute;
    width: 16px;
    height: 16px;
    left: 88.9%;
    top: 2.4%;
    order: 2;
    z-index: 2;
    color:#FFF;
    @media (max-width: 768px) {
        display:none;
    }
`

export const Elipse = styled.div`
    position: absolute;
    width: 16px;
    border-radius: 50%;
    height: 16px;
    left: 88.6%;
    top: 2.4%;
    background: #F09035;
    order: 1;
    z-index: 1;
    @media (max-width: 768px) {
       display:none;
    }
`
export const SpanCart = styled.span`
    display:flex;
    width: 66px;
    height: 16px;
    left: 784px;
    top: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    display: flex;
    align-items: center;
    letter-spacing: 0.2px;
    color: #ED3237;
    @media (max-width: 768px) {
        display:none;
    }
`