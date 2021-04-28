/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <h2>Número Aleatorio</h2>
            <p>Valor mínimo {min}</p>
            <p>Valor máximo {max}</p>
            <p>
                <strong>{aleatorio}</strong>
            </p>
        </div>
    );
};
