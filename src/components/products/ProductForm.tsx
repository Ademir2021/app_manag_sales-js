import React from "react";

import "./styles.css"

export function ProductForm({ children, handleChange, handleSubmit, submit }: any) {
    return (
        <>
            <div className="main">
                <main className="container">
                <fieldset className="fieldset">
                    <form className="f-form" onSubmit={handleSubmit}>
                        <label className="prod-descr-label" >Descrição Produto</label>
                        <input className="prod-descr-input"
                            type="text"
                            name="descric_product"
                            placeholder='Descrição do Produto'
                            value={children.descric_product || ""}
                            onChange={handleChange}
                        />
                        <label className="prod-val-max-label">Valor máximo</label>
                        <input className="prod-val-max-input"
                            type="number"
                            name="val_max_product"
                            placeholder='Valor máximo'
                            value={children.val_max_product || ""}
                            onChange={handleChange}
                        />
                        <label className="prod-val-min-label">Valor minimo</label>
                        <input className="prod-val-min-input"
                            type="number"
                            name="val_min_product"
                            placeholder='Valor minimo'
                            value={children.val_min_product || ""}
                            onChange={handleChange}
                        />
                        <label className="prod-brand-label">Marca</label>
                        <input className="prod-brand-input"
                            type="number"
                            name="fk_brand"
                            placeholder='Marca'
                            value={children.fk_brand || ""}
                            onChange={handleChange}
                        />
                        <label className="prod-sector-label">Setor</label>
                        <input className="prod-sector-input"
                            type="number"
                            name="fk_sector"
                            placeholder='Setor'
                            value={children.fk_sector || ""}
                            onChange={handleChange}
                        />
                        <label className="prod-barcode-label">Código de Barras</label>
                        <input className="prod-barcode-input"
                            type="text"
                            name="bar_code"
                            placeholder='Código de Barras'
                            value={children.bar_code || ""}
                            onChange={handleChange}
                        />
                         <button type={submit} 
                         className="button-prod">Registrar
                         </button>
                    </form>
                </fieldset>
                </main>
            </div>
        </>
    )
}