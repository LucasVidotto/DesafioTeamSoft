import styled from 'styled-components';

export const Popov = styled.div`
    display: flex;
    position: absolute;
    top:10%;
    left: 75%;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    width: 208px;
    height: 154px;
    filter: drop-shadow(0px -1px 4px rgba(0, 0, 0, 0.25));
    z-index:1;
`
export const Trian = styled.div`
     width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 16px solid #F09035;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const Top = styled.div`
    width: 208px;
    height: 32px;
    padding: 8px 11px;
    background: #F09035;
    border-radius: 4px 4px 0px 0px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`

export const Closed = styled.div`
   position:absolute;
   width: 18px;
   height: 15px;
   top: 15%;
   left: 100%;
   cursor:pointer;
`

 export const Bot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 11px;
    gap: 8px;
    width: 208px;
    min-height: 114px;
    background: #F8F8F8;
    border-radius: 0px 0px 4px 4px;
    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
 `