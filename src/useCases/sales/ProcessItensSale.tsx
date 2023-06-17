import { useState, useEffect } from "react";
import { ProcessItensSaleForm } from '../../components/sales/ProcessItensSaleForm';
import { BackHome } from "../../components/utils/backHome/BackHome";

import "../../App.css"

type TSale = {
    filial: number | any;
    user_id: number;
    user: string;
    fk_name_pers: number;
    name_pers: string;
    disc_sale: number ;
    tItens:number;
    tNote:number;
};

type TItens = {
    id: number;
    item: number;
    descric: string | number | "" | 0;
    amount: number;
    valor: number;
    tItem: number;
};

export function ProcessItensSale() {
    const url = "http://192.168.80.109:3000"
    const urlSales = url + "/sales"
    const urlItens = url + "/itens"
    const [itens, setItens] = useState<TItens[]>([]);
    const [sale, setSale] = useState<TSale>(
       { filial:0, user_id:0, user:"", fk_name_pers:0, name_pers:"", disc_sale:0, tItens:0, tNote:0 });
    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setSale((values: any) => ({ ...values, [name]: value }))
    };
    
    function processNote(){
        const resSum: [] | any = localStorage.getItem('s')
        const sum = JSON.parse(resSum)
        const resNote: [] | any = localStorage.getItem('n')
        const note = JSON.parse(resNote)
        sale.filial = note.filial
        sale.user_id = note.user_id
        sale.user = note.user
        sale.fk_name_pers = note.fk_name_pers
        sale.name_pers = note.name_pers
        sale.tItens = sum
        sale.tNote = sale.tItens - sale.disc_sale
        const resItens: [] | any = localStorage.getItem('i')
        const itens = JSON.parse(resItens)
        setSale(sale)
        setItens(itens)
    }
   
    useEffect(() => {
        processNote()
    },[sale]);

    async function handleSubmit(e: Event) {
        e.preventDefault();
         registerSale()
         registerItens()
        localStorage.removeItem('i');
    };

    async function registerSale() {
        try {
            const response = await fetch(urlSales, {
                method: "POST",
                headers: { "Content-Type": "application/json",},
                body: JSON.stringify(sale),
            });
            const num_sale = await response.json();
            alert(JSON.stringify("Venda Nº:" + num_sale + " efetuada com sucesso !"))
        } catch (error) {
            console.error("Error:", error)
        }
    };
    async function registerItens() {
        try {
            const response = await fetch(urlItens, {
                method: "POST",
                headers: { "Content-Type": "application/json",},
                body: JSON.stringify(itens),
            });
            const num_sale = await response.json();
            alert(JSON.stringify("Itens da Nota Nº:" + num_sale + " inseridi com sucesso !"))
        } catch (error) {
            console.error("Error:", error)
        }
    }
    
    return (
        <>
            <BackHome/>

            <ProcessItensSaleForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            >
                {sale}
            </ProcessItensSaleForm>
        </>
    )
}