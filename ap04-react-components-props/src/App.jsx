import Pedido from "./Pedido"

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <i className="fa-hippo fa-solid"></i>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-6 col-xxl-3">
          <Pedido
            data="22/08/2025"
            icone="fa-solid fa-hdd"
            titulo="SSD"
            descricao="SSD 512Gb" />
        </div>
      <div className="col-12 col-lg-6 col-xxl-3">
        <Pedido
          data="20/08/2025"
          icone="fa-solid fa-book"
          titulo="A casa de pedra"
          descricao="Autor Pedrinho" />
      </div>
      <div className="col-12 col-lg-6 col-xxl-3">
        <Pedido
          data="21/08/2025"
          icone="fa-solid fa-gem"
          titulo="Diamante"
          descricao="Diamante valioso 1ct" />
      </div>
      <div className="col-12 col-lg-6 col-xxl-3">
        <Pedido
          data="22/08/2025"
          icone="fa-solid fa-hippo"
          titulo="Hipopótamo"
          descricao="Filhote de hipopótamo" />
      </div>
    </div>
  </div>  
  )
}

export default App