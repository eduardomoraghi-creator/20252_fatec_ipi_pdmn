import React from 'react' 
 
export default function Feedback({funcaoOK, funcaoNOK, textoOK, textoNOK}) { 
    return ( 
        <div className="d-flex"> 
            <button className="mx-2 btn btn-outline-primary" 
onClick={funcaoOK}>{textoOK}</button> 
            <button className="btn btn-outline-danger" 
onClick={funcaoNOK}>{textoNOK}</button> 
        </div> 
    ) 
}