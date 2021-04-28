import React from "react";
import "./Card.css";

export default function Card(props) {
    const cardStyle = {
       backgroundColor: props.color, 
       borderColor: props.color,
    }

    return (
        <div className="card" style={cardStyle}>
            <div className="titulo">{props.titulo}</div>
            <div className="conteudo">{props.children}</div>
        </div>
    );
}
