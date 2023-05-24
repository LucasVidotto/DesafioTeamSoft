import React,{useState} from 'react';
import { IoIosRemove, IoMdAdd } from 'react-icons/io';
import { values } from 'sequelize/types/lib/operators';
import { Items, BoxSpan, Quanti, Line } from '../Styles/styledRight';
interface Props{
    cheese: string, 
    id: number,
    price: number,
}
export function Item({id,cheese,price}:Props){
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
                <span>{price}</span>
            </BoxSpan>
            <Quanti valor={quantiti[id].quantiti}>
                <button
                    onClick={() => handleDecrement(id)}>
                    <IoIosRemove size="24px"/>
                </button>
                <span>{quantiti[id].quantiti}</span>
                <button
                    onClick={() =>handleIncrement(id)}>
                    <IoMdAdd size="24px"/>
                </button>
            </Quanti>
            <Line />
        </Items>
    </>
    )
}