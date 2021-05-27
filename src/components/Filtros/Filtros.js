import React from 'react';
import axios from 'axios';

export default class Filtros extends React.Component {

    state = {
        inputMin: "",
        inputMax: "",
        inputServico: "",
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
        this.setState({inputServico: e.target.value})       
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

      listaFiltrada = () => {
        return this.state.servicos
        .filter((servico) => servico.title.includes(this.state.inputServico))
        .filter((servico) => servico.description.includes(this.state.inputServico))
        .filter((servico) => servico.price <= this.state.inputMax)
        .filter((servico) => servico.price >= this.state.inputMin)
      }

    render() {

      console.log(this.listaFiltrada())
       
        return (
          <div>
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

              <label>Serviço: </label>
              <input
                onChange={this.onChangeInputServico}
              />

            </div>
        )
    }
}