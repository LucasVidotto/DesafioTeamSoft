import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import {Popov, Top, Bot, Line, Order,Trian,Closed} from './Styles/styledpop';
interface Props{
    onClick : () => void;
    type: boolean;
}
export function Popover({onClick,type}:Props){
    return(
        <Popov>
            <Trian />
            <Top>Adicionado com Sucesso</Top>
            <Closed onClick={onClick}>
                <AiOutlineClose />
            </Closed>
            <Bot>
                <Line>Oferta Cheddar Bacon</Line>
                <Order>Ingredientes:
                    <li>1 Carne 250g</li>
                    <li>2 Queijo Cheddar</li>
                    <li>1 Bacon</li>
                    <li>Molho Especial</li>
                </Order>
            </Bot>
        </Popov>
    )
}