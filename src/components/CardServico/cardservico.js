import React from "react";
import Axios from "axios";

const BASE_URL = "https://labeninjas.herokuapp.com"
const header = {
   headers: {Authorization: "65cd8b44-bc64-4203-8eda-5e79cb914ff7"}
}   
export default class CardServico extends React.Component{

    state = {
        jobs : []
    }

    componentDidMount(){
        this.getJob() //Buscando lista de trabalho
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
        console.log(this.state.jobs)
    }



    render(){

        const jobsList = this.state.jobs.map((job) => {
            return <div>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <p>{job.price}</p>
            </div>
            
        }) 

        return(
            <div>
            {jobsList}
            </div>
        )
    }
}