import React, {useState} from 'react';
import Image from './foto.png';
import 
{
    Container, 
    Boximage,
    Section,  
    Main,
    SectionT, 
    Price
} 
from './Styles/styledLeft';
import 
{
    ContainerRight,
    AddItems,
    ContainerMain,
    RSpanOne,
    RSpanTwo,
    Items,
    Line,
    BoxSpan,
    Quanti,
} 
from './Styles/styledRight';
import { IoIosRemove, IoMdAdd } from "react-icons/io";
export function Page(){
    const [values, setValues] = useState<number>(0);
    const handleIncrement = () => {
        setValues(values + 1);
      };
    const handleDecrement = () => {
        setValues(values - 1);
      };
    return(

        <Main >
            {/*Left */}
            <Container >
                <Boximage>
                    <img src={Image} alt="Hamburguer" style={{width:'560px',height:'340px' }}/>
                </Boximage>
                {/* <Section>
                    <Span>Oferta Picanha Cheddar Bacon</Span>
                </Section> */}
                <Section>
                    Oferta Picanha Cheddar Bacon
                </Section> 
                
                {/* <SectionT>
                    <span>Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, 
                        queijo cheddar, molho cheddar e pão mix de gergelim
                    </span>
                </SectionT> */}
                 <SectionT>
                    Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, 
                        queijo cheddar, molho cheddar e pão mix de gergelim
                    
                </SectionT> 
                <Price>
                    <span>R$ 31,99</span>
                    <span>R$ 34,95</span>
                </Price>
            </Container>
            {/*Right */}
            <ContainerRight>
                <ContainerMain>
                    <AddItems>
                        <RSpanOne>Adicionar Ingredientes</RSpanOne>
                        <RSpanTwo>Até 8 ingredientes.</RSpanTwo>
                    </AddItems>
                    <Items>
                        <BoxSpan>
                            <span>Queijo Chedar</span>
                            <span>+ R$4,99</span>
                        </BoxSpan>
                        <Quanti valor={values}>
                            <button><IoIosRemove size="24px"/></button>
                            <span>0</span>
                            <button><IoMdAdd size="24px"/></button>

                        </Quanti>
                        <Line />
                    </Items>
                    <Items style={{marginTop:'1rem'}}>
                        <BoxSpan>
                            <span>Cebola crispy</span>
                            <span>+ R$1,50</span>
                        </BoxSpan>
                        <Quanti valor={values}>
                            <button
                            onClick={()=>handleDecrement()}>
                            <IoIosRemove size="24px"/></button>
                            <span>{values}</span>
                            <button
                            onClick={()=>handleIncrement()}>
                            <IoMdAdd size="24px"/></button>
                        </Quanti>
                        <Line />
                    </Items>
                    <Items style={{marginTop:'1rem'}}>
                        <BoxSpan>
                            <span>Molho de picanha</span>
                            <span>+ R$3,50</span>
                        </BoxSpan>
                        <Quanti valor={values}>
                            <button><IoIosRemove size="24px"/></button>
                            <span>0</span>
                            <button><IoMdAdd size="24px"/></button>
                        </Quanti>
                        <Line />
                    </Items>
                    <Items style={{marginTop:'1rem'}}>
                        <BoxSpan>
                            <span>Molho cheddar</span>
                            <span>+ R$3,50</span>
                        </BoxSpan>
                        <Quanti valor={values}>
                            <button><IoIosRemove size="24px"/></button>
                            <span>0</span>
                            <button><IoMdAdd size="24px"/></button>
                        </Quanti>
                        <Line />
                    </Items>
                </ContainerMain>
                
            </ContainerRight>
        </Main>
        
    )
}