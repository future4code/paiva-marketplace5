import React from "react";
import Axios from "axios";
import styled from 'styled-components'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { ThemeProvider } from '@material-ui/styles';
import {theme} from '../theme'

const BASE_URL = "https://labeninjas.herokuapp.com"
const header = {
   headers: {Authorization: "18e8e695-776e-4e9e-8aec-5a0680e34dc2"}
}   




export default class CardServico extends React.Component{

    

    state = {
        jobs : [],
        idContrato: []
    }

    componentDidMount(){
        this.getJob() //Buscando lista de trabalho
    }

    componentDidUpdate() {
        if(this.state.idContrato.length > 0){
            localStorage.setItem("idServico", JSON.stringify(this.state.idContrato));
        }
        
    }


    getJob = () => {
        Axios
            .get(BASE_URL + "/jobs",header)
            .then((resposta) => {
                this.handleJobs(resposta.data.jobs) //Enviando a lista de trabalho
            })
            .catch((erro) => {
                alert(erro.statusText)
            })
    }



    handleJobs = (jobs) => {
        this.setState({jobs: jobs}) // Recebendo lista de trabalho
    }



    render(){

        const jobsList = this.state.jobs.map((job) => {
                return <ThemeProvider  key = {job.id}>
                    <Card variant="outlined" >
                        <CardContent>
                            <Typography variant="h5" component="h2">{job.title}</Typography>
                            <Typography variant="body2" component="p">{job.description}</Typography>
                            <p>R${job.price}</p>
                            <p>{job.paymentMethods.join(',')}</p>
                            
                        </CardContent>
                        <CardActions>
                            <Button disabled={job.taken} size="small" onClick = {() => this.Contratar(job.id,job.taken)}>
                                Contratar Serviço   
                            </Button>
                        </CardActions>

                    </Card>
            </ThemeProvider>
            
        }) 

        return(
            <h1>CardServico</h1>
        )
    }
}