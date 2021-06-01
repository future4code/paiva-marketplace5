import React from 'react';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import {theme} from '../theme'

import Carrinho from '../Carrinho/carrinho';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';

import styled from 'styled-components';

const baseURL = "https://labeninjas.herokuapp.com/jobs";
const header = {
  headers: {
    Authorization: "18e8e695-776e-4e9e-8aec-5a0680e34dc2"
  }
};

const Servicos = styled.div`
  display:flex;

`

const AreaFiltro = styled.div`
  padding: 2rem;
  width: 15vw;
  margin-right: 2rem;
  background-color: #ebebf2;
`

const Filtro = styled.div`
  margin: 1rem;
`
const CardServico = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  grid-template-rows: 1fr 1fr 1fr;
`
const Cards = styled.div`
  margin: 1rem;
`

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
        this.getLocalStore()
        
      }

      componentDidUpdate() {
        
    }

    getLocalStore = () =>{ //Pega os id's no Local Store
      if(localStorage.getItem("idServico")){  
          if (localStorage.getItem("idServico").length > 0) {
              this.setState({idContrato: JSON.parse(localStorage.getItem("idServico"))})
            }
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
            this.setState({servicos: res.data.jobs})
          })
          .catch((err) => {
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


      goCart = () =>{
        this.setState({carrinho: true})
      }

      Contratar = (id,taken) => {
        const body = {
            "taken": !taken
        }
        axios
            .post(baseURL +"/"+id,body,header) //envia taken inverso ao que estava 
            .then((resposta) => {
                const found = this.state.idContrato.find(element => element === id);

                if(!found){
                  this.setState({idContrato: [...this.state.idContrato,id]}) //Envia ID do serviço para o state
                  localStorage.setItem("idServico", JSON.stringify(this.state.idContrato));
                  this.getAllJobs()
              }
            })
            .catch((erro) => {
                alert(erro.message)
            })
    }

    render() {
      
      const servicos = this.filtroValores()
      const cardServico = servicos.map((job) => {
        return <ThemeProvider theme={theme} key = {job.id}>
          <Cards>
            <Card variant="outlined" >
                <CardContent>
                    <Typography variant="h5" component="h2">{job.title}</Typography>
                    <Typography variant="body2" component="p">{job.description}</Typography>
                    <p>R${job.price}</p>
                    <p>{job.paymentMethods.join(',')}</p>
                    <p>{job.dueDate}</p>

                    {job.taken? 'Serviço Indisponível':'Serviço Disponível'}
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" disabled={job.taken} size="small" onClick = {() => this.Contratar(job.id,job.taken)}>

                        Contratar Serviço   
                    </Button>
                </CardActions>

            </Card>

          </Cards>
    </ThemeProvider>
      })      

      if(this.state.carrinho){
        return <Carrinho/>
      }

      return (
          <Servicos>
            <AreaFiltro>
              <h1>Filtros</h1>
              <Filtro>  
                <InputLabel>Valor mínimo: </InputLabel>
                <Input type = "number"
                  onChange={this.onChangeMin}
                />
              </Filtro>
              <Filtro>
                <InputLabel>Valor máximo: </InputLabel>
                <Input type = "number"
                  onChange={this.onChangeMax}
                />
              </Filtro>
              <Filtro>
                <InputLabel>Título: </InputLabel>
                <Input
                  onChange={this.onChangeInputTitulo}
                />
              </Filtro>
              <Filtro>
              <InputLabel>Ordenamento por titulo</InputLabel>
                <NativeSelect onChange={this.ordenaTitulo}>
                  <option value={"default"}>Selecione</option>
                  <option value={"crescente"}>Crescente</option>
                  <option value={"decrescente"}>Decrescente</option>
                </NativeSelect>
              </Filtro>


              <Filtro>
              <InputLabel>Ordenamento por preço</InputLabel>
                <NativeSelect onChange={this.ordenaPrice}>
                  <option value={"default"}>Selecione</option>
                  <option value={"crescente"}>Crescente</option>
                  <option value={"decrescente"}>Decrescente</option>

                </NativeSelect>
              </Filtro>

              <Filtro>
                <InputLabel>Ordenamento por prazo</InputLabel>
                <NativeSelect onChange={this.ordenaDueDate}>
                  <option value={"default"}>Selecione</option>
                  <option value={"crescente"}>Crescente</option>
                  <option value={"decrescente"}>Decrescente</option>

                </NativeSelect>
              </Filtro>

            </AreaFiltro>
            <CardServico>
              {cardServico}
            </CardServico>

          </Servicos>

        )
    }
}