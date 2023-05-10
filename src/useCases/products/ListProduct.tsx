import { useState, useEffect } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { ProductList } from "../../components/products/ProductList";
import { IProduct } from '../products/IProduct'
import api from "../../services/api/api";
import { Links } from "../../components/dashboard/Links";

export function ListProduct() {

    const [products, setProducts] = useState<IProduct[]>([])

    const getProducts = async () => {
        try {
            await api.get<IProduct[]>('products')
                .then(response => {
                    setProducts(response.data)
                })
        } catch (err) {
            alert("error occurred !!" + err)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
        <Links/>
            <div style={{ fontSize: '18px' }}>Lista de Produtos</div>
            {products.length === 0 ? <p>Carregando...</p> : (
                products.map((product: IProduct) => (
                    <ProductList
                        key={product.id_product}
                        id={product.id_product}
                        create={FormatDate(product.created_at)}
                        name={product.descric_product}
                        val_max={product.val_max_product}
                        val_min={product.val_min_product}
                        brand={product.fk_brand}
                        sector={product.fk_sector}
                        bar_code={product.bar_code}
                    />
                )))}
        </>
    )
}