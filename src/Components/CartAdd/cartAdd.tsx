import React, { useContext, useState } from 'react';
import Context from "../Context/Context";
import { Popover } from '../Popover';
import { IoIosRemove, IoMdAdd } from 'react-icons/io';
import { Finish, MoreLess } from '../Styles/styledRight';
export function CartAdd(){
    const [count, setCount] = useContext<number>(Context);
    const [campo, setCampo] =useState(0);
    const [type, setType] = useState(false);
    /* const [items, setItems] = useState([]); */
    const handlerIncrement = ()=>{
        setCampo( campo +1);
    }
    const handlerDecrement = ()=>{
        setCampo( campo - 1);
    }
    const handlePopoverClose = () => {
        setType(false);
      };
      /* const handlerItem = (description: string, quanti: number) => {
        const newItem = {
          description: description,
          quanti: quanti,
        };
      
        setItems([...items, newItem]);
      }; */
    return(
        <>
        <Finish>
            <MoreLess valor={campo} total={0}>
                <button
                onClick={()=>handlerDecrement()}>
                    <IoIosRemove size="24px"/>
                </button>
                <span>{campo}</span>
                <button
                    onClick={()=>handlerIncrement()}>
                    <IoMdAdd size="24px"/>
                </button>
            </MoreLess>
            <button
                onClick={()=>{setType(!type); setCount(count +1)}}>
                    Adicionar
            </button>
                {type && <Popover onClick={handlePopoverClose} type={type} />}
            </Finish>
        </>
    )
}