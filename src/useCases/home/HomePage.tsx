import { useState, useCallback, useEffect } from 'react';
import { NavBar } from "../../components/navbar/Navbar";
import { TProductRegister } from '../products/ProductRegister';
import api from '../../services/api/api'
import { ListItens } from '../../components/sales/ListItens';
import { Header } from '../../components/home/Header';

type TItens = {
    descric: string | any;
}

export function HomePage() {
    const home = '/';
    const register = '/register';
    const update = '/user_update';
    const login = '/login';
    const sale = '/dashboard';
    const [counter, setCounter] = useState<number>(0)
    const [subtotal, setsubtotal] = useState<number>(0)
    const [itemImg,] = useState<string>('./img/img_itens/sale_avatar.png');
    const [products, setProducts] = useState<TProductRegister[]>([]);
    const [listProd, setlistProd] = useState<TProductRegister[]>([]);
    const [itens_, setItens_] = useState<TProductRegister[]>([]);
    const [itens, setItens] = useState<TItens>({
        descric: ''
    });
    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setItens(values => ({ ...values, [name]: value }))
    };
    const getProducts = useCallback(async () => {
        try {
            await api.get<TProductRegister[]>('products')
                .then(response => {
                    setProducts(response.data)
                    setlistProd(response.data) /**Carrega no inicio */
                })
        } catch (err) {
            console.log("error occurred !" + err)
        }
    }, [setProducts]);
    useEffect(() => {
        getProducts()
    },[itens]);

    function handleItem(item: TProductRegister) {
        itens_.push(item);
        setItens_(itens_);
        setCounter(counter + 1);
    };
    console.log(itens_)
    function handleSubmit(e: Event) {
        e.preventDefault()
        const res = []
        for (let i = 0; products.length > 0; i++) {
            if (itens.descric === products[i].descric_product) {
                let num_sector = 0;
                itens.descric = '';
                num_sector = products[i].fk_sector
                for (let j = 0; products.length > j; j++) {
                    if (num_sector === products[j].fk_sector) {
                        res.push(products[j])
                        setlistProd(res);
                    }
                }
            }
        }
    };
    return (
        <>
            <Header
            counter={counter}
            subtotal={subtotal}
            />
            <NavBar
                home={home}
                register={register}
                update={update}
                login={login}
                sale={sale}
                list={<select>{products.map((product) => (
                    <option key={product.id_product}>
                        {product.descric_product}</option>))}
                </select>}
                descric={itens.descric}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            {(listProd.map((item: TProductRegister) => (
                <ListItens
                    key={item.id_product}
                    item_img={item.image !== null ?
                        `./img/img_itens/${item.image}.jpg` : itemImg}
                    id={item.id_product}
                    descric={item.descric_product}
                    valor={item.val_max_product}
                    editar={<button onClick={() =>
                        handleItem(item)}>Comprar</button>}
                />
            )))}

        </>
    )
}