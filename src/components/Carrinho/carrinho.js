import React from "react"
import Axios from "axios"

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { ThemeProvider } from '@material-ui/styles';
import {theme} from '../theme'

const BASE_URL = "https://labeninjas.herokuapp.com/jobs"
const header = {
   headers: {Authorization: "18e8e695-776e-4e9e-8aec-5a0680e34dc2"}
}   

export default class Carrinho extends React.Component{
    state = {
        servicosCarrinho: []
    }
    componentDidMount(){
        this.getLocalStore()
        this.getCarrinho(this.getLocalStore())

    }

    getLocalStore = () =>{ //Pega os id's no Local Store
        if(localStorage.getItem("idServico")){  
            console.log(JSON.parse(localStorage.getItem("idServico")))
            if (localStorage.getItem("idServico").length > 0) {
                const idServico = JSON.parse(localStorage.getItem("idServico"))
                return idServico
              }else{
                  alert("Carrinho vazio")
              }
        }
 
    }

    getCarrinho = (servicos) =>{ //
        if(servicos){
            servicos.map((servico) => {
                Axios
                .get(BASE_URL + `/${servico}`,header)
                .then((resposta) => {
                    this.setState({servicosCarrinho: [...this.state.servicosCarrinho,resposta.data]})
                })
                .catch((erro) => {
                    alert(erro.message)
                })
          })
        }

    }

    finalizarPedido = (id) =>{ //Envia para uma pagina com "Pedido finalizado"
        alert("Seu pedido foi finalizado")
        this.apagadorPedido(id)
    }

    Contratar = (id) => {
        const body = {
            "taken": false
        }

        Axios
            .post(BASE_URL +"/"+id,body,header) //envia taken falso
            .then((resposta) => {
                alert('Pedido cancelado')

            })
            .catch((erro) => {
                alert(erro)
            })
    }

    apagadorPedido = (id) =>{
        const novoPedido = [...this.state.servicosCarrinho]

        const pedidoFiltrado = novoPedido.filter((servico) => {
            return servico.id !== id
        })

        this.setState({servicosCarrinho: pedidoFiltrado})
        console.log(pedidoFiltrado)
    
       const idFiltrado = pedidoFiltrado.map((pedido) => {
            return pedido.id
        })

        localStorage.setItem("idServico", JSON.stringify(idFiltrado));
    }

    apagarPedido =(id) =>{
        this.apagadorPedido(id)
        this.Contratar(id) //Liberar serviço para contrato 

    }





    render(){

        const getServicos = this.state.servicosCarrinho.map((servico) =>{
            return <ThemeProvider theme={theme} key = {servico.id}>
                    <Card variant="outlined" >
                        <CardContent>
                            <Typography variant="h5" component="h2">{servico.title}</Typography>
                            <Typography variant="body2" component="p">{servico.description}</Typography>
                            <p>R${servico.price}</p>
                            <p>{servico.paymentMethods.join(',')}</p>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick = {() => this.finalizarPedido(servico.id)}>
                                Finalizar pedido
                            </Button>

                            <Button size="small" onClick = {() => this.apagarPedido(servico.id)}>
                                Cancelar pedido
                            </Button>

                        </CardActions>

                    </Card>
            </ThemeProvider>
        })

        return(
            <div>
                <h1>Carrinho</h1>
                {JSON.parse(localStorage.getItem("idServico")).length > 0 ? getServicos: "Carrinho está vazio"}
            </div>

            
        )
    }
}