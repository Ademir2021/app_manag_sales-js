import InputMask from "react-input-mask";
import "./styles.css"

type PropsPersonsFormUpdate = {
    children: string | number | readonly string[] | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined | any;
    handleUpdate: any;
    handleDelete: any;
    modalRef?: any;
    className?: string;
    close?: any;
}

export function PersonFormUpdate({
    handleChange,
    handleSubmit,
    children,
    handleUpdate,
    handleDelete,
    modalRef,
    className,
    close
}: PropsPersonsFormUpdate) {
    return (

        <div ref={modalRef} className={`${className} modal`}>
            <div className="container">
                <div className="main">
                    <button className="btn-modal" onClick={close}>Voltar</button>
                    <div className='f-form'>
                        <form onSubmit={handleSubmit}>
                            <label className="pers-up-label-id">ID Cliente</label>
                            <input
                                className="pers-up-in-id"
                                type="text"
                                name="id_person"
                                value={children.id_person || 0}
                                disabled
                                onChange={handleChange}
                            />
                            <label className="pers-up-label-name" >Nome</label>
                            <input
                                className="pers-up-in-name"
                                type="text"
                                name="name_pers"
                                value={children.name_pers}
                                onChange={handleChange}
                                // required
                            />
                            <label className="pers-up-label-cpf">CPF</label>
                            <InputMask className="pers-up-in-cpf"
                              type="text"
                              name="cpf_pers"
                              placeholder="000.000.000-00"
                              mask="999.999.999-99"
                              mask-selectonfocus="true"
                              // maxLength={14}
                              autoComplete="off"
                              maskChar={null}
                              value={children.cpf_pers}
                              onChange={handleChange}
                             // required
                            />
                            <label className="pers-up-label-phone">Telefone</label>
                            <InputMask className="pers-up-in-phone"
                                 type="text"
                                 name="phone_pers"
                                 placeholder="()99999-9999"
                                 mask="(99)99999-9999"
                                 mask-selectonfocus="true"
                                 // maxLength={14}
                                 autoComplete="off"
                                 maskChar={null}
                                value={children.phone_pers || ''}
                                onChange={handleChange}
                                // required
                            />
                            <label className="pers-up-label-address">Endereço</label>
                            <input
                                className="pers-up-in-address"
                                type="text"
                                name="address_pers"
                                value={children.address_pers || ''}
                                onChange={handleChange}
                                // required
                            />
                             <label className="pers-up-label-filial">Filial</label>
                            <input
                                className="pers-up-in-filial"
                                type="text"
                                name="fk_name_filial"
                                value={children.fk_name_filial || ''}
                                disabled
                                onChange={handleChange}
                                // required
                            />
                             <label className="pers-up-label-user">Usuário</label>
                            <input
                                className="pers-up-in-user"
                                type="text"
                                name="fk_id_user"
                                value={children.fk_id_user || ''}
                                disabled
                                onChange={handleChange}
                                // required
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