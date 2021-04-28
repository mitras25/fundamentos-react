/* eslint-disable no-const-assign */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
    var [nome, setNome] = useState("");
    var [idade, setIdade] = useState(0);
    var [nerd, setNerd] = useState(false);

    function EnviarInformacao(nome, idade, nerd) {
        setNome(nome);
       setIdade(idade);
       setNerd(nerd);
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span> {nerd ? "nerd" : "normal"}</span>
            </div>
            <IndiretaFilho quandoClicar={EnviarInformacao} />
        </div>
    );
};
