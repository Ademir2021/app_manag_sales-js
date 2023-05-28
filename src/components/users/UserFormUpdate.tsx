
import './styles.css'

interface IUserFormUpdate {
    handleChange: any;
    handleSubmit: any;
    children: any;
    handleUpdate: any;
    handleDelete: any;
    modalRef: any;
    className: string;
    close: any;
}

export function UserFormUpdate({
    handleChange,
    handleSubmit,
    children,
    handleUpdate,
    handleDelete,
    modalRef,
    className,
    close
}: IUserFormUpdate) {
    return (

        <div ref={modalRef} className={`${className} modal`}>
            <div className="container">
                <div className="main">
                    <button className="btn-modal" onClick={close}>Fechar</button>
                    <div className='f-form'>
                    <form onSubmit={handleSubmit}>
                        <label className="update-text-id">ID</label>
                        <input
                            className="update-in-id"
                            type="text"
                            name="id"
                            value={children.id }
                            onChange={handleChange}
                        />
                        <label className="update-text-user" >Nome do Usuário</label>
                        <input
                            className="update-in-user"
                            type="search"
                            name="name"
                            value={children.name}
                            onChange={handleChange}
                        />
                        <label className="update-text-email">Email do Usuário</label>
                        <input
                            className="update-in-email"
                            type="email"
                            name="username"
                            value={children.username}
                            onChange={handleChange}
                        />
                        <button className="update-register">Registrar</button>
                    </form>

                    <form onSubmit={handleUpdate}>
                        <button className="update-update">Atualizar</button>
                    </form>

                    <form onSubmit={handleDelete}>
                        <button className="update-delete">Novo</button>
                    </form>

                </div>
            </div>
        </div>
        </div>
    )
}