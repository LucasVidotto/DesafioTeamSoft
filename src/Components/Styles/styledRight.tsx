import styled from 'styled-components';
interface QuantiProps {
    valor: number;
  }
/* export const Right = styled.div`
  display:flex;
  flex-direction: column;
  margin-top:3rem;
  margin-left:2rem;
  width: 60%;
  height: 80vh;
  border: solid 2px  #686868;
  border-radius: 0.75rem;
` */

export const ContainerRight =  styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 21px;
    width: 439px;
    height: 592px;
    border: 1px solid #686868;
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 0;
`
export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;
    width: 375px;
    height: 537px;
    /* overflow-y: scroll; */
    flex: none;
    order: 0;
    flex-grow: 1;
`
export const AddItems = styled.div`
    display:flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 375px;
    height: 55px;
    left: 0px;
    top: 0px;
    background: rgba(253, 215, 14, 0.2);
`
export const RSpanOne = styled.span`
    position: absolute;
    width: 343px;
    height: 23px;
    left: 16px;
    top: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #4E4E4E;
`
export const RSpanTwo = styled.span`
    position: absolute;
    width: 343px;
    height: 16px;
    left: 16px;
    top: 31px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #E49700;
`

export const Items = styled.div`
    width: 359px;
    height: 89px;
    flex: none;
    order: 1;
    flex-grow: 0;
`
export const BoxSpan = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 359px;
    height: 88px;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 1.12%;
    background: #FFFFFF;

    span:nth-child(2){
        color:#F09035;
    }
`

export const Line = styled.div`
    position: relative;
    width: 343px;
    height: 0px;
    left: 8px;
    top: -20px;
    border: 1px solid #E8A634;
`

export const Quanti = styled.div<QuantiProps>`
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    position: relative;
    width: 89px;
    height: 32px;
    left: 262px;
    top: -61px;
    border: solid 1px #F09035;
    border-radius:4px;
    & > button{
        /* width: 14px;
        height: 18px; */
        color: #D80000;

        background: transparent;
        border:none;
        cursor:pointer;
        margin:auto;
    }
    button:first-child{
        color: ${(props) => (props.valor <= 0 ? '#AEB6C1' : '#D80000')};
    }
    /* button:nth-child(2){
        position: relative;
        left: -20.83%;
        right: 20.83%;
        top: 19.83%;
        bottom: 45.83%;
        width: 24px;
    } */
`
