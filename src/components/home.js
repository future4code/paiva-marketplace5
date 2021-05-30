import React from "react";
import Cadastro from "./Cadastro/cadastro";
import Filtros from "./Filtros/Filtros";
import Carrinho from "./Carrinho/carrinho"

export default class Home extends React.Component{
    render(){

        switch(this.props.pagina){
            case 'carrinho':
                return <Carrinho/>
            case 'cadastro':
                return <Cadastro/>
            case 'servicos':
                return <Filtros/>
        }
        return(
            <div>
                
            </div>
        )
    }
}