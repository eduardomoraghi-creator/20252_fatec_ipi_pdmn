// rcc
import React, { Component } from 'react'
import Busca from './components/Busca'
import { createClient } from 'pexels'
import PexelsLogo from './components/PexelsLogo'
import Imagem from './components/Imagem'
export default class App extends Component {

  state = {
    photos: []
  }

  pexelsClient = null

  onBuscaRealizada = (termo) => {
    //fazer a busca usando o pexelsClient e exibir o resultado inteiro no log do navegador
    this.pexelsClient.photos.search({
      query: termo
    })
    .then(result => this.setState({photos: result.photos}))

  }

  componentDidMount(){
    this.pexelsClient = createClient('a91Qyfh2Ud1rdeOGKV8aTR5Aj9UmRvdma6EdyhC9EfKStoAyt7rmDuhV')
  }
  render() {
    return (
      <div className='grid w-9 m-auto border-1 border-400'>
        <div className='col-12'>
          {/* faça isso funcionar, fazendo com que o logo claro da pexels apareça */}
          <PexelsLogo />
        </div>
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className='col-12'>
          <Busca 
            dica="Procurar..."
            onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className="col-12">
          {
            this.state.photos.map((photo) => (
              // colocar um atributo chamado key nessa div
              // o valor associado deve ser o id da photo da vez
              <div key={photo.id}>
                {/* passe a usar o Imagem */}
                <Imagem src={photo.src.small} alt={`Foto tirada por ${photo.photographer}. ${photo.alt}`}/>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}