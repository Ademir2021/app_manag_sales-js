import '../../components/listStyles/module-list.css'

export function PersonList(props:any) {

    return (
        <>
             <div className="container-module-list" >
                <div className="main-module-list">
                <strong className="list-person-id" >ID:</strong> {props.id}<br />
                <strong className="list-person-create" >Data Cadastro:</strong>  {props.create}<br />
                <strong className="list-person-name" >Nome Pessoa:</strong>  {props.name}<br />
                <strong className="list-person-cpf" >CPF:</strong>  {props.cpf}<br />
                <strong className="list-person-phone" >Telefone:</strong>  {props.phone}<br />
                <strong className="list-person-address" >Endereço:</strong>  {props.address}<br />
                <strong className="list-person-branch" >Filial:</strong>  {props.filial}<br />
                <strong className="list-person-user" >Usuário:</strong>  {props.id_user}<br />
                <hr />
                </div>
            </div>
        </>
    )
}