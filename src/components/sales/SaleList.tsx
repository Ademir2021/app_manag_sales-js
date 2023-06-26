import '../global-module-list.css'

type Props = {
    id:number;
    create:Date | any;
    name:string | number;
    total_prod:number;
    disc_sale:number;
    total_note:number;
}

export function SalesList(props: Props) {
    return (
        <> 
            <div className='container-module-list' >
                <div className='main-module-list'>
                <strong className='list-sale-id'>Venda: </strong>{props.id}<br />
                <strong className='list-sale-create'>Data:</strong>{props.create}<br />
                <strong className='list-sale-person'>Cliente:</strong> {props.name}<br />
                <strong className='list-sale-t-product'>Total produtos:</strong> {props.total_prod}<br />
                <strong className='list-sale-desc-product'>Desconto</strong>: {props.disc_sale}<br />
                <strong className='list-sale-t-product'>Total nota</strong>: {props.total_note}<br />
                </div>
            </div>
        </>
    )
}
