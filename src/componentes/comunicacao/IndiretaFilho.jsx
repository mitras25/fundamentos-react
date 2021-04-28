/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
function gerarIdade(){
  return  parseInt(Math.random()*(20)) + 50
}

    return (
        <div>
            <div>Filho</div>
            <button
                onClick={function (e) {
                    props.quandoClicar("Pedro", gerarIdade(), true);
                }}
            >
                Enviar informação
            </button>
        </div>
    );
};
