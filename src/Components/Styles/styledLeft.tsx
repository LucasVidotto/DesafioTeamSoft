import styled from 'styled-components';

export const Main = styled.div`
  display:grid;
  grid-template-columns: 60% 40%;
  width:100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
     display:flex;
     flex-direction: column;
     width: 100%;
  }
`
export const Container = styled.div`
  display:flex;
  flex-direction: column;
  max-width: 662px;
  height: 400;
  /* background-color: red; */
  @media (max-width: 768px) {
    width: 100%;
    
  }
  
`
export const Boximage = styled.div`
  display:flex;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  margin-left: 3.5rem;
  align-items: center;
  img:first-child{
    width: auto;
    max-width: 700px;
    height: 100%;
  }
  @media(max-width: 768px){
    max-width: 100vw;
    margin-left: 1rem;
    img:first-child{
      width: 80%;
      height: auto;
      
    }
  }
`
export const Section = styled.span`
  width: 528.56px;
  height: 91.59px;
  margin-left: 66px;
  margin-top: 10px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #4E4E4E;
  flex: none;
  order: 0;
  flex-grow: 0;

  
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const SectionT = styled.div`
  width: 597px;
  height: 65.17px;
  margin-left: 66px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  color: #4E4E4E;
  flex: none;
  order: 2;
  flex-grow: 0;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 16px;
  }
`

export const Span = styled.span`
  margin-left: 6rem;
  margin-top: 3rem;
  font-size:1.75rem;
`

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin-top: 10px;
  margin-left: 66px;
  margin-bottom: 48px;
  gap: 17px;
  width: 249px;
  height: 38px;
  flex: none;
  order: 3;
  flex-grow: 0;
  & > span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    display: flex;
    align-items: center;
    
    }
    span:first-child{
      color: #DC6E05;
      flex: none;
      order: 0;
      flex-grow: 0;
    }
    span:nth-child(2){
      text-decoration-line: line-through;
      color: #4E4E4E;
      flex: none;
      order: 1;
      flex-grow: 0;
    }
`