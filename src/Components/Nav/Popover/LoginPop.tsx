import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import {Popov, Top, Bot,Trian,Closed} from '../../Styles/styledLogin';
interface Props{
    onClick : () => void;
    log: boolean;
}
export function LoginPop({onClick,log}:Props){
    return(
        <Popov>
            <Trian />
            <Top>Adicionado com Sucesso</Top>
            <Closed onClick={onClick}>
                <AiOutlineClose />
            </Closed>
            <Bot>
                <li> Página em Manutenção</li>
            </Bot>
        </Popov>
    )
}