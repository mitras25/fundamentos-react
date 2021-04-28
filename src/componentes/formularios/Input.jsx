/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import './Input.css'

export default props =>{

    const[valor, setValor] = useState('inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }
    return(
        <div className="Input">
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
               <h2>{valor}</h2>
            <input type="text" value={valor} onChange={ quandoMudar } /> 
            <input type="text" value='somente leitura' readOnly/>
            <input type="text" value={undefined}/> 
            </div>
           
        </div>
    )
}