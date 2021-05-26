import React from "react";

export default class Cadastro extends React.Component{

    state = {
        nome: "",
        descricao: "",
        preco: "",
        pagamento: ""
    }

    /////////////HANDLE////////////////////////////////
    handleNome = (event) => {
    }

    handleDescricao = (event) => {
        this.setState({descricao: event.target.value})
    }

    handlePreco = (event) => {
        this.setState({descricao: event.target.value})
    }

    handlePagamento = (event) => {
        this.setState({pagamento: event.target.value})
    }


    //////////////CADASTRO/////////////////////////////////
    cadastrar = () => {
        alert("Ainda em construção")
    }


    render(){
        return(
            <div>
                <input
                placeholder = "Nome"
                onChange = {this.handleNome}
                />

                <input
                placeholder = "Descrição"
                onChange = {this.handleDescricao}
                />

                <input
                placeholder = "Preço"
                onChange = {this.handlePreco}
                />

                <label for="Paypal">Paypal</label>
                <input
                type="radio"
                id="Paypal"
                name="pagamento"
                value="Paypal"
                onChange = {this.handlePagamento}
                />

                <label for="Boleto">Boleto</label>
                <input
                type="radio"
                id="Boleto"
                name="pagamento"
                value="Boleto"
                onChange = {this.handlePagamento}
                />

                <button onClick = {this.cadastrar}>Cadastro</button>

            </div>
        )
    }
}