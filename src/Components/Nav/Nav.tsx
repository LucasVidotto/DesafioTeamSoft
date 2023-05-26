import React, { useState,useRef } from 'react';
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
Street,
BoxSec,
}
from '../Styles/styledNav';
import Logo from '../../assets/logo.svg'
import Delivere from '../../assets/deliveri.svg'
import Close from '../../assets/close.svg'
import { AiOutlineSearch } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { RiArrowUpSLine } from "react-icons/ri";
interface Props{
total:number
}
export function NavBar({total}:Props){
const [type,setType] = useState(false);
const searchInputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
      const idToSearch = 'elemento-id'; // ID do elemento que você deseja buscar

      const elementToSearch = document.getElementById(idToSearch);
      if (elementToSearch) {
        elementToSearch.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return(
            <Nav>
                <Figure >
                        <img src={Logo} alt="Imagem logo"  title='Caixa Correndo'/>
                        <img src={Delivere} alt="Imagem logo"  title='Deliverize'/>
                </Figure>
                <Box>
                    <Spans>
                        <span>Entrega: </span>
                        <span>R. Antonio Braune, 222</span>
                    </Spans>
                        <Street
                        onClick={()=>setType(!type)}>
                            {type ?
                            <RiArrowUpSLine size="22px" color="#ED3237"/>
                            :
                            <img src={Close} alt="close button" title="botão para baixo" style={{marginRight: '14px'}}/>}
                        </Street>
                </Box>
                {type ?
                <BoxSec>
                    <Spans>
                        <span>Endereço: </span>
                        <span>R. Sei la Sei la</span>
                    </Spans>
                </BoxSec>
                :
                <></>
                }
                <Search>
                    <input
                        type="search"
                        placeholder="Busque por estabelecimento ou produtos"
                        ref={searchInputRef}
                    />
                    <AiOutlineSearch size="24px" color="#ED3237" style={{marginTop:'auto', marginBottom:'auto'}}/>
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
                            <ValueCart>{total}</ValueCart>
                            <Elipse />
                            <SpanCart >Carrinho</SpanCart>
                        </ShopCart>
                </Cart>
            </Nav>
    )

}