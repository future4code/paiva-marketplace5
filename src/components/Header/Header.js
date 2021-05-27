import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../img/labeninjas2.png';
import cart from '../img/cart_ninja.jpg';





const HeaderContainer = styled.div`
width: 100%;
height: 18vh;
display: flex;
justify-content: space-around;
align-items: center;
background: #B7ADD9;
box-shadow: 0px 3px 6px;
opacity: 1;
position: fixed;
top: 0;
z-index: 10;
`
const SelectionBox = styled.div`
width: 80%;
height: 15vh;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
`
const ServiceContainer = styled.div`
flex: 1;
`

const ClientContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
text-align:center;
flex: 1;
justify-content: flex-end;
`

const Logo = styled.img`
height: 80%;
`

const LogoContainer = styled.div`
height:80%;
display :flex;
align-items:center;
justify-content:center;
`
const LogoButton = styled.button`
height: 100%;
background-color: #FFF;
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
text-transform: uppercase;
border: 0;
border-radius: 7px;
opacity: 1;
height: 40px;
text-align: center;
letter-spacing: 0px;
opacity: 1;
background-color: white;
color: #E44E6D;
text-decoration: none;
padding-bottom: 2px;
margin-right: 20px;
&:hover{
  border-bottom: 2px solid #E44E6D;
  transition: 150ms;
  cursor: pointer;
  border-radius: 0px;
}
:focus {
  outline: none;
}
`
const ButtonCart = styled.button`
width: 50px;
height: 45px;
background-color: white;
border: 0;
position: relative;
&:hover {
    cursor: pointer;
  }
:focus {
  outline: none;
}
`
const Cart = styled.img`
height:30px;
`

const CartContainer = styled.div`
  background: #A191D9 0% 0% no-repeat padding-box;
  width: 22px;
  height: 22px;
  border-radius: 100px;
  color: white;
  position: absolute;
  top: -5px;
  right: 0;
`

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>

        <ServiceContainer>
          <ButtonService onClick={this.props.servicePage}>
            Ofertar Serviço
          </ButtonService>
        </ServiceContainer>
        <LogoButton>
          <LogoContainer>
            <Logo src={logo} onClick={this.props.homePage}>
            </Logo>
          </LogoContainer>
        </LogoButton>
        <ClientContainer>
          <ButtonClient>Login</ButtonClient>
          <ButtonCart><Cart img src={cart}></Cart>
            <CartContainer>Carrinho</CartContainer>
          </ButtonCart>
        </ClientContainer>

        <SelectionBox>
          <h3>Categorias</h3>
          <button type="submit">Assistência Técnica</button>
          <button type="submit">Consultoria</button>
          <button type="submit">Web Design</button>
          <button type="submit">Reformas</button>
        </SelectionBox>
      </HeaderContainer>
    )
  }
}

