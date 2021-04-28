import React from "react";

import "./App.css";
import Produtos from "./componentes/repeticao/Produtos";
import ListaAlunos from "./componentes/repeticao/ListaAlunos";
import ComponentesFamilia6 from "./componentes/basicos/ComponentesFamilia6";
import Familia6 from "./componentes/basicos/Familia6";
import Familia from "./componentes/basicos/Familia";
import Card from "./componentes/basicos/card/Card";
import Primeiro from "./componentes/basicos/Primeiro";
import ComParametro from "./componentes/basicos/ComParametro";
import Fragmento from "./componentes/basicos/Fragmento";
import Aleatorio from "./componentes/basicos/Aleatorio";
import ParouImpar from "./componentes/condicional/ParouImpar";
import UsuarioInfo from "./componentes/condicional/UsuarioInfo";
import DiretaPai from "./componentes/comunicacao/DiretaPai";
import IndiretaPai from "./componentes/comunicacao/IndiretaPai";
import Input from './componentes/formularios/Input'
import Contador from "./componentes/contador/Contador";
import Contador2 from "./componentes/contador/Contador2";
import Mega from "./componentes/mega/Mega";

let texto = <strong> Olá React !!!</strong>;
// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    //forma mais reduzida usando arrows function com retorno implicito
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="cards">
            <Card titulo="#13 MegaSena" color="#04f">
              <Mega />
            </Card>
            <Card titulo="#12 Contador" color="#040">
              <Contador numeroInicial ={10}/>
              <Contador2 numeroInicial = {30} />
            </Card>
            <Card titulo="#11 Componente Controlado (input)" color="#040">
              <Input />
            </Card>
            <Card titulo="#10 Comunicação Indireta" color="#040">
               <IndiretaPai />
            </Card>
            <Card titulo="#9 Comunicação Direta" color="#040">
               <DiretaPai />
            </Card>
            <Card titulo="#8 Reindelização Condicional #02" color="#040">
                <UsuarioInfo usuario = {{nome: 'Roberto'}} />
                <UsuarioInfo usuario = {{nome: ''}} />
                <UsuarioInfo usuario = {{email: 'Alguma@coisa.com'}} />
            </Card>
            <Card titulo="#8 Reindelização Condicional #01" color="#040">
                <ParouImpar numeros={[23, 33, 45, 55]} />
            </Card>
            <Card titulo="#7 Desafio Lista" color="#040">
                <Produtos />
            </Card>
            <Card titulo="#7 Lista Alunos" color="#040">
                <ListaAlunos />
            </Card>

            <Card titulo="#6 Herdando Componentes Filhos" color="#040">
                <Familia6 sobrenome="Santos">
                    <ComponentesFamilia6 nome="Roberto" />
                    <ComponentesFamilia6 nome="Maria" />
                    <ComponentesFamilia6 nome="Claudio" />
                </Familia6>
            </Card>
            <Card titulo="#5 Componentes Filhos" color="#040">
                <Familia sobrenome="Ferreira" />
            </Card>
            <Card titulo="#4 Desafio aleatório" color="#040">
                <Aleatorio min={10} max={50} />
            </Card>

            <Card titulo="#3 Fragmento" color="#040">
                <Fragmento />
            </Card>

            <Card titulo="#2 Com Parâmetro" color="#040">
                <ComParametro titulo="Situação" nome="Pedro José" nota={8.0} />
                <ComParametro
                    titulo="Situação"
                    nome="Maria Antonia"
                    nota={8.0}
                />
            </Card>

            <Card titulo="#1 Primeiro" color="#040">
                <Primeiro></Primeiro>
                {texto}
            </Card>
        </div>
    </div>
);
