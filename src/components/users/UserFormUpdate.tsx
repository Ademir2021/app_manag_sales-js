import { Header } from "./UserHeader"

import './styles.css'

interface IUserFormUpdate {
    handleChange:any;
    children: any;
    handleSubmit: any;
    handleUpdate: any;
    handleDelete: any;
    handleIncrement: any;
    handleDecrement: any;
}

const avatar = './img/avatar.png'

export function UserFormUpdate({
    handleChange,
    children,
    handleSubmit,
    handleUpdate,
    handleDelete,
    handleIncrement,
    handleDecrement }: IUserFormUpdate) {
    return (
        <div className="container">
            <div className="main">
                <Header name="Atualizar Usuário" />
                <div className="f-form">
                    <img src={avatar} className="update-foto-user"></img>
                    <form onSubmit={handleSubmit}>
                        <label className="update-text-id">ID</label>
                        <input
                            className="update-in-id"
                            type="text"
                            name="id"
                            placeholder="ID"
                            value={children.id || 0}
                            onChange={handleChange}
                        />
                        <label className="update-text-id">ID</label>
                        <label className="update-text-user" >Nome do Usuário</label>
                        <input
                            className="update-in-user"
                            type="search"
                            name="name"
                            placeholder="Nome do Usuário"
                            value={children.name}
                            onChange={handleChange}
                        />
                        <label className="update-text-email">Email do Usuário</label>
                        <input
                            className="update-in-email"
                            type="email"
                            name="username"
                            placeholder="Email do Usuário"
                            value={children.username}
                            onChange={handleChange}
                        />
                        <button className="update-register"></button>
                    </form>
                    <form onSubmit={handleUpdate}>
                        <button className="update-update"></button>
                    </form>
                    <form onSubmit={handleDelete}>
                        <button className="update-delete"></button>
                    </form>
                    <form onSubmit={handleDecrement}>
                        <button className="update-btn-ant">Anterior</button>
                    </form>
                    <form onSubmit={handleIncrement}>
                        <button className="update-btn-prox">Próximo</button>
                    </form>
                </div>
            </div>
        </div>
    )
}