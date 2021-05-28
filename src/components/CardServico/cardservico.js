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
   headers: {Authorization: "65cd8b44-bc64-4203-8eda-5e79cb914ff7"}
}   


const Div = styled.div`
    display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 1fr 1fr 1fr;


`

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


>>>>>>> 639684aa564b0751514a3bfda800577ba0bffdb8
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

    Contratar = (id,taken) => {
        const body = {
            "taken": !taken
        }

        Axios
            .post(BASE_URL +"/jobs/"+id,body,header) //envia taken inverso ao que estava 
            .then((resposta) => {
                const idServico = id
<<<<<<< HEAD
                this.setState({idContrato: [...this.state.idContrato,idServico]})
                console.log(this.state.idContrato)
                this.getJob()
=======
                this.setState({idContrato: [...this.state.idContrato,idServico]}) //Envia ID do serviço para o state
                alert(resposta.data.message)
                this.getJob() //atualiza a lista de trabalho
>>>>>>> 639684aa564b0751514a3bfda800577ba0bffdb8

            })
            .catch((erro) => {
                alert(erro)
            })
    }

    handleJobs = (jobs) => {
        this.setState({jobs: jobs}) // Recebendo lista de trabalho
    }



    render(){

        const jobsList = this.state.jobs.map((job) => {
                return <ThemeProvider theme={theme} key = {job.id}>
                    <Card variant="outlined" >
                        <CardContent>
                            <Typography variant="h5" component="h2">{job.title}</Typography>
                            <Typography variant="body2" component="p">{job.description}</Typography>
                            <p>R${job.price}</p>
                            <p>{job.paymentMethods.join(',')}</p>
<<<<<<< HEAD
                            <p>{job.taken ? 'Contratado':'Não contratado'}</p>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick = {() => this.Contratar(job.id,job.taken)}>
                                Contratar Serviço
=======
                            <p>{job.taken ? 'Contratado':'Não contratado'}</p> 
                        </CardContent>
                        <CardActions>
                            <Button disabled={job.taken} size="small" onClick = {() => this.Contratar(job.id,job.taken)}>
                                Contratar Serviço   
>>>>>>> 639684aa564b0751514a3bfda800577ba0bffdb8
                            </Button>
                        </CardActions>

                    </Card>
            </ThemeProvider>
            
        }) 

        return(
            <Div>
            {jobsList}
            </Div>
        )
    }
}