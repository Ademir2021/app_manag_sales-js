import React from "react"
//import { Button } from "./UserButton"
import './UserFormUpdate.css'

export function UserFormUptdate({handleChange,
                                 children,
                                 handleSubmit,
                                 handleUpdate,
                                 handleDelete,
                                 handleDecrement,
                                 handleIncrement,
                                 submit}:any) {
    return (
        <>
            <div className="desktop">
                <div className="main">
                    <div className="header" />
                    <div className="text-reader">Manutenção de Users</div>
                    <div className="foto-user" />

                    <form onSubmit={handleSubmit}>
                        <label className="text-id">ID</label>
                        <input
                            className="in-id"
                            type="text"
                            name="id"
                            placeholder="ID"
                            value={children.id || ""}
                            onChange={handleChange}
                        />
                        <label className="text-user" >Nome do Usuário</label>
                        <input
                            className="in-user"
                            type="text"
                            name="name"
                            placeholder="Nome do Usúario"
                            value={children.name || ""}
                            onChange={handleChange}
                        />
                        <label className="text-email">Email do Usuário</label>
                        <input
                            className="in-email"
                            type="email"
                            name="username"
                            placeholder="Email do Usuário"
                            value={children.username || ""}
                            onChange={handleChange}
                        />
                        <button className="register" type={submit}></button>
                        </form>
                        
                        <form onSubmit={handleUpdate}>
                        <button className="update" type={submit}>ss</button>
                        </form>

                        <form onSubmit={handleDelete}>
                        <button className="delete" type={submit}></button>
                        </form>
                    
                        <form onSubmit={handleDecrement}>
                        <button type={submit} className="btn-ant">Anterior</button>
                        </form>

                        <form onSubmit={handleIncrement}>
                        <button type={submit} className="btn-prox">Próximo</button>
                        </form>
                </div>
            </div>
        </>
    )
}