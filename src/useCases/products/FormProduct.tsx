import { useState } from "react";
import { ProductForm } from '../../components/products/ProductForm';
import { IProduct } from "./IProduct";
import api from '../../services/api/api'

export function FormProduct() {

    const [product, setProduct] = useState<IProduct>({
        descric_product: 'Mouse Serial',
        val_max_product: 23,
        val_min_product: 19,
        fk_brand: 1,
        fk_sector: 1,
        bar_code: '123'
    })

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    }

    function valFields(product: IProduct) {
        let msg = ''
        if (product.descric_product == '') { msg += '- Digite um Produto !! -\n' };
        if (product.val_max_product == 0) { msg += '- informe um valor MAX !! -\n' };
        if (product.val_min_product == 0) { msg += "- Informe um valor MIN !! -\n" };
        if (product.fk_brand == 0) { msg += "- Informe a Marca !! -\n" };
        if (product.fk_sector == 0) { msg += "- Informe o Setor !! -\n" };
        if (product.bar_code == '') { msg += "- Informe o código de Barras !! -\n" };
        if (msg != '') {
            return false;
        };
        return true;
    };

    async function handleProduct() {
        await api.post<IProduct>('/products', product)
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
            <ProductForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            >
                {product}
            </ProductForm>
        </>
    )
}