import { useState, useEffect } from "react";
import { ProcessItensSaleForm } from '../../components/sales/ProcessItensSaleForm';
import { BackHome } from "../../components/utils/backHome/BackHome";

type TSale = {
    filial: number;
    user_id: number;
    user: string;
    fk_name_pers: number;
    name_pers: string;
    disc_sale: number;
    tItens: number;
    tNote: number;
    paySale: number;
    id: number;
    item: number;
    descric: string;
    amount: number;
    valor: number;
    tItem: number;
};

export function ProcessItensSale() {

    const url = "http://192.168.80.109:3000";
    const urlSales = url + "/sales";
    const [itens, setItens] = useState<TSale[]>([]);
    const [sale, setSale] = useState<TSale>({
        filial: 0,
        user_id: 0,
        user: "",
        fk_name_pers: 0,
        name_pers: "",
        disc_sale: 0,
        tItens: 0,
        tNote: 0,
        paySale: 0,
        id: 0,
        item: 0,
        descric: '',
        amount: 0,
        valor: 0,
        tItem: 0,
    });
    const [sales, setSales] = useState<TSale[]>([])

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setSale((values: any) => ({ ...values, [name]: value }))
    };

    function processNote() {
        const resSum: [] | any = localStorage.getItem('s')
        const sum = JSON.parse(resSum)
        const resNote: [] | any = localStorage.getItem('n')
        const note = JSON.parse(resNote)
        const {filial, user_id, user, fk_name_pers, name_pers} = note
        sale.filial = filial
        sale.user_id = user_id
        sale.user = user
        sale.fk_name_pers = fk_name_pers
        sale.name_pers = name_pers
        sale.tItens = sum
        sale.tNote = sale.tItens - sale.disc_sale
        const resItens: [] | any = localStorage.getItem('i')
        const itens = JSON.parse(resItens)
        setSale(sale)
        setItens(itens)
        return sum
    }

    useEffect(() => {
        processNote()
    }, [sale]);

    function payment() {
        if (itens !== null) {
            const sum: number = processNote()
            let payment = sale.paySale
            let totalNote = 0
            const limitDesc = (sale.disc_sale > sum * 0.10)
            totalNote += sum
            totalNote -= sale.disc_sale;
            if (limitDesc) {
                alert("Desconto não autorizado")
            } else {
                if (totalNote === 0) {
                    alert("Nenhum item(s) no momento !!")
                } else {
                    if (payment == sale.tNote) {
                        alert("Pagamento efetuado com sucesso ! " + payment)
                        alert("A venda será enviada !")
                        prepareSales()
                        registerSale()
                        localStorage.removeItem('i');
                        setTimeout(() => {
                            window.location.replace("/sale")
                        }, 3000);
                    } else {
                        alert("Valor diferente do total da nota ! "
                        + sale.paySale)
                    }
                }
            }
        } else {
            alert("Pedido já foi enviado ! ")
        }
    };

    function prepareSales() {
        sales.push(sale)
        for (let i = 0; itens.length > i; i++) {
            sales.push(itens[i])
        }
        setSales(sales)
    };

    async function handleSubmit(e: Event) {
        e.preventDefault();
        payment()
        console.log(sales)
    };

    async function registerSale() {
        try {
            const response = await fetch(urlSales, {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(sales),
            });
            const num_sale = await response.json();
            alert(JSON.stringify("Nota Nº:" + num_sale + " inserida com sucesso !"))
        } catch (error) {
            console.error("Error:", error)
        }
    };

    return (
        <>
            <BackHome />
            <ProcessItensSaleForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            >
                {sale}
            </ProcessItensSaleForm>
        </>
    )
}