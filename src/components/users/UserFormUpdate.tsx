
import '../global-module.css';
import './index.css';

type PropsUsersFormUpdate = {
    children: string | number | readonly string[] | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined | any;
    handleUpdate: any;
    handleDelete: any;
    modalRef?: any;
    className?: string;
    close?: any;
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
}: PropsUsersFormUpdate) {
    return (

        <div ref={modalRef} className={`${className} modal`}>
            <div className="container-modal_">
                <div className="main_">
                    <button className="btn-modal" onClick={close}>Voltar</button>
                    <div className='form_'>
                    <form onSubmit={handleSubmit}>
                        <label className="update-text-id">ID do Usuário</label>
                        <input
                            className="update-in-id"
                            type="text"
                            name="id"
                            value={children.id  || 0 }
                            disabled
                            onChange={handleChange}
                        />
                        <label className="update-text-user" >Nome do Usuário</label>
                        <input
                            className="update-in-user"
                            type="search"
                            name="name"
                            value={children.name}
                            onChange={handleChange}
                            required
                        />
                        <label className="update-text-email">Email do Usuário</label>
                        <input
                            className="update-in-email"
                            type="email"
                            name="username"
                            value={children.username}
                            onChange={handleChange}
                            required
                        />
                        <label className="update-text-password">Nova senha</label>
                        <input
                            className="update-in-password"
                            type="password"
                            name="password"
                            value={children.password || ''}
                            onChange={handleChange}
                            required
                        />
                        <label className="update-text-psw_repeat">confirme a senha</label>
                        <input
                            className="update-in-psw-repeat"
                            type="password"
                            name="psw_repeat"
                            value={children.psw_repeat || ''}
                            onChange={handleChange}
                            required
                        />
                        
                        <button className="btn-update-register">Registrar</button>
                    </form>

                    <form onSubmit={handleUpdate}>
                        <button className="btn-update-update">Atualizar</button>
                    </form>

                    <form onSubmit={handleDelete}>
                        <button className="btn-update-new">Novo</button>
                    </form>

                </div>
            </div>
        </div>
        </div>
    )
}