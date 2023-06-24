import '../global-module-list.css'

export function SalesList(props: any) {
    return (
        <> 
            <div className='container-module-list' >
                <div className='main-module-list'>
                <strong className='list-sale-id'>Venda: </strong>{props.id}<br />
                <strong className='list-sale-create'>Data:</strong>{props.create}<br />
                <strong className='list-sale-person'>Cliente:</strong> {props.name}<br />
                <strong className='list-sale-t-product'>Total Produtos:</strong> {props.total_prod}<br />
                <strong className='list-sale-desc-product'>Desconto</strong>: {props.disc_sale}<br />
                <strong className='list-sale-t-product'>Total Nota</strong>: {props.total_note}<br />
                <hr />
                </div>
            </div>
        </>
    )
}
