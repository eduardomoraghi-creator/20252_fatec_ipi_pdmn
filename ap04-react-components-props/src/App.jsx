import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Hippo from "./Hippo"

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Hippo size='fa-4x' />
          <span className="mx-1"></span>
          <Hippo size='fa-3x' rotate='fa-flip-horizontal'/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 col-xxl-3">
          <Cartao
            cabecalho="22/08/2025">
            <Pedido
              icone="fa-solid fa-hdd"
              titulo="SSD"
              descricao="SSD 512Gb" />
          </Cartao>
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Cartao
            cabecalho="20/08/2025">
            <Pedido
              icone="fa-solid fa-book"
              titulo="A casa de pedra"
              descricao="Autor Pedrinho" />
          </Cartao>
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Cartao
            cabecalho="21/08/2025">
            <Pedido
              icone="fa-solid fa-gem"
              titulo="Diamante"
              descricao="Diamante valioso 1ct" />
          </Cartao>
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Cartao
            cabecalho="22/08/2025">
            <Pedido
              icone="fa-solid fa-hippo"
              titulo="Hipopótamo"
              descricao="Filhote de hipopótamo" />
          </Cartao>
        </div>
      </div>
    </div>
  )
}

export default App