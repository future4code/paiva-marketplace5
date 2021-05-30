import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './img/labeninjas2.png';
import cart from './img/cart_ninja.png';
import cartCheio from './img/carrinhocheio.png';
import Button from '@material-ui/core/Button';
import Carrinho from './Carrinho/carrinho'
import Cadastro from './Cadastro/cadastro';
import CardServico from './CardServico/cardservico';

const HeaderContainer = styled.div`
width: 100%;
height: 18vh;
display: flex;
justify-content: space-between;
align-items: center;
background: #B7ADD9;
box-shadow: 0px 3px 6px;
opacity: 1;
padding: 5px;
`

const Logo = styled.img`
margin-top: 45px;
height: 160px;
background: none;
`
const Cart = styled.img`
margin-top: 65px;
height: 80%;
background: none;
`
const LogoContainer = styled.div`
display :flex;
align-items:center;
justify-content:center;
background-color: none;
`
const LogoButton = styled.a`
display: flex;
align-items: center;
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

  state ={
    pagina: 'servicos',
  }

  checkCarrinho = () =>{
    if(localStorage.getItem("idServico")){  
      if (localStorage.getItem("idServico").length >= 1) {
        return true 
      }
    }
    return false
  }

  render() {


    return (
      <HeaderContainer>
        <LogoButton>
          <LogoContainer>
            <Logo src={logo} onClick={() => this.props.btnPagina('servicos')}></Logo>
          </LogoContainer>
          <ButtonService onClick={() => this.props.btnPagina('cadastro')}>Ofertar Serviço</ButtonService>
        </LogoButton>

       <CartButton>
         <CartContainer>
            <Cart src={JSON.parse(localStorage.getItem("idServico")).length > 0 ? cartCheio : cart} onClick={() => this.props.btnPagina('carrinho')}></Cart>
         </CartContainer>
       </CartButton>
      </HeaderContainer>

    )
  } 
}
