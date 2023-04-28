import * as React from "react"

import './UserFormUpdate.css'

export function UserFormUptdate() {

    return (
        <>
        <div className="desktop">
            <div className="main">
                <div className="header"></div>
                <div className="text-reader">Manutenção de Users</div>
                <div className="foto-user"></div>
                <form className="">
                    <label className="text-id">ID</label>
                    <input className="in-id" placeholder="ID"/>
                    <label className="text-user" >Nome do Usuário</label>
                    <input className="in-user" placeholder="Nome do Usúario"></input>
                    <label className="text-email">Email do Usuário</label>
                    <input className="in-email" type="email" placeholder="Email do Usuário"></input>
                    <button className="btn-ant">Anterior</button>
                    <button className="btn-prox">Próximo</button>
                    <div className="register"></div>
                    {/* <p className="new-user">Cadastrar</p> */}
                    <div className="update"></div>
                    {/* <p className="upd-user">Update</p> */}
                    <div className="delete"></div>
                    {/* <p className="del-user">Deletar</p> */}
                </form>
            </div>
            </div>
        </>
    )
}