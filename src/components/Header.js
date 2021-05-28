import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './img/labeninjas2.png';
import cart from './img/cart_ninja.png';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import cardservico from './CardServico/cardservico'

const HeaderContainer = styled.div`
width: 100%;
height: 18vh;
display: flex;
align-items: center;
background: #B7ADD9;
box-shadow: 0px 3px 6px;
opacity: 1;
position: fixed;
padding: 5px;
margin-bottom: 100%;
`
const ButtonsContainer = styled.div`
display: flex;
flex-direction: column;
padding: 2vw;
`

const SelectionBox = styled.div`
width: 70%;
height: 15vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
`

const ButtonGroup = styled.div`
background-color: #EBEBF2;
opacity: 0.9;
`
const Logo = styled.img`
margin-top: 45px;
height: 95%;
background: none;
`
const Cart = styled.img`
margin-top: 65px;
height: 100%;
background: none;
`
const LogoContainer = styled.div`
height:80%;
display :flex;
align-items:center;
justify-content:center;
background-color: none;
`
const LogoButton = styled.a`
height: 100%;
background-color: none;
border:0;
&:hover {
    cursor: pointer;
  }
:focus {
  outline: none;
}
`
const CartContainer = styled.div`
height:80%;
display :flex;
justify-content:flex-end;
background-color: none;
`
const CartButton = styled.a`
height: 100%;
background-color: none;
border:0;
&:hover {
    cursor: pointer;
  }
:focus {
  outline: none;
}
`
const ButtonService = styled.button`
text-transform: uppercase;
border: 3px solid #E44E6D;
border-radius: 7px;
opacity: 1;
width: 180px;
height: 40px;
text-align: center;
color: #0AAA14;
opacity: 1;
background-color: white;
color: #E44E6D;
&:hover{
  background-color: #E44E6D;
  color: white;
  transition: 150ms;
}
&:hover {
    cursor: pointer;
  }
:focus {
  outline: none;
}
`
const ButtonClient = styled.button`
margin-top: 1vh;
text-transform: uppercase;
border: 3px solid #E44E6D;
border-radius: 7px;
opacity: 1;
width: 180px;
height: 40px;
text-align: center;
color: #0AAA14;
opacity: 1;
background-color: white;
color: #E44E6D;
&:hover{
  background-color: #E44E6D;
  color: white;
  transition: 150ms;
}
&:hover {
    cursor: pointer;
  }
:focus {
  outline: none;
}
`
export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <LogoButton>
          <LogoContainer>
            <Logo src={logo}></Logo>
          </LogoContainer>
        </LogoButton>
        <ButtonsContainer>
          <ButtonService>Ofertar Serviço</ButtonService>
          <ButtonClient>Login</ButtonClient>
        </ButtonsContainer>
        <SelectionBox>
            <h3>Serviços por categoria</h3>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <Button>Assistência Técnica</Button>
              <Button>Consultoria</Button>
              <Button>Web Design</Button>
              <Button>Reformas</Button>
              <Button>Serviços Domésticos</Button>
              <Button>Aulas Particulares</Button>
            </ButtonGroup>         
       </SelectionBox> 
       <CartButton>
         <CartContainer>
            <Cart src={cart}></Cart>
         </CartContainer>
       </CartButton>
      </HeaderContainer>
    )
  }
}
