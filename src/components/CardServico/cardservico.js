import React from "react";
import Axios from "axios";
import styled from 'styled-components'

const BASE_URL = "https://labeninjas.herokuapp.com"
const header = {
   headers: {Authorization: "65cd8b44-bc64-4203-8eda-5e79cb914ff7"}
}   


const Div = styled.div`
    display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 1fr 1fr 1fr;


`

const Card = styled.div`
    background: gray;
    width: 500px;
    padding: 1rem;
    margin: 1rem;
    border: solid 1px black;
`
export default class CardServico extends React.Component{

    

    state = {
        jobs : []
    }

    componentDidMount(){
        this.getJob() //Buscando lista de trabalho
        console.log(this.state.jobs)
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

    Contratar = (id,taken) => {
        const body = {
            "taken": !taken
        }

        Axios
            .post(BASE_URL +"/jobs/"+id,body,header)
            .then((resposta) => {
                this.getJob()
            })
            .catch((erro) => {
                alert(erro.statusText)
            })
    }

    handleJobs = (jobs) => {
        this.setState({jobs: jobs}) // Recebendo lista de trabalho
        console.log(this.state.jobs)
    }



    render(){

        const jobsList = this.state.jobs.map((job) => {
            return <Card key = {job.id}>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <p>R${job.price}</p>
                <p>{job.paymentMethods.join(',')}</p>
                <p>{job.taken ? 'Contratado':'Não contratado'}</p>
                <button onClick = {() => this.Contratar(job.id,job.taken)}>
                    Contratar Serviço
                </button>
            </Card>
            
        }) 

        return(
            <Div>
            {jobsList}
            </Div>
        )
    }
}