import styled from 'styled-components';
import { List, Icon, Menu } from 'semantic-ui-react';

export const Body = styled.body `
  background: lightblue;
  

`


export const Img =styled.img`
  width: 100%;
  height: 200px;
`

export const Icons = styled(Icon)`
  &:hover {
    cursor: pointer !important;
    border: 1px solid black;
    justify-content: center;
  }

`

export const Footer = styled.footer `

  display: grid;
  grid-template-columns: auto;
  margin-top: 500px;
  padding-bottom: 100px;
  border-top: 1px solid grey;
  text-align: center;

`

export const Btn = styled(Menu)`
  border: 1px solid black;
  width: 10%;
  padding-top: 8px;
  justify-content: center;
  color: red;
  &:hover {
    border: 1px solid red;
    color: black;
  }
`
export const Btn1 = styled.button`
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  background: #ffcf40;
  &:hover {
    border: 1px solid red;
    color: white;
    background: #ffdc73;
    border: 1px solid white;
  }
`

export const Divpad =styled.div`
padding-left: 20px;
`

export const H1 = styled.h1`
  text-align: center;
  color: white;
  font-size: 50px;
  text-decoration: underline;
`

export const Icon1 = styled(Icon)`
display: flex;
align-self: center;

`