import './index.css'
type Props = {
    id: number;
    item: number;
    descric: string | number | "" | 0;
    amount: number;
    valor: number | string | "money";
    tItem: number | string | "money";
    editar: any;
}

export function Itens(props:Props){
    return(
    <div className='container-list-itens' >
        <div className='main-list-itens'>
        <div className='form-itens'>
            <strong> {props.id} </strong>
            <strong> &#x2705; </strong>
            <strong> Item {props.item} </strong>
            <strong> {props.descric} </strong>
            <strong> {props.amount} </strong>
            <strong> X {props.valor} </strong>
            <strong> = {props.tItem} </strong>
            <strong>{props.editar}</strong>
        </div>
        </div>
    </div>
    )
}