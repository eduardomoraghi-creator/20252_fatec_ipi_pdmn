import React from 'react' 
 
export default function Comentario({nome, texto, data, foto}) { 
    return ( 
        // flex para filhos serem dispostos na horizontal, flex-direction é row por padrão 
        <div className="d-flex"> 
            <img src={foto} /> 
            {/* margem à esquerda, zero padding e ajuste de position para que os filhos se 
posicionem de maneira "absoluta" */} 
            <div className="ms-2 p-0 position-relative"> 
                <h2 className="border-bottom">{nome}</h2> 
                <p>{texto}</p> 
                {/* zero unidades de medida a partir de baixo e do começo (esquerda) */} 
                <p style={{fontSize: '0.8rem'}} className=" text-muted position-absolute bottom-0 
start-0 m-0">{data}</p> 
            </div> 
        </div> 
    )
}