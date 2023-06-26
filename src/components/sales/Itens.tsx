import './index.css'

type Props = {
    id: number;
    item: number;
    descric: string | number | "" | 0;
    amount: number;
    valor: number | string | "money";
    tItem: number | string | "money";
    editar: any
}

export function Itens(props:Props){
    return(
    <div className='container-list-itens' >
        <div className='main-list-itens'>
        <div className='form-itens'>
            <span>ID:{props.id} </span>
            <span>Item:{props.item} </span>
            <span>{props.descric} </span>
            <span>{props.amount}</span>
            <span>X{props.valor}</span>
            <span>={props.tItem}</span>
            <span><strong> {props.editar}</strong></span>
        </div>
        </div>
    </div>
    )
}