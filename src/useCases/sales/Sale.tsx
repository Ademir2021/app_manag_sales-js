import { useState, useEffect, useRef } from "react";
import { SaleForm } from "../../components/sales/SaleForm";
import { Itens } from "../../components/sales/Itens";
import api from "../../services/api/api";

import "../../App.css"

type TProductRegister = {
    id_product: number;
    created_at?: Date | any;
    descric_product: string;
    val_max_product: number;
    val_min_product?: number;
    fk_brand?: number;
    fk_sector?: number;
    bar_code: string;
}

type TItem = {
    descric: string | number;
    amount: number;
}

type TItens = {
    id: number;
    item: number;
    descric: string;
    amount: number;
    valor: number;
    tItem: number;
}

export function Sale() {

    const [products, setProducts] = useState<TProductRegister[]>([])

    const [item, setItem] = useState<TItem>({
        descric: "",
        amount: 1
    })

    const [itens, setItens] = useState<TItens[]>([{
        id: 0,
        item: 0,
        descric: "",
        amount: 0,
        valor: 0,
        tItem: 0
    }])

    const [dropdown, setDropdown] = useState<string>("");
    const modalRef = useRef<any>(null);

    const [id, setId] = useState<number>(1)

    function listUpdate(id: number) {
        toggleDropdown()
    }

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setItem((values: any) => ({ ...values, [name]: value }))
    }

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
    }

    function handleItem() {

        getProducts()
        const setItem = {
            id: 0,
            item: 0,
            descric: "",
            amount: 0,
            valor: 0,
            tItem: 0
        }
        for (let i = 0; products.length > i; i++) {
            if (item.descric == products[i].id_product
                || item.descric === products[i].bar_code
                || item.descric === products[i].descric_product) {
                setItem.id = id
                setItem.item = products[i].id_product
                setItem.descric = products[i].descric_product
                setItem.amount = item.amount
                setItem.valor = products[i].val_max_product
                setItem.tItem = setItem.amount * setItem.valor
                itens.push(setItem)
                setItens(itens)
                item.descric = ''
                item.amount = 1
                setId(id + 1)
            }
        }
    }

    useEffect(() => {
        handleItem()
        setItens(itens)
    }, [itens,])

    async function handleSubmit(e: Event) {
        e.preventDefault();
        alert("Send")
    }

    async function handleEdit(e: Event) {
        e.preventDefault();
        alert("Edit")
    }

    async function handleNew(e: Event) {
        e.preventDefault();
        handleItem()
    }

    function toggleDropdown(): void {
        setDropdown("modal-show");
    }

    function closeDropdown(e: Event) {
        e.stopPropagation();
        const contain = modalRef.current.contains(e.target);
        if (contain) {
            setDropdown("");
            document.body.removeEventListener("click", closeDropdown);
        }
    }

    return (
        <>
                <SaleForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    handleEdit={handleEdit}
                    handleNew={handleNew}
                    close={closeDropdown}
                    className={dropdown}
                    modalRef={modalRef}
                    list={<select>{products.map((product) => (
                    <option>{product.descric_product}</option>))}
                    </select>}
                    item={item.descric}
                    amount={item.amount}
                >
                    {item}
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
                            listUpdate(item.item)}>Atualizar</div>}
                    />
                )))}
        </>
    )
}