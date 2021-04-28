/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ComponentesFamilia from "./ComponentesFamilia";

export default (props) => {
    return (
        <div>
            <ComponentesFamilia nome="Roberto" sobrenome={props.sobrenome} />
            <ComponentesFamilia nome="Maria" {...props} />
            <ComponentesFamilia nome="Claudio" sobrenome="Bastos" />
        </div>
    );
};
