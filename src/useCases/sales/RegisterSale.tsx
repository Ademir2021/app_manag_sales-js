import { useState, useEffect, useCallback } from "react";
import { RegisterSaleForm } from "../../components/sales/RegisterSaleForm";
import { Itens } from "../../components/sales/Itens";
import { TProductRegister } from "../products/ProductRegister";
import { BackHome } from "../../components/utils/backHome/BackHome";
import api from "../../services/api/api";

import "../../App.css"

type TProduct = {
    id: number;
    item: number;
    descric: string | number | "" | 0 | any;
    valor: number;
    amount: number;
    tItem: number;
};
type TItens = {
    id: number;
    item: number;
    descric: string | number | "" | 0;
    amount: number;
    valor: number;
    tItem: number;
};
type TSale = {
    disc_sale: number | any;
    fk_name_pers: number;
    name_pers: string;
    user: string;
    filial: number | any;
    user_id: number;
}

export function RegisterSale() {

    const [product, setProduct] = useState<TProduct>(
        { id: 0, item: 0, descric: "", valor: 0, amount: 1, tItem: 0 });
    const [products, setProducts] = useState<TProductRegister[]>([]);
    const [itens, setItens] = useState<TItens[]>([]);
    const [sale, setSale] = useState<TSale>(
        { disc_sale: 0, fk_name_pers: 0, name_pers: "", user: "", filial: 0, user_id: 0 });
    const url = "http://192.168.80.109:3000"
    const urlPerson = url + "/person_users/"
    const [id, setId] = useState<number>(1);
    let [editId, setEditId] = useState<number | null | any>(null);
    let [preco, setPreco] = useState<number>(0);
    let [totalItens, setTotalItens] = useState<number>(0)
    const [statusBtnSaleSubmit, setStatusBtnSaleSubmit] = useState<"Iniciar" | "Enviar">("Iniciar");
    const [statusBtnSaveUpdate, setStatusBtnSaveUpdate] = useState<"Salvar" | "Atualizar">("Salvar");

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    };

    const getSale = useCallback(async () => {
        const res: [] | any = localStorage.getItem('u')
        const user = JSON.parse(res)
        if (user === null) {
            alert("nenhum usuário logado no momento")
        }
        else if (user !== null) {
            try {
                setSale(user[0].id);
                setSale(user[0].username);
                await fetch(urlPerson + user[0].id)
                    .then(data => { return data.json() })
                    .then(persons => {
                        for (let i = 0; persons.length > i; i++) {
                            if (persons[i].fk_id_user === user[0].id) {
                                sale.filial = persons[i].fk_name_filial;
                                sale.fk_name_pers = persons[i].id_person;
                                sale.name_pers = persons[i].name_pers;
                                sale.user_id = user[0].id
                                sale.user = user[0].username
                                sale.disc_sale = 0
                                localStorage.setItem("n", JSON.stringify(sale))
                            }
                        }
                    })
            } catch (err) {
                console.log("error occurred !" + err)
            }
        }
    }, [setSale]);

    useEffect(() => {
        getSale()
    }, [getSale]);


    const getProducts = useCallback(async () => {
        try {
            await api.get<TProductRegister[]>('products')
                .then(response => {
                    setProducts(response.data)
                })
        } catch (err) {
            console.log("error occurred !" + err)
        }
    }, [setProducts]);

    useEffect(() => {
        getProducts()
    }, [getProducts]);

    function saveProduct() {
        for (let i = 0; products.length > i; i++) {
            setEditId(editId)
            if (editId === null) {
                if (product.descric === products[i].id_product
                    || product.descric === products[i].bar_code
                    || product.descric === products[i].descric_product) {
                    product.id = id
                    product.item = products[i].id_product
                    product.descric = products[i].descric_product
                    product.valor = products[i].val_max_product
                    product.tItem = product.amount * product.valor
                }
            }
        }
    };

    function updateListProduct(item: TItens) {
        setStatusBtnSaveUpdate("Atualizar")
        setEditId(item.id)
        product.id = item.id
        product.item = item.item
        product.descric = item.descric
        product.amount = item.amount
        product.valor = item.valor
        product.tItem = item.amount * item.valor
    };

    function updateProduct() {
        for (let i = 0; products.length > i; i++) {
            setEditId(editId)
            if (editId !== null) {
                if (product.descric === products[i].id_product
                    || product.descric === products[i].bar_code
                    || product.descric === products[i].descric_product) {
                    let up = { id: 0, item: 0, descric: '', valor: 0, amount: 0, tItem: 0 }
                    up.id = editId
                    up.item = products[i].id_product
                    up.descric = product.descric
                    up.valor = products[i].val_max_product
                    up.amount = product.amount
                    up.tItem = 0
                    up.tItem = products[i].val_max_product * product.amount
                    deleteProduct()
                    setItens(itens)
                    itens.push(up)
                }
            }
        }
    }

    function deleteProduct() {
        for (let i = 0; itens.length > i; i++) {
            setEditId(editId)
            if (itens[i].id === editId) {
                itens.splice(i, 1)
                setEditId(null)
                openClearNewSale()
                setStatusBtnSaleSubmit("Enviar")
            }
        }
    };

    function verifItem(product: TProduct) {
        for (let i = 0; itens.length > i; i++)
            if (product.item === itens[i].item && editId == null) {
                return alert("Producto já foi lançado")
            }
        setId(id + 1)
        return itens.push(product)
    };


    function sumItens() {
        let sum = 0
        for (var i = 0; i < itens.length; i++) {
           sum+= (itens[i].amount * itens[i].valor)

        }
        setTotalItens(sum)
    }

    async function handleSaveUpdate(e: Event) {
        e.preventDefault();
        if (editId === null) {
            saveProduct()
            verifItem(product)
            sumItens()
            openClearNewSale()
            setStatusBtnSaleSubmit("Enviar")
        } else {
            updateProduct()
            sumItens()
            setEditId(null)
            setPreco(0)
        }
    };

    async function handleDelete(e: Event) {
        e.preventDefault();
        if (editId !== null) {
            deleteProduct()
            alert("Item do ID: " + editId + " deletado com sucesso")
            openClearNewSale()
        } else {
            alert("Busque um novo item !")
            openClearNewSale()
        }
    };
    async function handleSubmit(e: Event) {
        e.preventDefault();
        if (statusBtnSaleSubmit === "Iniciar") {
            itens.length === 0 ? alert("Iniciar compra !") :
                openClearNewSale()
            setStatusBtnSaleSubmit("Enviar")
        } else {
            setStatusBtnSaleSubmit("Iniciar")
            alert("Seu pedido será gravada")
            const itens_store_res: [] | any = localStorage.getItem('i')
            const itens_store = JSON.parse(itens_store_res)
            console.log(itens_store)
            if(itens_store_res === null){
            localStorage.setItem("i", JSON.stringify(itens))
            alert("Pedido gravado com sucesso")
            }else{
                alert("Aguarde o retorno! existe um pedido gravado em aberto !")
            }
        }
    };
    

    function openClearNewSale() {
        setProduct({ id: 0, item: 0, descric: '', valor: 0, amount: 1, tItem: 0 });
        setStatusBtnSaveUpdate("Salvar")
        setStatusBtnSaleSubmit("Iniciar")
        setEditId(null)
        setPreco(0)
    };

    function searchItem(e: Event) {
        e.preventDefault()
        for (let i = 0; products.length > i; i++) {
            if (editId === null || editId !== null) {
                if (product.descric === products[i].id_product
                    || product.descric === products[i].bar_code
                    || product.descric === products[i].descric_product) {
                    product.id = id
                    product.item = products[i].id_product
                    product.descric = products[i].descric_product
                    product.valor = products[i].val_max_product
                    setPreco(product.valor)
                }
            }
        }
    }

    return (
        <>
            <BackHome/>
            <RegisterSaleForm
                handleChange={handleChange}
                handleSaveUpdate={handleSaveUpdate}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
                handleSearchItem={searchItem}
                list={<select>{products.map((product) => (
                    <option key={product.id_product}>
                        {product.descric_product}</option>))}
                </select>}
                item={(product.descric)}
                amount={product.amount <= 0 ? '' : product.amount}
                valor={preco <= 0 ? '' : ' X ' + preco}
                statusBtnSaveUpdate={statusBtnSaveUpdate}
                statusBtnSaleSubmit={statusBtnSaleSubmit}
                totalItens={totalItens <=0 ? '' : "Total compra: " + totalItens}
                loadItens={itens.length === 0 ?
                    <strong style={{ color: "blue" }} >Carregando...</strong> : (
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
                                    updateListProduct(item)}>
                                    <a style={{ textDecoration: 'none' }}
                                        href="##">Atualizar</a></div>}
                            />
                        )))}
            >
                {product}
            </RegisterSaleForm> 
            
               {/* <div>
               <input
               type="number"
               value={diskSale}
               onChange={(e:any)=> setDisc_sale(e.target.value)}
               />
               <button ></button>
               </div> */}
                      
            <footer><br /><strong style={{color:'blue'}}>Fim</strong></footer>
        </>
    )
}