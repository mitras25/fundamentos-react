import React from "react";

export default function ComParametros(props) {
    let situacao = props.nota >= 7 ? "aprovado" : "reprovado";

    return (
        <div>
            <h2>{props.titulo} </h2>
            <p>
                <strong>{props.nome} </strong>
                está <strong> {situacao}</strong>
            </p>
        </div>
    );
}
