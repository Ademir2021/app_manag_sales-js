import './styles.css'

type TItem = {
    id: number;
    item: number;
    descric: string | number | "" | 0;
    amount: number;
    valor: number;
    tItem: number;
    editar: any
}

export function Itens({ id, item, descric, amount, valor, tItem, editar}:TItem){
    return(
    <div className='container-list-itens' >
        <div className='main-list-itens'>
        <div className='f-form-itens'>
            <span>ID:{id} </span>
            <span>Item:{item} </span>
            <span>{descric} </span>
            <span>{amount}</span>
            <span>X{valor}</span>
            <span>=R${tItem}</span>
            <span><strong> {editar}</strong></span>
        </div>
        </div>
    </div>
    )
}