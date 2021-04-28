import React, { Component } from "react";
import Botoes from "./Botoes";
import "./Contador.css";
import Display from "./Display";
import PassoForm from "./PassoForm";

class Contador2 extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    };
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    };

    setPasso = (evento) => {
        this.setState({
            //colocando + transforma em number
            passo: +evento.target.value,
        });
    };

    render() {
        return (
            <div className="Contador">
                <Display numero={this.state.numero} />
                <PassoForm passoSet={this.setPasso} passo={this.state.passo} />
                <Botoes incremento={this.inc} decremento={this.dec} />
            </div>
        );
    }
}

export default Contador2;
