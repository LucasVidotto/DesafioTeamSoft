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
    ContainerTalher,
    Finish,
    MoreLess,
} 
from './Styles/styledRight';
import { IoIosRemove, IoMdAdd } from "react-icons/io";
interface MyObject {
    campo1: number;
    campo2: number;
    campo3: number;
    campo4: number;
    campo5: number;
  }
export function Page(){
    const [values, setValues] = useState<MyObject>({
        campo1: 0,
        campo2: 0,
        campo3: 0,
        campo4: 0,
        campo5: 0,
    });
    const handleIncrement = (fieldName: keyof MyObject) => {
        setValues({
            ...values,
            [fieldName]: values[fieldName] + 1,
          });
      };
      const handleDecrement = (fieldName: keyof MyObject) => {
        setValues((prevValues) => {
          const currentValue = prevValues[fieldName];
          const newValue = currentValue > 0 ? currentValue - 1 : 0;
          return {
            ...prevValues,
            [fieldName]: newValue,
          };
        });
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
                        <Quanti valor={values.campo1}>
                            <button
                                onClick={()=>handleDecrement('campo1')}>
                                <IoIosRemove size="24px"/>
                            </button>
                            <span>{values.campo1}</span>
                            <button
                            onClick={()=>handleIncrement('campo1')}>
                                <IoMdAdd size="24px"/>
                            </button>

                        </Quanti>
                        <Line />
                    </Items>
                    <Items style={{marginTop:'1rem'}}>
                        <BoxSpan>
                            <span>Cebola crispy</span>
                            <span>+ R$1,50</span>
                        </BoxSpan>
                        <Quanti valor={values.campo2}>
                            <button
                            onClick={()=>handleDecrement('campo2')}>
                            <IoIosRemove size="24px"/></button>
                            <span>{values.campo2}</span>
                            <button
                            onClick={()=>handleIncrement('campo2')}>
                            <IoMdAdd size="24px"/></button>
                        </Quanti>
                        <Line />
                    </Items>
                    <Items style={{marginTop:'1rem'}}>
                        <BoxSpan>
                            <span>Molho de picanha</span>
                            <span>+ R$3,50</span>
                        </BoxSpan>
                        <Quanti valor={values.campo3}>
                        <button
                                onClick={()=>handleDecrement('campo3')}>
                                <IoIosRemove size="24px"/>
                            </button>
                            <span>{values.campo3}</span>
                            <button
                            onClick={()=>handleIncrement('campo3')}>
                                <IoMdAdd size="24px"/>
                            </button>
                        </Quanti>
                        <Line />
                    </Items>
                    <Items style={{marginTop:'1rem'}}>
                        <BoxSpan>
                            <span>Molho cheddar</span>
                            <span>+ R$3,50</span>
                        </BoxSpan>
                        <Quanti valor={values.campo4}>
                        <button
                                onClick={()=>handleDecrement('campo4')}>
                                <IoIosRemove size="24px"/>
                            </button>
                            <span>{values.campo4}</span>
                            <button
                            onClick={()=>handleIncrement('campo4')}>
                                <IoMdAdd size="24px"/>
                            </button>
                        </Quanti>
                        <Line />
                    </Items>
                    <ContainerTalher>
                        <span>Precisa de Talher?</span>
                    </ContainerTalher>
                </ContainerMain>
                <Finish>
                    <MoreLess valor={values.campo5}>
                        <button
                            onClick={()=>handleDecrement('campo5')}>
                            <IoIosRemove size="24px"/>
                        </button>
                        <span>{values.campo5}</span>
                        <button
                            onClick={()=>handleIncrement('campo5')}>
                            <IoMdAdd size="24px"/>
                        </button>
                    </MoreLess>
                    <button>Adicionar</button>
                </Finish>
                
            </ContainerRight>
        </Main>
        
    )
}