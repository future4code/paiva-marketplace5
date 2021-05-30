import React from "react";
import Axios from "axios";
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import styled from 'styled-components';
import { ThemeProvider } from '@material-ui/styles';
import {theme} from '../theme'

const BASE_URL = "https://labeninjas.herokuapp.com/jobs"
const header = {
    headers: {Authorization: "18e8e695-776e-4e9e-8aec-5a0680e34dc2"}

}

const BodyCadastro = styled.div`
    display: flex;
    justify-content:center;
    height:80vh;
`

const AreaCadastro = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #ebebf2;
    width: 50%;
    padding: 2rem;
    height: 60vh;
`

const InputCadastro = styled.div`
    margin-bottom: 2rem;
    width:100%;
`


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
    }

    handleBoleto = (event) => {
        this.setState({boleto: event.target.checked})

        
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
        <ThemeProvider theme={theme}>
            <BodyCadastro>
                <AreaCadastro>
                <h1>Cadastro de Serviço</h1>
                    <InputCadastro>
                        <Input
                        placeholder = "Nome"
                        maxlength="30"
                        onChange = {this.handleNome}
                        />
                    </InputCadastro>
                    <InputCadastro>
                        <Input
                        placeholder = "Descrição"
                        maxlength="100"
                        onChange = {this.handleDescricao}
                        />
                    </InputCadastro>
                    <InputCadastro>
                        <Input
                        type = "number"
                        placeholder = "Preço"
                        onChange = {this.handlePreco}
                        />
                    </InputCadastro>
                    <h2>Vencimento de Serviço</h2>
                    <InputCadastro>   
                        <Input
                        type = "date"
                        placeholder = "Data"
                        name = "data"
                        onChange = {this.handleData}
                        />
                    </InputCadastro>
                    <h2>Modelos de Pagamento</h2>
                    <InputCadastro>
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
                    </InputCadastro>
                    <Button variant="contained" color="primary" onClick = {this.cadastrar}>Cadastro</Button>

                </AreaCadastro>
            </BodyCadastro>
        </ThemeProvider>
        )
    }
}