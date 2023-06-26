import React from "react";
import InputMask from "react-input-mask";
import { Button } from "../users/button/Button";

import '../global-module.css'
import "./index.css"

type IPersonForm = {
    children:string | number | readonly string[] | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}

export function PersonForm({
    children,
    handleChange,
    handleSubmit,
 }: IPersonForm): JSX.Element {
    return (
        <div className='container_'>
            <fieldset className="main_">
                <form className="form_" onSubmit={handleSubmit}>
                    <label className="pers-name-label">Nome *</label>
                    <input className="pers-name-input"
                        type="text"
                        name="name_pers"
                        placeholder='Pessoa'
                        value={children.name_pers || ""}
                        onChange={handleChange}
                    />
                    <label className="pers-cpf-label">CPF *</label>
                    <InputMask className="pers-cpf-input"
                        type="text"
                        name="cpf_pers"
                        placeholder="000.000.000-00"
                        mask="999.999.999-99"
                        mask-selectonfocus="true"
                        maxLength={14}
                        autoComplete="off"
                        maskChar={null}
                        value={children.cpf_pers || ""}
                        onChange={handleChange}
                    />
                    <label className="pers-phone-label">Telefone *</label>
                      <InputMask className="pers-phone-input"
                        type="text"
                        name="phone_pers"
                        placeholder="()99999-9999"
                        mask="(99)99999-9999"
                        mask-selectonfocus="true"
                        maxLength={14}
                        autoComplete="off"
                        maskChar={null}
                        value={children.phone_pers || ""}
                        onChange={handleChange}
                    />
                    <label className="pers-address-label">Endereço *</label>
                    <input className="pers-address-input"
                        type="text"
                        name="address_pers"
                        placeholder='Endereço'
                        value={children.address_pers || ""}
                        onChange={handleChange}
                    />
                    <label className="pers-filial-label">Filial *</label>
                    <input className="pers-filial-input"
                        type="text"
                        name="fk_name_filial"
                        placeholder='Filial'
                        disabled
                        value={children.fk_name_filial || ""}
                        onChange={handleChange}
                    />
                    <div className="button-pers">
                        <Button onSubmit={'submit'}
                        children={"Registrar"}
                    /></div>
                </form>
            </fieldset>
        </div>
    )
}