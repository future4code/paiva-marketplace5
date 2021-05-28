import React from 'react';
import axios from 'axios';

export default class Filtros extends React.Component {

    state = {
        inputMin: "",
        inputMax: Infinity,
        inputTitulo: "",
        inputDescricao: "",
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
        if (e.target.value === "") {
          this.setState({inputMax: Infinity})
        }
      }
      onChangeInputTitulo = (e) => {
        this.setState({inputTitulo: e.target.value})       
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

      filtroValores = () => {
        
        return this.state.servicos
          .filter((servico) => servico.title.toLowerCase().includes(this.state.inputTitulo.toLowerCase()) || servico.description.toLowerCase().includes(this.state.inputTitulo.toLowerCase()) )
          .filter((servico) => servico.price <= this.state.inputMax)
          .filter((servico) => servico.price >= this.state.inputMin)
      }

    render() {
      
      const servicos = this.filtroValores()
      const teste = servicos.map((servico) => {
        return (
          <div>
            <p><strong>Título:</strong> {servico.title}</p>
            <p><strong>Descrição:</strong> {servico.description}</p>
            <p><strong>Preço:</strong> {servico.price}</p>
            <hr/>
          </div>
        )
      })

      console.log(teste)
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

              <label>Título: </label>
              <input
                onChange={this.onChangeInputTitulo}
              />
              
              {teste}
            </div>
        )
    }
}