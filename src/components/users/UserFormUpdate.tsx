import React from "react"

import './UserFormUpdate.css'

export function UserFormUptdate({ handleChange, children, handleSubmit, handleUpdate, handleDelete, handleIncrement, handleDecrement, submit }: any) {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="text-reader">Manutenção dos Usuários de Login !!</div>
                    <div className="foto-user" />

                    <form onSubmit={handleSubmit}>
                        <label className="text-id">ID</label>
                        <input
                            className="in-id"
                            type="text"
                            name="id"
                            placeholder="ID"
                            value={children.id || 0}
                            onChange={handleChange}
                        />
                        <label className="text-id">ID</label>
                        <label className="text-user" >Nome do Usuário</label>
                        <input
                            className="in-user"
                            type="search"
                            name="name"
                            placeholder="Nome do Usuário"
                            value={children.name}
                            onChange={handleChange}
                        />
                        <label className="text-email">Email do Usuário</label>
                        <input
                            className="in-email"
                            type="email"
                            name="username"
                            placeholder="Email do Usuário"
                            value={children.username}
                            onChange={handleChange}
                        />
                        <button className="register" type={submit}></button>
                    </form>
                    <form onSubmit={handleUpdate}>
                        <button className="update" type={submit}></button>
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