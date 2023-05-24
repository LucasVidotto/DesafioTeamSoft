import React from 'react';
import 
{ 
    Nav, 
    Figure, 
    Box,
    Spans,
    Search,
    Login,
    Cart, 
    ShopCart,
    ValueCart,
    Elipse,
    SpanCart,
} 
from './Styles/styledNav';
import Logo from '../assets/logo.svg'
import Delivere from '../assets/deliveri.svg'
import Close from '../assets/close.svg'
import { AiOutlineSearch } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";

export function NavBar(){
    return(
        <Nav>
           <Figure >
                <img src={Logo} alt="Imagem logo"  title='Caixa Correndo'/>
                <img src={Delivere} alt="Imagem logo"  title='Deliverize'/> 
           </Figure>
           <Box>
            <Spans>
                <span>Entrega: </span>
                <span>R. Sei la Sei la</span>
            </Spans>
                <img src={Close} alt="close button" title="botão de fechar" style={{marginRight: '14px'}}/>
           </Box>
           <Search>
                <input
                    type="search"
                    placeholder="Busque por estabelecimento ou produtos"
                />
                <AiOutlineSearch size="24px" color="#ED3237" style={{margin:'auto'}}/>
           </Search>
           <Login>
                <BiUserCircle size="26.67px" color="#ED3237" />
                <span>Entrar</span>
           </Login> 
           <Cart>
                <ShopCart>
                    <button>
                        <BsCart3 size="24.68px"color="#ED3237"/>
                    </button>
                    <ValueCart>0</ValueCart>
                    <Elipse />
                    <SpanCart >Carrinho</SpanCart>
                </ShopCart>
           </Cart>
        </Nav>
    )
}