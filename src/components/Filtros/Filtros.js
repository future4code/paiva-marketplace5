import React from 'react';
import axios from 'axios';
import CardServico from '../CardServico/cardservico'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import {theme} from '../theme'
import Carrinho from '../Carrinho/carrinho';

const baseURL = "https://labeninjas.herokuapp.com/jobs";
const header = {
  headers: {
    Authorization: "18e8e695-776e-4e9e-8aec-5a0680e34dc2"
  }
};

export default class Filtros extends React.Component {

    state = {
        inputMin: "",
        inputMax: Infinity,
        inputTitulo: "",
        inputDescricao: "",
        servicos: [],
        listaOrdenada: [],
        tipoOrdenamento: "",
        idContrato: [],
        carrinho: false
      }
      componentDidMount() {
        this.getAllJobs()
      }

      componentDidUpdate() {
        if(this.state.idContrato.length > 0){
            localStorage.setItem("idServico", JSON.stringify(this.state.idContrato));
        }
        
    }

    //Inputs controlados
      onChangeMin = (e) => {
        this.setState({inputMin: e.target.value})
      }
      onChangeMax = (e) => {
        this.setState({inputMax: e.target.value})
        if (e.target.value === "") {
          this.setState({inputMax: Infinity})
        }
      }
      onChangeInputTitulo = (e) => {
        this.setState({inputTitulo: e.target.value})       
      }

      //Método API
      getAllJobs = () => {

        axios.get(baseURL, header)
          .then((res) => {
            console.log(res.data.jobs)
            this.setState({servicos: res.data.jobs})
          })
          .catch((err) => {
            console.log(err.data);
          });
      }

      filtroValores = () => {
        
        return this.state.servicos
          .filter((servico) => servico.title.toLowerCase().includes(this.state.inputTitulo.toLowerCase()) || servico.description.toLowerCase().includes(this.state.inputTitulo.toLowerCase()) )
          .filter((servico) => servico.price <= this.state.inputMax)
          .filter((servico) => servico.price >= this.state.inputMin)
      }

      ordenaTitulo = (e) => { //Organiza em ordem alfabética 
        if (e.target.value === "crescente") {
          const ordemCrescente = this.state.servicos.sort(function (a, b) {
            if (a.title > b.title) {
              return 1;
            } else if (a.title < b.title) {
              return -1;
            }
            return 0;
          });
          this.setState({ listaOrdenada: ordemCrescente });
        } else if (e.target.value === "decrescente") {
          console.log("entrei em decrescente");
          const ordemDecrescente = this.state.servicos.sort(function (a, b) {
            if (a.title < b.title) {
              return 1;
            } else if (a.title > b.title) {
              return -1;
            }
            return 0;
          });
    
          this.setState({ listaOrdenada: ordemDecrescente });
        }
      };
    
      ordenaPrice = (e) => { //Organiza pelo preço
        if (e.target.value === "crescente") {
          const ordemCrescente = this.state.servicos.sort(function (a, b) {
            if (a.price > b.price) {
              return 1;
            } else if (a.price < b.price) {
              return -1;
            }
            return 0;
          });
          this.setState({ listaOrdenada: ordemCrescente });
        } else if (e.target.value === "decrescente") {
          console.log("entrei em decrescente");
          const ordemDecrescente = this.state.servicos.sort(function (a, b) {
            if (a.price < b.price) {
              return 1;
            } else if (a.price > b.price) {
              return -1;
            }
            return 0;
          });
    
          this.setState({ listaOrdenada: ordemDecrescente });
        }
      };
     
      ordenaDueDate = (e) => { //Organiza pela data de vencimento
        if (e.target.value === "crescente") {
          const ordemCrescente = this.state.servicos.sort(function (a, b) {
            if (a.dueDate > b.dueDate) {
              return 1;
            } else if (a.dueDate < b.dueDate) {
              return -1;
            }
            return 0;
          });
          this.setState({ listaOrdenada: ordemCrescente });
        } else if (e.target.value === "decrescente") {
          console.log("entrei em decrescente");
          const ordemDecrescente = this.state.servicos.sort(function (a, b) {
            if (a.dueDate < b.dueDate) {
              return 1;
            } else if (a.dueDate > b.dueDate) {
              return -1;
            }
            return 0;
          });
    
          this.setState({ listaOrdenada: ordemDecrescente });
        }
      };

      Contratar = (id,taken) => {
        const body = {
            "taken": !taken
        }

        axios
            .post(baseURL +"/"+id,body,header) //envia taken inverso ao que estava 
            .then((resposta) => {
                const idServico = id
                this.setState({idContrato: [...this.state.idContrato,idServico],carrinho: true }) //Envia ID do serviço para o state
            })
            .catch((erro) => {
                alert(erro.message)
            })
    }

    render() {
      
      const servicos = this.filtroValores()
      const cardServico = servicos.map((job) => {
        return <ThemeProvider theme={theme} key = {job.id}>
            <Card variant="outlined" >
                <CardContent>
                    <Typography variant="h5" component="h2">{job.title}</Typography>
                    <Typography variant="body2" component="p">{job.description}</Typography>
                    <p>R${job.price}</p>
                    <p>{job.paymentMethods.join(',')}</p>
                    <p>{job.dueDate}</p>
                    
                </CardContent>
                <CardActions>
                    <Button disabled={job.taken} size="small" onClick = {() => this.Contratar(job.id,job.taken)}>
                        Contratar Serviço   
                    </Button>
                </CardActions>

            </Card>
    </ThemeProvider>
      })      

      if(this.state.carrinho){
        return <Carrinho/>
      }

      return (
          <div>
              <h1>Filtros</h1>
              <label>Valor mínimo: </label>
              <input type = "number"
                onChange={this.onChangeMin}
              />

              <br/>

              <label>Valor máximo: </label>
              <input type = "number"
                onChange={this.onChangeMax}
              />
                          
              <br/>

              <label>Título: </label>
              <input
                onChange={this.onChangeInputTitulo}
              />
              
              <br/>

              <label>Ordenamento por titulo</label>
              <select onChange={this.ordenaTitulo}>
                <option value={"default"}>Selecione</option>
                <option value={"crescente"}>crescente</option>
                <option value={"decrescente"}>decrescente</option>
              </select>

              <label>Ordenamento por preço</label>
              <select onChange={this.ordenaPrice}>
                <option value={"default"}>Selecione</option>
                <option value={"crescente"}>crescente</option>
                <option value={"decrescente"}>decrescente</option>
              </select>

              <label>Ordenamento por prazo</label>
              <select onChange={this.ordenaDueDate}>
                <option value={"default"}>Selecione</option>
                <option value={"crescente"}>crescente</option>
                <option value={"decrescente"}>decrescente</option>
              </select>

              {cardServico}
            </div>
        )
    }
}