import { useState, useEffect, useRef } from "react";
import { SaleForm } from "../../components/sales/SaleForm";
import { Itens } from "../../components/sales/Itens";
import { TProductRegister } from "../products/ProductRegister";

import api from "../../services/api/api";

import "../../App.css"

type TPproduct = {
    id: number;
    item: number;
    descric: string | number;
    valor: number;
    amount: number;
    tItem: number;
};
type TItens = {
    id: number;
    item: number;
    descric: string | any;
    amount: number;
    valor: number;
    tItem: number;
};

export function Sale() {

    let [editId, setEditId] = useState<number | null | any>(null);
    let [preco, setPreco] = useState<number>(0)
    const [statusBtn, setStatusBtn] = useState<string>("Salvar");
    const [products, setProducts] = useState<TProductRegister[]>([]);
    const [product, setProduct] = useState<TPproduct>(
        { id: 0, item: 0, descric: '', valor: 0, amount: 0, tItem: 0 });
    const [itens,] = useState<TItens[]>([
        { id: 0, item: 0, descric: "", amount: 0, valor: 0, tItem: 0 }]);
    const [dropdown, setDropdown] = useState<string>("");
    const modalRef = useRef<any>(null);
    const [id, setId] = useState<number>(1)
    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    };
    const getProducts = async () => {
        try {
            await api.get<TProductRegister[]>('products')
                .then(response => {
                    const setProduct = response.data
                    setProducts(setProduct)
                })
        } catch (err) {
            alert("error occurred !!" + err)
        }
    };

    useEffect(() => {
    getProducts()
         
    },[product.id])

    console.log(itens)

    function saveProduct() {
        for (let i = 0; products.length > i; i++) {
            if (editId === null) {
                if (product.descric === products[i].id_product
                    || product.descric === products[i].bar_code
                    || product.descric === products[i].descric_product) {
                    product.id = id
                    product.item = products[i].id_product
                    product.descric = products[i].descric_product
                    product.valor = products[i].val_max_product
                    product.tItem = product.amount * product.valor
                    itens.push(product)
                    setId(id + 1)
                    // searchItem()
                    // setProduct({id:0, item:0, descric:'', valor:0, amount:0, tItem:0});
                }
            } else {
                setDropdown('')
            }
        }
    };

    function updateProduct(item: TItens) {
        setStatusBtn("Atualizar")
        setEditId(item.id)
        product.id = item.id
        product.item = item.item
        product.descric = item.descric
        product.amount = item.amount
        product.valor = item.valor
        product.tItem = item.amount * item.valor
        toggleDropdown()
        // alert(item.id)
    };
    function deleteProduct() {
        for (let i = 0; itens.length > i; i++) {
            setEditId(editId)
            if (itens[i].id === editId) {
                //  alert(editId)
                itens.splice(i, 1)
                setEditId(null)
            }
        }
    };

    async function handleSaveUpdate(e: Event) {
        e.preventDefault();
        if (editId === null) {
            saveProduct()
        } else {
            alert("Modo Edição")
            saveProduct()
        }
    };
    async function handleDelete(e: Event) {
        e.preventDefault();
        if (editId !== null) {
            deleteProduct()
            alert("Item " + editId + " Deletado com sucesso")
            setProduct({ id: 0, item: 0, descric: '', valor: 0, amount: 0, tItem: 0 });
            setDropdown('');
        } else {
            alert("Nenhum item para deletar")
        }
    };
    async function handleSubmit(e: Event) {
        e.preventDefault();

    };
    function toggleDropdown(): void {
        setDropdown("modal-show");
    };
    function closeDropdown(e: Event) {
        e.stopPropagation();
        const contain = modalRef.current.contains(e.target);
        if (contain) {
            setStatusBtn("Salvar")
            setEditId(null)
            setDropdown("");
            document.body.removeEventListener("click", closeDropdown);
        }
    };
    function open() {
        setProduct({
            id: 0,
            item: 0,
            descric: '',
            valor: 0,
            amount: 1,
            tItem: 0
        })
        toggleDropdown()
        setStatusBtn("Salvar")
        setEditId(null)
        setPreco(0)
    };
    function searchItem(){
        for (let i = 0; products.length > i; i++) {
            if (editId === null) {
                if (product.descric === products[i].id_product
                    || product.descric === products[i].bar_code
                    || product.descric === products[i].descric_product) {
                    product.id = id
                    product.item = products[i].id_product
                    product.descric = products[i].descric_product
                    product.valor = products[i].val_max_product
                    setPreco(product.valor)
                    // setProduct({ id: 0, item: 0, descric: '', valor: 0, amount: 0, tItem: 0 });
                    // setProduct(product)
                }
            }
        }
    }

    return (
        <>
            <button style={{ margin: '18px' }} onClick={() => { open() }}>Abrir Venda</button>
            <SaleForm
                handleChange={handleChange}
                handleSaveUpdate={handleSaveUpdate}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
                handleSearchItem={searchItem}
                close={closeDropdown}
                className={dropdown}
                modalRef={modalRef}
                list={<select>{products.map((product) => (
                    <option>{product.descric_product}</option>))}
                </select>}
                item={(product.descric)}
                amount={product.amount <= 0 ? '' : product.amount}
                valor={preco <= 0 ? '' : preco + ' X '}
                statusBtn={statusBtn}
            >
                {product}
            </SaleForm>

            {itens.length === 0 ? <p>Carregando...</p> : (
                itens.map((item: TItens) => (
                    <Itens
                        key={item.id}
                        id={item.id}
                        item={item.item}
                        descric={item.descric}
                        amount={item.amount}
                        valor={item.valor}
                        tItem={item.tItem}
                        editar={<div onClick={() =>
                            updateProduct(item)}>Atualizar</div>}
                    />
                )))}
        </>
    )
}