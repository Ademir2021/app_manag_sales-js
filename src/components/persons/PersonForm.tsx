import React from "react";
import { Button } from "../users/UserButton";

export function PersonForm({ children, handleChange, handleSubmit }: any) {

    return (
        <>
            <p>Cadastro de Pessoas</p>
            <main>
                <fieldset>
                    <form onSubmit={handleSubmit}>
                        <label>Seu nome</label>
                        <input
                            type="text"
                            name="name_pers"
                            placeholder='Pessoa'
                            value={children.name_pers || ""}
                            onChange={handleChange}
                        />
                        <label>Digite seu CPF</label>
                        <input
                            type="text"
                            name="cpf_pers"
                            placeholder='cpf'
                            value={children.cpf_pers || ""}
                            onChange={handleChange}
                        />
                        <label>Digite seu Endereço</label>
                        <input
                            type="text"
                            name="address_pers"
                            placeholder='Endereço'
                            value={children.address_pers || ""}
                            onChange={handleChange}
                        />
                        <label>Código da Loja</label>
                        <input
                            type="text"
                            name="fk_name_filial"
                            placeholder='Filial'
                            value={children.fk_name_filial || ""}
                            onChange={handleChange}
                        />
                        <Button>Registrar</Button>
                    </form>
                </fieldset>
            </main>
        </>
    )
}