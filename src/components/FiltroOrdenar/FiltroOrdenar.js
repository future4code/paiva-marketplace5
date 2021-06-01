import React from "react";
import axios from "axios";

class FiltroOrdenar extends React.Component {
  state = {
    arrayServico: [
      // {
      //   title: "lenhador",
      //   price: 10,
      //   dueDate: Date.now()
      // },
      // {
      //   title: "ferreiro",
      //   price: 15,
      //   dueDate: Date.now() + 1
      // },
      // {
      //   title: "jardineiro",
      //   price: 11,
      //   dueDate: Date.now() + 2
      // }
    ],
    listaOrdenada: [],
    tipoOrdenamento: ""
  };

  componentDidMount() {
    this.listarTodosJobs();
  }

  listarTodosJobs = () => {
    const baseURL = "https://labeninjas.herokuapp.com/jobs";
    const header = {
      headers: {
        Authorization: "18e8e695-776e-4e9e-8aec-5a0680e34dc2"
      }
    };

    axios
      .get(baseURL, header)
      .then((res) => {
        const response = res.data.jobs;

        this.setState({ arrayServico: response });
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  ordenaTitulo = (e) => {
    if (e.target.value === "crescente") {
      const ordemCrescente = this.state.arrayServico.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        }
        return 0;
      });
      this.setState({ listaOrdenada: ordemCrescente });
    } else if (e.target.value === "decrescente") {
      const ordemDecrescente = this.state.arrayServico.sort(function (a, b) {
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

  ordenaPrice = (e) => {
    if (e.target.value === "crescente") {
      const ordemCrescente = this.state.arrayServico.sort(function (a, b) {
        if (a.price > b.price) {
          return 1;
        } else if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
      this.setState({ listaOrdenada: ordemCrescente });
    } else if (e.target.value === "decrescente") {
      const ordemDecrescente = this.state.arrayServico.sort(function (a, b) {
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

  ordenaDueDate = (e) => {
    if (e.target.value === "crescente") {
      const ordemCrescente = this.state.arrayServico.sort(function (a, b) {
        if (a.dueDate > b.dueDate) {
          return 1;
        } else if (a.dueDate < b.dueDate) {
          return -1;
        }
        return 0;
      });
      this.setState({ listaOrdenada: ordemCrescente });
    } else if (e.target.value === "decrescente") {
      const ordemDecrescente = this.state.arrayServico.sort(function (a, b) {
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

  render() {
    const listaServicos = this.state.arrayServico.map(
      ({ title, price, dueDate, description, paymentMethods }) => {
        return (
          <p>
            <strong>Nome: </strong> {title} <br /> <strong>Preço:</strong>
            {price} <br /> <strong>Prazo:</strong> {dueDate} <br />{" "}
            <strong>Description:</strong> {description} <br />{" "}
            <strong>Método de Pagamento:</strong> {paymentMethods}
          </p>
        );
      }
    );

    return (
      <div>
        <div>
          <h2>Barra de ordenação</h2>

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
        </div>

        {listaServicos}
      </div>
    );
  }
}

export default FiltroOrdenar;
