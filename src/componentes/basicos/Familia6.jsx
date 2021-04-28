/* eslint-disable import/no-anonymous-default-export */
import React, { cloneElement } from "react";

export default (props) => {

    return (
        <div>
            {/*map recebe a lista de filhos e um indice, na funçao cria um elemnto pra cada filho */}
            {props.children.map((child, i) => {
                return cloneElement(child, {...props, key: i}
            )})}
        </div>
    )};
