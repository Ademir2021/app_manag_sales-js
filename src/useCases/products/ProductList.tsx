import { useState, useEffect } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { ProductList } from "../../components/products/ProductList";
import { TProductRegister } from "./ProductRegister";
import { BackHome } from "../../components/utils/backHome/BackHome"
import api from "../../services/api/api";

export function ProductsList() {
    const [products, setProducts] = useState<TProductRegister[]>([])

    const getProducts = async () => {
        try {
            await api.get<TProductRegister[]>('products')
                .then(response => {
                    setProducts(response.data)
                })
        } catch (err) {
            alert("error occurred !!" + err)
        }
    };
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <BackHome />
            {products.length === 0 ? <p>Carregando...</p> : (
                products.map((product: TProductRegister) => (
                    <ProductList
                        key={product.id_product}
                        id={product.id_product}
                        created_at={FormatDate(product.created_at)}
                        updated_at={product.updated_at === null ?
                            "não houve atualização" : FormatDate(product.updated_at)}
                        name={product.descric_product}
                        val_max={product.val_max_product}
                        val_min={product.val_min_product}
                        brand={product.fk_brand}
                        sector={product.fk_sector}
                        bar_code={product.bar_code}
                        update={'Inativo'}
                    />
                )))}
        </>
    )
   
}