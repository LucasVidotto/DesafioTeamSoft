import React,{useState} from 'react';
import { IoIosRemove, IoMdAdd } from 'react-icons/io';
import { Items, BoxSpan, Quanti, Line } from '../Styles/styledRight';
interface Props{
    cheese: string, 
    id: number,
    price: number,
    ClikedInc: ()=>void;
    ClikedDec: ()=>void;
    total:number
}
export function Item({id,cheese,price,ClikedInc,ClikedDec,total}:Props){
    const [quantiti, setQuantiti]= useState([
        {id:0,quantiti:0},
        {id:1,quantiti:0},
        {id:2,quantiti:0},
        {id:3,quantiti:0},
    ]);
    
    const handleDecrement = (id: number) => {
        setQuantiti((prevIngredients) => {
          const updatedIngredients = prevIngredients.map((ingredient) => {
            if (ingredient.id === id) {
              return {
                ...ingredient,
                quantiti: ingredient.quantiti - 1,
              };
            }
            return ingredient;
          });
  
          return updatedIngredients;
        });
      };
    const handleIncrement = (id: number) => {
        setQuantiti((prevIngredients) => {
          const updatedIngredients = prevIngredients.map((ingredient) => {
            if (ingredient.id === id) {
              return {
                ...ingredient,
                quantiti: ingredient.quantiti + 1,
              };
            }
            return ingredient;
          });
  
          return updatedIngredients;
        });
        
      };
    return(
    <>
        <Items style={{marginTop:'1rem'}}>
            <BoxSpan>
                <span>{cheese}</span>
                <span>R$ {price}</span>
            </BoxSpan>
            <Quanti valor={quantiti[id].quantiti} total={total}>
                <button
                    onClick={() => {handleDecrement(id);ClikedDec()}}>
                    <IoIosRemove size="24px"/>
                </button>
                <span>{quantiti[id].quantiti}</span>
                <button
                    onClick={() =>{handleIncrement(id); ClikedInc()}}>
                    <IoMdAdd size="24px"/>
                </button>
            </Quanti>
            <Line />
        </Items>
    </>
    )
}