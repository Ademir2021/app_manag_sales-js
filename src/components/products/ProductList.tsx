export function ProductList(props: any) {
    return (
        <>
             <div style={{ color: "#00ff", fontSize: "12px", display: "inline" }} >
                <strong>ID_Produto:</strong> {props.id}<br />
                <strong>Data Cadastro:</strong>  {props.create}<br />
                <strong>Descrição:</strong>  {props.name}<br />
                <strong>Valor Max:</strong>  {props.val_max}<br />
                <strong>Valor Min:</strong>  {props.val_min}<br />
                <strong>Marca:</strong>  {props.brand}<br />
                <strong>Setor:</strong>  {props.sector}<br />
                <strong>Barras:</strong>  {props.bar_code}<br />
                <br />
            </div>
        </>
    )
}