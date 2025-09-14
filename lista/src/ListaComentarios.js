import React from 'react' 
 
export default function ListaComentarios({children}) { 
    return ( 
        <div className={estilos.principal}> 
            {children} 
        </div> 
    ) 
} 
const estilos = { 
    principal: 'container border border-warning rounded my-3 p-3' 
} 