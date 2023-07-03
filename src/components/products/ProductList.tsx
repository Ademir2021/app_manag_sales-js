import '../global-module-list.css'

type Props = {
    id:number;
    created_at:Date | any;
    updated_at?:Date | any | null;
    name:string | number;
    val_max:number;
    val_min:number;
    brand:number;
    sector:number;
    bar_code:string;
    update:any;
}

export function ProductList(props: Props) {
    return (
        <>
             <div className="container-module-list">
                <div className="main-module-list">
                <strong className='list-product-id'>ID:</strong> {props.id}<br />
                <strong className='list-product-create'>Data cadastro:</strong>  {props.created_at}<br />
                <strong className='list-product-create'>Atualizado:</strong>  {props.updated_at}<br />
                <strong className='list-product-descricao'>Descrição:</strong>  {props.name}<br />
                <strong className='list-product-val-max'>Valor max:</strong>  {props.val_max}<br />
                <strong className='list-product-val-min'>Valor min:</strong>  {props.val_min}<br />
                <strong className='list-product-brand'>Marca:</strong>  {props.brand}<br />
                <strong className='list-product-sector'>Setor:</strong>  {props.sector}<br />
                <strong className='list-product-barcode'>Cód. barras:</strong>  {props.bar_code}<br />
                <div className='btn-div-list'>
                    <button className='btn-button-list'>{props.update}</button>
                </div>
                </div>
            </div>
        </>
    )
}