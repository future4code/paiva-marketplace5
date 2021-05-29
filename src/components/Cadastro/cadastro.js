import React from "react";
import Axios from "axios";


const BASE_URL = "https://labeninjas.herokuapp.com/jobs"
const header = {
    headers: {Authorization: "18e8e695-776e-4e9e-8aec-5a0680e34dc2"}
}   

export default class Cadastro extends React.Component{

    state = {
        nome: "",
        descricao: "",
        preco: "",
        pagamento: [],
        date: "",

        paypal:false,
        boleto:false
    }

    /////////////HANDLE////////////////////////////////
    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleDescricao = (event) => {
        this.setState({descricao: event.target.value})
    }

    handlePreco = (event) => {
        this.setState({preco: event.target.value})
    }

    handleData = (event) => {
        this.setState({date: event.target.value})
    }

    handlePaypal = (event) => {
        this.setState({paypal: event.target.checked})
        console.log(this.state.paypal)
        
    }

    handleBoleto = (event) => {
        this.setState({boleto: event.target.checked})
        console.log(this.state.boleto)
        
    }


    //////////////CADASTRO/////////////////////////////////

    cadastrar = () => {
        const metodoPagamento = [] // Array de metodo de pagamento
        
        if(this.state.paypal){
            metodoPagamento.push('PayPal')
        }
        if(this.state.boleto){
            metodoPagamento.push('Boleto')
        }
        

        const body = { 

            "title": this.state.nome,
            "description": this.state.descricao,
            "price":parseInt(this.state.preco),
            "paymentMethods":metodoPagamento,
            "dueDate": this.state.date
        }

        console.log(body)

        Axios
        .post(BASE_URL, body, header)
        .then((resposta) => {
            alert(resposta.data.message)
            
        })
        .catch((erro) => {
            alert(erro.message)
        })
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
                type = "number"
                placeholder = "Preço"
                onChange = {this.handlePreco}
                />

                
                <input
                type = "date"
                placeholder = "Data"
                onChange = {this.handleData}
                />

                <label for="Paypal">Paypal</label>
                <input
                type="checkbox"
                id="Paypal"
                name="pagamento"
                value="Paypal"
                checked = {this.state.paypal}
                onChange = {this.handlePaypal}
                />

                <label for="Boleto">Boleto</label>
                <input
                type="checkbox"
                id="Boleto"
                name="pagamento"
                value="Boleto"
                checked = {this.state.boleto}
                onChange = {this.handleBoleto}
                />

                <button onClick = {this.cadastrar}>Cadastro</button>

            </div>
        )
    }
}