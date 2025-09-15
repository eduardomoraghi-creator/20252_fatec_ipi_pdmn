import React from "react"
import Gato from "./Gato"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensagemDeErro: null
    }
  }


  icones = {
    'Primavera': 'flower',
    'Verão': 'sun',
    'Outono': 'leaf',
    'Inverno': 'snowman'
  }
  obterEstacao = (dataAtual, latitude) => {
    //ano, mês(0 a 11), dia (1 a 31)
    const anoAtual = dataAtual.getFullYear()
    // 21/06
    const d1 = new Date(anoAtual, 5, 21)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date(anoAtual, 11, 22)
    //21/03
    const d4 = new Date(anoAtual, 2, 21)
    const estaNoSul = latitude < 0
    if (dataAtual >= d1 && dataAtual < d2)
      return estaNoSul ? "Inverno" : "Verão"
    if (dataAtual >= d2 && dataAtual < d3)
      return estaNoSul ? "Primavera" : "Outono"
    if (dataAtual >= d3 || dataAtual < d1)
      return estaNoSul ? "Verão" : "Inverno"
    return estaNoSul ? "Outono" : "Primavera"
  }

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date()
        const estacao = this.obterEstacao(dataAtual, position.coords.latitude)
        const icone = this.icones[estacao]
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          estacao: estacao,
          data: dataAtual.toLocaleString(),
          icone: icone
        })
      },
      (erro) => {
        console.log(erro)
        this.setState({ mensagemDeErro: `Tente novamente mais tarde` })
      }
    )
  }

  render() {
    return (
      <div className="container mt-2" >
        <div className="row">
          <div className="col-12">
            <Gato tamanho="2" />
            <Gato tamanho="2" direcao="horizontal" />
          </div>
        </div>
        {/* .card>.card-body */}
        <div className="card">
          <div className="card-body">
            {/* .d-flex.border.rounded.mb-2 */}
            <div
              className="d-flex border rounded mb-2 align-items-center"
              style={{ height: '6rem' }}>
              <i className={`fa-solid fa-4x fa-${this.state.icone}`}></i>
              <p className="w-75 text-center ms-3 fs-1">{this.state.estacao}</p>
            </div>
            <div>
              <p className="text-center">
                {
                  this.state.latitude ?
                    `Coordenadas: ${this.state.latitude}, ${this.state.longitude},
                    Data: ${this.state.data}` :
                    this.state.mensagemDeErro ? this.state.mensagemDeErro :
                      `Clique no botão para saber a sua estação climática`

                }
              </p>
            </div>
            <button
              onClick={this.obterLocalizacao}
              className="btn btn-outline-primary w-100 mt-2">
              Qual a minha estação?
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App