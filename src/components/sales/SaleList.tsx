export function SalesList(props: any) {
    return (
        <>
            <div style={{ color: "#00ff", fontSize: "12px", display: "inline" }} >
                <strong>Venda: </strong>{props.id}<br />
                <strong>Data:</strong>{props.create}<br />
                <strong>Cliente:</strong> {props.name}<br />
                <strong>Total Produtos:</strong> {props.total_prod}<br />
                <strong>Desconto</strong>: {props.disc_sale}<br />
                <strong>Total Nota</strong>: {props.total_note}<br />
                <br />
            </div>
        </>
    )
}
