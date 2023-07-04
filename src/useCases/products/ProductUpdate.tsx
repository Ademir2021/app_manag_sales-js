import { useState, useEffect, useRef } from "react"
import { FormatDate } from "../../components/utils/formatDate";
import { TProductRegister } from "./ProductRegister";
import { postRegister, putUpdate } from "../../services/handleService";
import { ProductValFields } from "../../components/utils/ValFields/ValFields";
import { ProductFormUpdate } from "../../components/products/ProductFormUpdate";
import { ProductList } from "../../components/products/ProductList";
import { BackHome } from "../../components/utils/backHome/BackHome";
import api from '../../services/api/api';

import "../../App.css"

export function ProductUpdate() {
    const route = 'products'
    const [products, setProducts] = useState<TProductRegister[]>([])
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
    }

    const [dropdown, setDropdown] = useState<string>("");
    const modalRef = useRef<any>(null);

    function listUpdate(product_: TProductRegister) {
        product.id_product = product_.id_product
        product.descric_product = product_.descric_product
        product.val_max_product = product_.val_max_product
        product.val_min_product = product_.val_min_product
        product.fk_brand = product_.fk_brand
        product.fk_sector = product_.fk_sector
        product.bar_code = product_.bar_code
        toggleDropdown()
    };

    async function getProducts() {
        await api.get<TProductRegister[]>(`/products`)
            .then(response => {
                setProducts(response.data)
            })
            .catch(error => alert(error));
    };
    useEffect(() => {
        getProducts()
    }, []);

    function toggleDropdown(): void {
        setDropdown("modal-show");
    };

    function closeDropdown(e: Event) {
        e.stopPropagation();
        const contain = modalRef.current.contains(e.target);
        if (contain) {
            setDropdown("");
            document.body.removeEventListener("click", closeDropdown);
        }
    };
    async function handleSubmit(e: any) {
        e.preventDefault();
        if (ProductValFields(product)) {
            postRegister(product, route);
        }
    };
    async function handleUpdate(e: Event) {
        e.preventDefault();
        if (ProductValFields(product)) {
            putUpdate(product.id_product, product, route)
        }
        getProducts()
    };
    async function handleDelete(e: Event) {
        e.preventDefault();
        setProduct({
            id_product: 0,
            created_at: '',
            descric_product: '',
            val_max_product: 0,
            val_min_product: 0,
            fk_brand: 1,
            fk_sector: 1,
            bar_code: ''
        })
        alert("Digite um novo produto !!")
    };
    return (
        <>
            <BackHome />
            < ProductFormUpdate
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                modalRef={modalRef}
                className={dropdown}
                close={closeDropdown}
            >
                {product}
            </ProductFormUpdate>
            {products.length === 0 ? <p>Carregando ...</p> : (
                products.map((product: TProductRegister) => (
                    <ProductList
                        key={product.id_product}
                        id={product.id_product}
                        created_at={FormatDate(product.created_at)}
                        updated_at={product.updated_at === null ?
                            "não houve atualização"
                            : FormatDate(product.updated_at)}
                        name={product.descric_product}
                        val_max={product.val_max_product}
                        val_min={product.val_min_product}
                        brand={product.fk_brand}
                        sector={product.fk_sector}
                        bar_code={product.bar_code}
                        update={<div onClick={() =>
                            listUpdate(product)}>Atualizar</div>}
                    />
                )))}

        </>
    )
}