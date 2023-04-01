import React from "react";
import { Button } from "../users/UserButton";

export function ProductForm({ children, handleChange, handleSubmit }: any) {

    return (
        <>
            <p>Cadastro de Produtos</p>
            <main>
                <fieldset>
                <form onSubmit={handleSubmit}>
                        <label>Descrição Produtos</label>
                        <input
                        type="text"
                        name="descric_product"
                        placeholder='Descrição dos Produtos'
                        value={children.descric_product || ""}
                         onChange={handleChange}
                        />
                        <label>Valor máximo</label>
                        <input
                        type="number"
                        name="val_max_product"
                        placeholder='valor máximo'
                        value={children.val_max_product || ""}
                         onChange={handleChange}
                        />
                        <label>Valor minimo</label>
                        <input
                        type="number"
                        name="val_min_product"
                        placeholder='Valor minimo'
                        value={children.val_min_product || ""}
                         onChange={handleChange}
                        />
                        <label>Marca</label>
                        <input
                        type="number"
                        name="fk_brand"
                        placeholder='Marca'
                        value={children.fk_brand || ""}
                         onChange={handleChange}
                        />
                        <label>Setor</label>
                        <input
                        type="number"
                        name="fk_sector"
                        placeholder='Setor'
                        value={children.fk_sector || ""}
                         onChange={handleChange}
                        />
                        <label>Código de Barras</label>
                        <input
                        type="text"
                        name="bar_code"
                        placeholder='Código de Barras'
                        value={children.bar_code || ""}
                         onChange={handleChange}
                        />
                         <Button>Registrar</Button>
                    </form>
                </fieldset>
            </main>
        </>
    )
}