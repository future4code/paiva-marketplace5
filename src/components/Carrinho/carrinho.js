import React from "react"
import Axios from "axios"

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { ThemeProvider } from '@material-ui/styles';
import {theme} from '../theme'

const BASE_URL = "https://labeninjas.herokuapp.com"
const header = {
   headers: {Authorization: "65cd8b44-bc64-4203-8eda-5e79cb914ff7"}
}   

export default class Carrinho extends React.Component{
    state = {
        servicosCarrinho: []
    }
    componentDidMount(){
        this.getCarrinho(this.getLocalStore())

    }

    getLocalStore = () =>{ //Pega os id's no Local Store
        if(localStorage.getItem("idServico")){  
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
                .get(BASE_URL + `/jobs/${servico}`,header)
                .then((resposta) => {
                    this.setState({servicosCarrinho: [...this.state.servicosCarrinho,resposta.data]})
                    console.log(this.state.servicosCarrinho)
                })
                .catch((erro) => {
                    alert(erro.message)
                })
          })
        }

    }

    finalizarPedido = () =>{ //Envia para uma pagina com "Pedido finalizado"
        alert("Em construção")
    }

    apagarPedido = (id) =>{
        const novoPedido = [...this.state.servicosCarrinho]

        const pedidoFiltrado = novoPedido.filter((servico) => {
            return servico.id !== id
        })

        this.setState({servicosCarrinho: pedidoFiltrado})

        //Ainda estou trabalhando para remover do LocalStore
    
        // pedidoFiltrado.map((pedido) => {
        //     const storeFiltrado = [...storeFiltrado,pedido.id]   
        //     console.log(storeFiltrado)        
        // })


        // localStorage.setItem("idServico", JSON.stringify());
    }



    render(){

        const getServicos = this.state.servicosCarrinho.map((servico) =>{
            return <ThemeProvider theme={theme} key = {servico.id}>
                    <Card variant="outlined" >
                        <CardContent>
                            <h1>{servico.id}</h1>
                            <Typography variant="h5" component="h2">{servico.title}</Typography>
                            <Typography variant="body2" component="p">{servico.description}</Typography>
                            <p>R${servico.price}</p>
                            <p>{servico.paymentMethods.join(',')}</p>
                            <p>{servico.taken ? 'Contratado':'Não contratado'}</p> 
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick = {this.finalizarPedido}>
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
                {getServicos}
            </div>

            
        )
    }
}