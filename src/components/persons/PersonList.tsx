//import './index.css'

export function PersonList(props: any) {

    return (
        <>
             <div style={{ color: "#00ff", fontSize: "12px", display: "inline" }} >
                <strong>ID:</strong> {props.id}<br />
                <strong>Data Cadastro:</strong>  {props.create}<br />
                <strong>Nome Pessoa:</strong>  {props.name}<br />
                <strong>CPF:</strong>  {props.cpf}<br />
                <strong>Endereço:</strong>  {props.address}<br />
                <strong>Filial:</strong>  {props.filial}<br />
                <br />
            </div>
        </>
    )
}