// import { useState } from "react"
import api from './api/api';

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
};
export async function RProductRegister(product: TProductRegister) {
    await api.post<TProductRegister>('/products', product)
        .then(response => {
            alert(response.data)
        })
        .catch(error => alert(error));
};
export async function RProductUpdate(id: number, product: TProductRegister) {
    await api.put<TProductRegister>(`/products/${id}`, product)
        .then(response => {
            alert(response.data)
        })
        .catch(error => alert(error));
};