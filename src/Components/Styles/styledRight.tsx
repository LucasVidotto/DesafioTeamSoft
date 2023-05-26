import styled from 'styled-components';
interface QuantiProps {
    valor: number;
    total:number;
  }

export const ContainerRight =  styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    margin-top:2rem;
    margin-bottom:2rem;
    gap: 21px;
    width: 439px;
    height: 730px;
    border: 1px solid #686868;
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 0;
    @media(max-width:768px){
        max-width: 100%;
        width: 100%;
        border:none;
    }
    @media(max-width:450px){
        margin-left: 20px;
        margin-right: auto;
    }
`
export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 16px;
    width: 375px;
    height: 537px;
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
    top: 28px;
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
    align-items: center;
    position: relative;
    width: 89px;
    height: 32px;
    left: 262px;
    top: -61px;
    border: solid 1px #F09035;
    border-radius:4px;
    & > button{
        color: #D80000;
        background: transparent;
        border:none;
        cursor:pointer;
        margin:auto;
    }
    button:first-child{
        color: ${(props) => (props.valor <= 0 ? '#AEB6C1' : '#D80000')};
        pointer-events: ${(props)=> (props.valor <= 0 ? 'none': 'all')}
    }
    button:last-child{
        color: ${(props) => (props.total >= 8 ? '#AEB6C1'  : '#D80000')};
        pointer-events: ${(props)=> (props.total >= 8 ? 'none': 'all')}
    }
    @media (max-width:768px) {
        margin: 0;
    }
`
export const ContainerTalher = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 375px;
    height: 55px;
    left: 0px;
    top: 21px;
    background: rgba(253, 215, 14, 0.2);
    order:2;
    margin: 0 32px;
    span:first-child{
        margin-left: 1rem;
    }
`
export const YesNo = styled.div`
    display:flex;
    width: 70%;
    flex-direction: column;
    justify-content:space-between;
    align-items: end;
`


export const SideT = styled.div`
    position: absolute;
    width: 343px;
    height: 23px;
    left: 16px;
    top: 499px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #4E4E4E;
`

export const Finish  = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 18px;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px;
    gap: 16px;
    width: 375px;
    height: 30px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    button:nth-child(2){
        position: relative;
        width: 219px;
        height: 40px;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 0%;
        background: #F09035;
        border-radius: 4px;
        border:none;
        cursor:pointer;
        &:hover {
            background-color: #f48628;
        }
        @media(max-width:410px){
            max-width: 150px;
            width: 150px;
            margin-right: 15%;
        }
    }
    
`
export const MoreLess = styled.div<QuantiProps>`
    display:flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 140px;
    height:40px;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: #FFFFFF;
    border: 1px solid #F09035;
    border-radius: 4px;
    & > button{
        color: #D80000;
        background: transparent;
        border:none;
        cursor:pointer;
        margin:auto;
    }
    button:first-child{
        color: ${(props) => (props.valor <= 0 ? '#AEB6C1' : '#D80000')};
    }
`