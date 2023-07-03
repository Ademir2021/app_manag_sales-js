
import '../global-module.css'
import "./index.css"

type PropsProductFormUpdate = {
    children?: string | number | readonly string[] | undefined | any;
    handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit?: React.FormEventHandler<HTMLFormElement> | undefined | any;
    handleUpdate?: any;
    handleDelete?: any;
    modalRef?: any;
    className?: string;
    close?: any;
}

export function ProductFormUpdate({
    handleChange,
    handleSubmit,
    children,
    handleUpdate,
    handleDelete,
    modalRef,
    className,
    close
}:PropsProductFormUpdate){

    return(
        <div ref={modalRef} className={`${className} modal`}>
            <div className="container-modal_">
                <div className="main_">
                    <button className="btn-modal" onClick={close}>Voltar</button>
                    <div className='form_'>
                        <form onSubmit={handleSubmit}>
                            <label className="prod-up-label-id">ID</label>
                            <input
                                className="prod-up-in-id"
                                type="text"
                                name="id_person"
                                value={children.id_product || 0}
                                disabled
                                onChange={handleChange}
                            />
                            <label className="prod-up-label-descric" >Descrição</label>
                            <input
                                className="prod-up-in-descric"
                                type="text"
                                name="descric_product"
                                value={children.descric_product}
                                onChange={handleChange}
                            />
                            <label className="prod-up-label-val-max">Valor max</label>
                            <input className="prod-up-in-val-max"
                                type="text"
                                name="val_max_product"
                                placeholder=""
                                mask-selectonfocus="true"
                                maxLength={14}
                                autoComplete="off"
                                value={children.val_max_product}
                                onChange={handleChange}
                            />
                              <label className="prod-up-label-val-min">Valor min</label>
                            <input className="prod-up-in-val-min"
                                type="text"
                                name="val_min_product"
                                placeholder=""
                                mask-selectonfocus="true"
                                maxLength={14}
                                autoComplete="off"
                                value={children.val_min_product}
                                onChange={handleChange}
                            />
                            <label className="prod-up-label-brand">Marca</label>
                            <input className="prod-up-in-brand"
                                type="text"
                                name="fk_brand"
                                placeholder=""
                                mask-selectonfocus="true"
                                maxLength={14}
                                autoComplete="off"
                                value={children.fk_brand || ''}
                                onChange={handleChange}
                            />
                              <label className="prod-up-label-sector">Setor</label>
                            <input className="prod-up-in-sector"
                                type="text"
                                name="fk_sector"
                                placeholder=""
                                mask-selectonfocus="true"
                                maxLength={14}
                                autoComplete="off"
                                value={children.fk_sector || ''}
                                onChange={handleChange}
                            />
                            <label className="prod-up-label-barras">Barras</label>
                            <input
                                className="prod-up-in-barras"
                                type="text"
                                name="bar_code"
                                value={children.bar_code || ''}
                                onChange={handleChange}
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