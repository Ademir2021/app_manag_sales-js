import '../../components/listStyles/module-list.css'

export function ProductList(props: any) {
    return (
        <>
             <div className="container-module-list">
                <div className="main-module-list">
                <strong className='list-product-id'>ID_Produto:</strong> {props.id}<br />
                <strong className='list-product-create'>Data Cadastro:</strong>  {props.create}<br />
                <strong className='list-product-descricao'>Descrição:</strong>  {props.name}<br />
                <strong className='list-product-val-max'>Valor Max:</strong>  {props.val_max}<br />
                <strong className='list-product-val-min'>Valor Min:</strong>  {props.val_min}<br />
                <strong className='list-product-brand'>Marca:</strong>  {props.brand}<br />
                <strong className='list-product-sector'>Setor:</strong>  {props.sector}<br />
                <strong className='list-product-barcode'>Cód. Barras:</strong>  {props.bar_code}<br />
                <hr />
                </div>
            </div>
        </>
    )
}