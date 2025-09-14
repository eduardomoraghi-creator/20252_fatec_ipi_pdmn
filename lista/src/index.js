import React from 'react'
import ReactDOM from 'react-dom/client'
import Comentario from './comentario'
import Cartao from './Cartao'
import Feedback from './Feedback'
import ListaComentarios from './ListaComentarios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { faker } from '@faker-js/faker'

const App = () => {
    const funcaoOK = () => alert('Comentário aprovado!')
    const funcaoNOK = () => alert('Comentário não aprovado!')
    const textoOK = 'Aprovar'
    const textoNOK = 'Não aprovar'
    const feedbackComponent = (
        <Feedback 
            funcaoOK={funcaoOK}
            funcaoNOK={funcaoNOK} 
            textoOK={textoOK} 
            textoNOK={textoNOK} 
        />
    )

    return (
        <ListaComentarios>
            <div className="row">
                <div className="col-12">
                    <Cartao>
                        <Comentario 
                            foto={faker.image.avatar()} 
                            nome={faker.internet.username()}
                            data={faker.date.recent().toLocaleTimeString()} 
                            texto={faker.lorem.sentences()} 
                        />
                        <div className="d-flex justify-content-center">
                            {feedbackComponent}
                        </div>
                    </Cartao>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Cartao>
                        <Comentario 
                            foto={faker.image.avatar()} 
                            nome={faker.internet.username()}
                            data={faker.date.recent().toLocaleTimeString()} 
                            texto={faker.lorem.sentences()} 
                        />
                        <div className="d-flex justify-content-center">
                            {feedbackComponent}
                        </div>
                    </Cartao>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <Cartao>
                        <Comentario 
                            foto={faker.image.avatar()} 
                            nome={faker.internet.username()}
                            data={faker.date.recent().toLocaleTimeString()} 
                            texto={faker.lorem.sentences()} 
                        />
                        <div className="d-flex justify-content-center">
                            {feedbackComponent}
                        </div>
                    </Cartao>
                </div>
            </div>
        </ListaComentarios>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
