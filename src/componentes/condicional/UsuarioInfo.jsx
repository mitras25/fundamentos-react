/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import If, { Else } from './If'

export default (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                  seja Bem vindo <strong>{ usuario.nome } </strong> 
                  <Else >
                      Seja bem vindo Amigão
                      </Else> 
            </If>
    
        </div>
    )
}