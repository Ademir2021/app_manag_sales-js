import { useState } from "react";
import { ProductForm } from '../../components/products/ProductForm';
import { ProductValFields } from "../../components/utils/ValFields/ValFields";
import { Dashboard } from "../dashboard/Dashboard";
import { postRegister } from "../../services/handleService";

export type TProductRegister = {
    id_product: number;
    created_at?: Date | any;
    updated_at?: Date | any | null;
    descric_product: string | number;
    val_max_product: number;
    val_min_product: number;
    fk_brand: number;
    fk_sector: number;
    bar_code: string;
    image?:string;
};

export function FormProduct() {
    const route = 'products'
    const [product, setProduct] = useState<TProductRegister>({
        id_product: 0,
        descric_product: '',
        val_max_product: 0,
        val_min_product: 0,
        fk_brand: 1,
        fk_sector: 1,
        bar_code: ''
    });
    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    };
    async function handleSubmit(e: any) {
        e.preventDefault();
        if (ProductValFields(product)) {
          postRegister(product, route)
        }
    };
    return (
        <>
            <Dashboard />
            <ProductForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            >
                {product}
            </ProductForm>
        </>
    )
}