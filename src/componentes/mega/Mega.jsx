/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'

export default () =>{

    const [qtde, setQtde] = useState(6)
    const [resultado, setResultado] = useState([])

     function mega(qtde){
        const numeros = []
    
        for(let i= 0; i < qtde; i++){
             const num = parseInt(Math.random() * 60) +1 
             if(numeros.indexOf(num)<0){
                numeros.push(num)
             }else{
                 i--
             }
        }
        
      return numeros.sort((n1, n2)=> n1 - n2)
    }

const qdteNumeros = (e)=>{
  setQtde(+e.target.value)
}

    return(
        <div>
            <h1>megasena</h1>
            <label htmlFor="qtd">Quantos Numeros de 6 a 15</label>
            <input id='qtd' type="number"
            min ='6'
            max = '15' 
            onChange={qdteNumeros}
             value={qtde}/>
            <button onClick={() => setResultado(mega(qtde)) }>Gerar Surpresinha</button>
            <h3>{resultado.join(' ')}</h3>
        </div>
    )
}