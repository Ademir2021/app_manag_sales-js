import React from "react";
import { Button } from "../users/UserButton";

import "./main.css"

export function PersonForm({ children, handleChange, handleSubmit, submit }: any) {

    return (
        <>
            <div className="main">
                <main className="container">
                <fieldset className="fieldset">
                    <form className="f-form" onSubmit={handleSubmit}>
                        <label className="pers-name-label">Seu nome</label>
                        <input className="pers-name-input"
                            type="text"
                            name="name_pers"
                            placeholder='Pessoa'
                            value={children.name_pers || ""}
                            onChange={handleChange}
                        />
                        <label className="pers-cpf-label">Digite seu CPF</label>
                        <input className="pers-cpf-input"
                            type="text"
                            name="cpf_pers"
                            placeholder='cpf'
                            value={children.cpf_pers || ""}
                            onChange={handleChange}
                        />
                        <label className="pers-address-label">Digite seu Endereço</label>
                        <input className="pers-address-input"
                            type="text"
                            name="address_pers"
                            placeholder='Endereço'
                            value={children.address_pers || ""}
                            onChange={handleChange}
                        />
                        <label className="pers-filial-label">Código da Loja</label>
                        <input className="pers-filial-input"
                            type="text"
                            name="fk_name_filial"
                            placeholder='Filial'
                            value={children.fk_name_filial || ""}
                            onChange={handleChange}
                        />
                        <button type={submit} 
                         className="button-pers">Registrar
                         </button>
                    </form>
                </fieldset>
                </main>
            </div>
        </>
    )
}