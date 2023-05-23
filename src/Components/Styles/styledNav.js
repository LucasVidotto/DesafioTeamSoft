import styled from 'styled-components';

export const Nav = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    background-color: #F4F4F4;
    height: 80px;
    
    margin:0;
    padding: 0%;
`
/* export const Nav = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    background-color: #F4F4F4;
    width: 1280px;
    height: 80px;
    padding: 16px 40px;
    gap: 24px;
    margin:0;
    padding: 0%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
` */

export const Box = styled.div`
display:flex;
flex-direction:row;
align-items: center;
margin-left: 114px;
margin-right: 24px;
width: 230px;
height: 48px;
background-color: #FFFFFF;
border-radius: 4px;


img:nth-child(3) {
    color:#D80000;
    width: 12px;
    height: 7.41px;
}

`

export const Figure = styled.figure`
    display:flex;

`
export const Spans = styled.div`
    display:flex;
    flex-direction: column;
    margin-right: auto;
    & > span {
        font-size:12px;
        margin-left: 0.5rem;
        margin-top: 0.5rem;
    }

    span:first-child {
        color:#D80000;
    }
    span:nth-child(2) {
        margin-bottom: 0.5rem;
        color:#656363;
    }

`
export const Search = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: center;
    width: 354px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #ED3237;
    border-radius: 4px;
    input:first-child {
        width: 319px;
        height: 48px;
        margin-left: 16px;
        border: none;
        outline: none;  
    }
`

export const Login = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 88px;
    height: 32px;
    background-color: transparent;
    margin-left: 24px;

    span:nth-child(2){
        color: #ED3237;
        font-size: 16px;
        margin-left: 10.60px;
    }
`