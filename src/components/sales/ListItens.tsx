import './listItens.css'

type Props = {
    id?: number;
    item?: number;
    descric: string | number | "" | 0;
    amount?: number;
    valor?: number | string | "money";
    tItem?: number | string | "money";
    editar?: any;
    item_img?:string;
}

export function ListItens(props:Props){
    return(
    <div className='container-itens'>
        <div className='main-itens'>
            <p> {props.id} </p>
        <img className='itens-img' src={props.item_img} alt='Image'></img>
            <p> {props.descric} </p>
            <p> {props.valor} </p>
            <p> {props.editar} </p>
        </div>
    </div>
    )
}