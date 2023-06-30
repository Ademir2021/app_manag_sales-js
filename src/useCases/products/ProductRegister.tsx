import { useState } from "react";
import { ProductForm } from '../../components/products/ProductForm';
import { Dashboard } from "../dashboard/Dashboard";
import api from '../../services/api/api'

export type TProductRegister = {
    id_product: number;
    created_at?: Date | any;
    updated_at?: Date  | any | null;
    descric_product: string | number;
    val_max_product: number;
    val_min_product: number;
    fk_brand: number;
    fk_sector: number;
    bar_code: string;
}

export function FormProduct() {

    const [product, setProduct] = useState<TProductRegister>({
        id_product:0,
        descric_product: '',
        val_max_product: 0,
        val_min_product: 0,
        fk_brand: 1,
        fk_sector: 1,
        bar_code: ''
    })

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    }

    function valFields(product: TProductRegister) {
        let msg = ''
        if (product.descric_product === "") { msg += "Digite um produto !\n" };
        if (product.val_max_product === 0) { msg += "Informe um valor MAX !\n" };
        if (product.val_min_product === 0) { msg += "Informe um valor MIN !\n" };
        if (product.fk_brand === 0) { msg += "Informe a Marca !\n" };
        if (product.fk_sector === 0) { msg += "Informe o Setor !\n" };
        if (product.bar_code === "") { msg += "Informe o código de Barras !\n" };
        if (msg !== "") {
            alert(msg)
            return false;
        };
        return true;
    };

    async function handleProduct() {
        await api.post<TProductRegister>('/products', product)
            .then(response => {
                alert(response.data)
            }).catch(error => alert(error))
    };

    async function handleSubmit(e: any) {
        e.preventDefault();
        if (valFields(product)) {
            handleProduct()
        }
    }

    return (
        <>
        <Dashboard/>
            <ProductForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            >
                {product}
            </ProductForm>
        </>
    )
}