import React from 'react';
import axios from 'axios';

export default class Filtros extends React.Component {

    state = {
        inputMin: "",
        inputMax: "",
        InputServico: "",
        servicos: [],
      }
      componentDidMount() {
        this.getAllJobs()
      }
    //Inputs controlados
      onChangeMin = (e) => {
        this.setState({inputMin: e.target.value})
      }
      onChangeMax = (e) => {
        this.setState({inputMax: e.target.value})
      }
      onChangeInputServico = (e) => {
        this.setState({inputNome: e.target.value})
        
      }  
      //Método API
      getAllJobs = () => {
        const baseURL = "https://labeninjas.herokuapp.com/jobs";
        const header = {
          headers: {
            Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e"
          }
        };
        axios.get(baseURL, header)
          .then((res) => {
            console.log(res.data.jobs)
            this.setState({servicos: res.data.jobs})
          })
          .catch((err) => {
            console.log(err.data);
          });
      }
    render() {
        return (
            <div>
                <label>Valor máximo: </label>
                <input type = "number"
                    onChange={this.onChangeMax}
                />
        
                <br/>
            
                <label>Valor Mínimo: </label>
                <input type = "number"
                    onChange={this.onChangeMin}
                />
        
                <br/>

                <label>Serviço: </label>
                <input
                    onChange={this.onChangeInputServico}
                />
            </div>
        )
    }
}