import React from "react"
import Axios from "axios"

const BASE_URL = "https://labeninjas.herokuapp.com"
const header = {
   headers: {Authorization: "65cd8b44-bc64-4203-8eda-5e79cb914ff7"}
}   

export default class Carrinho extends React.Component{
    state = {
        servicosCarrinho: []
    }
    componentDidMount(){
        

    }

    getLocalStore = () =>{
        if (localStorage.getItem("idServico").length > 0) {
            const idServico = JSON.parse(localStorage.getItem("idServico"))
            return idServico
          }else{
              alert("Carrinho vazio")
          }
    }

    getCarrinho = (servicos) =>{
        
          servicos.map((servico) => {
                Axios
                .get(BASE_URL + `/${servico}`,header)
                .then((resposta) => {
                    this.setState({servicosCarrinho: resposta.data.jobs})
                    alert('foi')
                })
                .catch((erro) => {
                    alert(erro.message)
                })
          })
    }

    render(){

        return(
            <h1>Carrinho</h1>
        )
    }
}