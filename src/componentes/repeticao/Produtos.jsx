/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import itens from "../../data/produtos";
import './Produtos.css'

export default (props) => {
    const tdItens = itens.map((item) => {
        return (
            <tr key={item.id} className={item.id % 2 === 0 ? 'par' : 'impar'}>
                <td>{item.id}</td>
                <td>{item.item}</td>
                <td>{item.preco}</td>
            </tr>
        );
    });
    return (
        <div className='tabelaProdutos'>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>{tdItens}</tbody>
            </table>
        </div>
    );
};
