/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
    const numeros = props.numeros;
    const nume = numeros.map((el, i) => {
        const isPar = el % 2 === 0;
        if (isPar) {
            return (
                <li key={i}>
                    <p>{el} é par</p>
                </li>
            );
        } else {
            return (
                <li key={i}>
                    <p>{el} é impar</p>
                </li>
            );
        }
    });

    return (
        <div>
            <ul style={{ listStyle: "none" }}>{nume}</ul>
        </div>
    );
};
