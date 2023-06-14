import { RegisterSaleForm } from "../../components/sales/RegisterSaleForm";
import { useState, useEffect } from "react";
import { Itens } from "../../components/sales/Itens";
import { TProductRegister } from "../products/ProductRegister";
import { BackHome } from "../../components/utils/backHome/BackHome";
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

export function RegisterSale (){
    let [editId, setEditId] = useState<number | null | any>(null);
    let [preco, setPreco] = useState<number>(0)
    const [statusBtnSaleSubmit, setStatusBtnSaleSubmit] = useState<boolean | string>("Iniciar")
    const [statusBtnSaveUpdate, setStatusBtn] = useState<string>("Salvar");
    const [products, setProducts] = useState<TProductRegister[]>([]);
    const [product, setProduct] = useState<TPproduct>(
        { id: 0, item: 0, descric: '', valor: 0, amount: 0, tItem: 0 });
    const [itens,] = useState<TItens[]>([]);

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
                    const products = response.data
                    setProducts(products)
                })
        } catch (err) {
            alert("error occurred !" + err)
        }
    };

    useEffect(() => {
        getProducts()
        },[product.id])
    
        function saveProduct() {
            for (let i = 0; products.length > i; i++) {
                if (editId === null) {
                    if (product.descric == products[i].id_product
                        || product.descric === products[i].bar_code
                        || product.descric === products[i].descric_product) {
                        product.id = id
                        product.item = products[i].id_product
                        product.descric = products[i].descric_product
                        product.valor = products[i].val_max_product
                        product.tItem = product.amount * product.valor
                        itens.push(product)
                        setId(id + 1)
                        openClearNewSale()
                        setStatusBtnSaleSubmit("Enviar")
                    }
                } else {
                    alert("Modo Edição !?")
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
            } else {
                alert("Nenhum item para deletar")
            }
        };
        async function handleSubmit(e: Event) {
            e.preventDefault();
            if (statusBtnSaleSubmit === "Iniciar"){
                itens.length === 0 ? alert("Iniciar compra !") :
                openClearNewSale()
                setStatusBtnSaleSubmit("Enviar")
            }else{
              
               setStatusBtnSaleSubmit("Iniciar")
            }
    
        };

        function openClearNewSale() {
            setProduct({id:0, item:0, descric:'', valor:0, amount:1, tItem:0});
            setStatusBtn("Salvar")
            setStatusBtnSaleSubmit("Iniciar")
            setEditId(null)
            setPreco(0)
        };
      
        function searchItem(e:Event){
            e.preventDefault()
            for (let i = 0; products.length > i; i++) {
                if (editId === null) {
                    if (product.descric == products[i].id_product
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

    return(
    
        <>
            <BackHome/>  
            <RegisterSaleForm
                handleChange={handleChange}
                handleSaveUpdate={handleSaveUpdate}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
                handleSearchItem={searchItem}
                list={<select>{products.map((product) => (
                    <option>{product.descric_product}</option>))}
                </select>}
                item={(product.descric)}
                amount={product.amount <= 0 ? '' : product.amount}
                valor={preco <= 0 ? '' : ' X ' + preco}
                statusBtn={statusBtnSaveUpdate}
                statusBtnSaleSubmit={statusBtnSaleSubmit}
                loadItens= {itens.length === 0 ? <strong>Carregando...</strong> : (
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
                                updateProduct(item)}><a style={{textDecoration:'none'}} href="#">Atualizar</a></div>}
                        />
                        )))}
            >
                {product}
            </RegisterSaleForm>

                    <footer><br /><strong>Fim</strong></footer>
        </>
    )
}