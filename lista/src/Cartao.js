import React from 'react' 
 
export default function Cartao(props) { 
    return ( 
        <div className={estilos.principal}> 
            {props.children} 
        </div> 
    ) 
} 
const estilos = { 
    principal: 'card border rounded m-2 p-2 shadow' 
} 