import styled from 'styled-components';

export const ServiceSes = styled.h1`
  background: linear-gradient(to bottom right, yellow, black);
  color: white;
  font-size: ${props => props.large ? "4rem" : '2rem'}
`
export const HomeSubTitle = styled.h2`
  color: white;
  background: green;
  font-size: 23px;
`

export const HH = styled.h5`
  background: lightgrey;
  color: black;
`
export const Div = styled.div`
margin-left: 5px;
margin-right: 5px;
background: lightgrey;
padding-left: 25px;
padding-top: 20px;
padding-bottom: 20px;
`
export const MyButton = styled.button`
  border-radius: 20px;
  color: red;
  &:hover {
    background: white; 
    cursor: pointer;
  }
`

export const B = styled.div`


`
