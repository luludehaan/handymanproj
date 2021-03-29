import styled from 'styled-components';
import { Icon, Menu } from 'semantic-ui-react';

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
    
  }

`

export const Footer = styled.footer `
  display: grid;
  grid-template-columns: auto;
  margin-top: 500px;
  padding-bottom: 100px;
  border-top: 1px solid grey;

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