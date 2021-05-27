import React from "react";
import Axios from "axios";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { Alert, AlertTitle } from '@material-ui/lab';

import { ThemeProvider } from '@material-ui/styles';
import {theme} from '../theme'

const BASE_URL = "https://labeninjas.herokuapp.com"
const header = {
   headers: {Authorization: "65cd8b44-bc64-4203-8eda-5e79cb914ff7"}
}   

export default class Cadastro extends React.Component{

    state = {
        nome: "",
        descricao: "",
        preco: "",
        pagamento: [],
        date: "",

        paypal:false,
        boleto:false,

        cadastro: '0',
        mensagem: ""
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

        Axios
        .post(BASE_URL + "/jobs",body,header)
        .then((resposta) => {
            this.setState({cadastro:'cadastrado',mensagem:resposta.data.message})
            alert(resposta.data.message)
            
        })
        .catch((erro) => {
            this.setState({cadastro:'erro',mensagem:erro.message})
            alert(erro.message)
        })
    }

    

    render(){

            // switch(this.state.cadastro){
            //     case("cadastrado"):
            //     return(
            //         <Alert severity="success">
            //             <AlertTitle>{this.state.mensagem}</AlertTitle>
            //         </Alert>
            //     )
            //     case("erro"):
            //     return(
            //         <Alert severity="error">
            //             <AlertTitle>{this.state.mensagem}</AlertTitle>
            //         </Alert>
            //     )
            // }

        return(
            <ThemeProvider theme={theme}>
                <div>
                    <TextField
                    placeholder = "Nome"
                    onChange = {this.handleNome}
                    />

                    <TextField
                    placeholder = "Descrição"
                    onChange = {this.handleDescricao}
                    />

                    <TextField
                    type = "number"
                    placeholder = "Preço"
                    onChange = {this.handlePreco}
                    />

                    
                    <TextField
                    type = "date"
                    placeholder = "Data"
                    onChange = {this.handleData}
                    />

                    <label for="Paypal">Paypal</label>
                    <Checkbox
                    color="primary"
                    type="checkbox"
                    id="Paypal"
                    name="pagamento"
                    value="Paypal"
                    checked = {this.state.paypal}
                    onChange = {this.handlePaypal}
                    />

                    <label for="Boleto">Boleto</label>
                    <Checkbox
                    color="primary"
                    type="checkbox"
                    id="Boleto"
                    name="pagamento"
                    value="Boleto"
                    checked = {this.state.boleto}
                    onChange = {this.handleBoleto}
                    />

                    <Button variant="contained" color="primary" onClick = {this.cadastrar}>Cadastro</Button>

                </div>
            </ThemeProvider>
        )
    }
}