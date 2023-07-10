import { useState, useEffect, useCallback } from "react";
import { RegisterSaleForm } from "../../components/sales/RegisterSaleForm";
import { Itens } from "../../components/sales/Itens";
import { TProductRegister } from "../products/ProductRegister";
import { Dashboard } from "../dashboard/Dashboard";
import { currencyFormat } from "../../components/utils/currentFormat/CurrentFormat";
import api from "../../services/api/api";

import "../../App.css"

type TItens = {
    id: number;
    item: number;
    descric: string | number;
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
    const [product, setProduct] = useState<TItens>(
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
    const [itemImg, setIemImg] = useState<string>('./img/img_itens/sale_init.png')
   
    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    };

    const getSale = useCallback(async () => {
        const res: [] | any = localStorage.getItem('u')
        const user = JSON.parse(res)
        if (user !== null) {
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
    },[setSale]);

    useEffect(() => {
        getSale()
    },);

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
    },[setProduct]);

    function updateListProduct(item: TItens) {
        setStatusBtnSaveUpdate("Atualizar");
        setEditId(item.id);
        product.id = item.id;
        product.item = item.item;
        product.descric = item.descric;
        product.amount = item.amount;
        product.valor = item.valor;
        product.tItem = item.amount * item.valor;
        if(product.id === null){
            setIemImg('./img/img_itens/sale_avatar.png')
        }else{
        findProducts();
        }
    };
    function findProducts() {
        for (let i = 0; products.length > i; i++) {
            if (product.descric == products[i].id_product
                || product.descric === products[i].bar_code
                || product.descric === products[i].descric_product) {
                if (editId !== null) {
                    product.id = editId;
                } else {
                    product.id = id;
                }
                product.item = products[i].id_product;
                product.descric = products[i].descric_product;
                product.valor = products[i].val_max_product;
                product.tItem = product.valor * product.amount;
                if(products[i].id_product === null){
                    setIemImg('./img/img_itens/sale_avatar.png')
                }else{
                setIemImg('./img/img_itens/'+products[i].id_product+".jpg");
                }
            }
        }
    };
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
    function verifItem(product: TItens) {
        if (product.item !== 0) {
            for (let i = 0; itens.length > i; i++)
                if (product.item === itens[i].item && editId == null) {
                    return alert("Producto já foi lançado")
                }
            setId(id + 1);
            return itens.push(product)
        } else {
            alert("Item não existe")
        }
    };
    function verifItemUP(product: TItens) {
        for (let i = 0; itens.length > i; i++)
            if (product.item === itens[i].item && editId !== null) {
                itens[i].amount = product.amount
                itens[i].tItem = product.amount * product.valor
                return alert("Producto já foi lançado ! a quantidade é de " + product.amount + " item(s)")
            }
        deleteProduct();
        setItens(itens);
        return itens.push(product);
    };
    function sumItens() {
        let sum = 0
        for (var i = 0; i < itens.length; i++) {
            sum += (itens[i].amount * itens[i].valor)
        }
        setTotalItens(sum)
        return sum
    };
    function handleSaveUpdate(e: Event) {
        e.preventDefault();
        if (editId === null) {
            findProducts();
            verifItem(product);
            sumItens();
            openClearNewSale();
            setStatusBtnSaleSubmit("Enviar");
        } else {
            findProducts();
            verifItemUP(product);
            sumItens();
            openClearNewSale();
            setEditId(null);
            setPreco(0);
        }
    };

    function handleDelete(e: Event) {
        e.preventDefault();
        if (editId !== null) {
            if (window.confirm(
                "Realmente deseja remover o Item de ID: "
                + editId + " ?")) {
                deleteProduct();
                openClearNewSale();
            }
        } else {
            alert("Busque um novo item !");
            openClearNewSale();
        }
    };
    function handleSubmit(e: Event) {
        e.preventDefault();
        if (statusBtnSaleSubmit === "Iniciar") {
            itens.length === 0 ? alert("Iniciar compra !") :
                openClearNewSale();
            setStatusBtnSaleSubmit("Enviar");
        } else {
            setStatusBtnSaleSubmit("Iniciar");
            if (itens.length === 0) {
                alert("Informe ao menos um item e clique em salvar !");
            } else {
                alert("Seu pedido será gravado");
                const itens_store_res: [] | any = localStorage.getItem('i');
                if (itens_store_res === null) {
                    localStorage.setItem("i", JSON.stringify(itens))
                    localStorage.setItem("s", JSON.stringify(sumItens().toFixed(2)));
                    alert("Pedido gravado com sucesso")
                    setTimeout(() => {
                        window.location.replace("/process_sale");
                    }, 1000);
                } else {
                    alert("Aguarde retorno! existe um pedido  em aberto !");
                }
            }
        }
    };
    function openClearNewSale() {
        setProduct({ id: 0, item: 0, descric: '', valor: 0, amount: 1, tItem: 0 });
        setStatusBtnSaveUpdate("Salvar");
        setStatusBtnSaleSubmit("Iniciar");
        setEditId(null);
        setPreco(0);
        setIemImg('./img/img_itens/sale_avatar.png')
    };
    function searchItem(e: Event) {
        e.preventDefault();
        findProducts();
        setPreco(product.valor);
    };
    return (
        <>
            <Dashboard />
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
                amount={product.amount <= 1 ? '' : product.amount}
                valor={preco <= 0 ? '' : ' X ' + preco}
                statusBtnSaveUpdate={statusBtnSaveUpdate}
                statusBtnSaleSubmit={statusBtnSaleSubmit}
                item_img={itemImg}
                totalItens={totalItens <= 0 ? '' : "Total " + currencyFormat(totalItens)}
                loadItens={itens.length === 0 ?
                    <strong style={{ color: "blue" }} >Carregando...</strong> : (
                        itens.map((item: TItens) => (
                            <Itens
                                key={item.id}
                                id={item.id}
                                item={item.item}
                                descric={item.descric}
                                amount={item.amount}
                                valor={currencyFormat(item.valor)}
                                tItem={currencyFormat(item.tItem)}
                                editar={<strong onClick={() =>
                                    updateListProduct(item)}>
                                   <a href="#">Editar</a></strong>}
                            />
                        )))}
            >
                {product}
            </RegisterSaleForm>
        </>
    )
}