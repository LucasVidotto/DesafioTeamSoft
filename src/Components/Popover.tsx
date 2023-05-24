import React from 'react';
import {Popov, Top, Bot, Line, Order,Trian} from './Styles/popover';
export function Popover(){
    return(
        <Popov>
            <Trian />
            <Top>Adicionado com Sucesso</Top>
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