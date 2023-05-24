import React from 'react'
import { 
    Container, 
    Boximage, Section, 
    SectionT, 
    Price 
} from '../Styles/styledLeft'
import Image from '../foto.png';
interface Props{
    offer: string,
    description: string,
    discount:number,
    price: number,
}
export function Left({offer,description,discount,price}:Props){
    return(
        <>
        <Container >
                <Boximage>
                    <img src={Image} alt="Hamburguer" style={{width:'560px',height:'340px' }}/>
                </Boximage>
                <Section>
                    {offer}
                </Section> 
            
                 <SectionT>
                    {description}
                </SectionT> 
                <Price>
                    <span>R$ {discount}</span>
                    <span>R$ {price}</span>
                </Price>
            </Container>
        </>
    )
}