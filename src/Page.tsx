import React, {useState, useEffect } from 'react';
import axios from 'axios';
const baseURL = "https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products";
import { Main} from './Components/Styles/styledLeft';
import {
    ContainerRight,
    AddItems,
    ContainerMain,
    RSpanOne,
    RSpanTwo,
    ContainerTalher,
    YesNo,
}  from './Components/Styles/styledRight';
import { Left } from './Components/Left/Left';
import { Item } from './Components/Item/Item';
import { CartAdd } from './Components/CartAdd/cartAdd';
interface Ingredient {
    id: number;
    description: string;
    price: number;
  }
export function Page(){
    const [newIngredients, setNewImgredients] = useState<Ingredient[]>([
        {id: 0,description: "name",price: 0.0},
        {id: 1,description: "name",price: 0.0},
        {id: 2,description: "name",price: 0.0},
        {id: 3,description: "name",price: 0.0},    
    ])
    const [products,setProducts] = useState({
        description: '',
        offer: '',
        price: 0,
        discount: 0,
    });
    const [total,setTotal] = useState(0);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setNewImgredients((prevState) => {
                
                const updatedIngredients = [...prevState];
                updatedIngredients[0] = {
                    ...updatedIngredients[0],
                    description: response.data[0].ingredients[0].itens[0].nm_item,
                    price: response.data[0].ingredients[0].itens[0].vl_item,
                };
                updatedIngredients[1] = {
                    ...updatedIngredients[0],
                    description: response.data[0].ingredients[0].itens[1].nm_item,
                    price: response.data[0].ingredients[0].itens[1].vl_item,
                };
                updatedIngredients[2] = {
                    ...updatedIngredients[0],
                    description: response.data[0].ingredients[0].itens[2].nm_item,
                    price: response.data[0].ingredients[0].itens[2].vl_item,
                };
                updatedIngredients[3] = {
                    ...updatedIngredients[0],
                    description: response.data[0].ingredients[0].itens[3].nm_item,
                    price: response.data[0].ingredients[0].itens[3].vl_item,
                };
                return updatedIngredients;
            })
            setProducts({
                ...products,
                description: response.data[0].description,
                offer: response.data[0].nm_product,
                price: response.data[0].vl_price,
                discount: response.data[0].vl_discount,
              });

        });
      }, []);
    return(
        <Main>
            <Left 
            offer={products.offer} 
            description={products.description} 
            price={products.price}
            discount={products.discount}
            />
            <ContainerRight>
                <ContainerMain id="elemento">
                    <AddItems>
                        <RSpanOne>Adicionar Ingredientes</RSpanOne>
                        <RSpanTwo>Até 8 ingredientes.</RSpanTwo>
                    </AddItems>
                        {newIngredients.map((item) => (
                            <Item
                            key={item.id}
                            id={item.id}
                            cheese={item.description}
                            price={item.price}
                            ClikedInc={() => setTotal(total + 1)}
                            ClikedDec={() => setTotal(total - 1)}
                            total = {total}
                            />
                        ))}
                    <ContainerTalher>
                        <span>Precisa de Talher?</span>
                        <YesNo>
                            <label id="Sim">
                                 <input type="radio" name="escolha" value="sim"/> Sim
                            </label>

                            <label>
                                <input type="radio" name="escolha" value="nao"/> Não
                            </label>
                        </YesNo>
                    </ContainerTalher>
                </ContainerMain>
                <CartAdd />     
            </ContainerRight>
        </Main>
        
    )
}