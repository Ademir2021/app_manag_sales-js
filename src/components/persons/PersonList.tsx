import '../global-module-list.css'

export type Props = {
    id_person: any;
    create: Date | any;
    name: string
    cpf: string;
    phone: string;
    address: string;
    filial: number;
    id_user: number;
    update: any
}

export const PersonList = (props: Props) => {
    return (
        <div className="container-module-list" >
            <div className="main-module-list">
                <strong className="list-person-id" >ID:</strong> {props.id_person}<br />
                <strong className="list-person-create" >Data cadastro:</strong>  {props.create}<br />
                <strong className="list-person-name" >Nome pessoa:</strong>  {props.name}<br />
                <strong className="list-person-cpf" >CPF:</strong>  {props.cpf}<br />
                <strong className="list-person-phone" >Telefone:</strong>  {props.phone}<br />
                <strong className="list-person-address" >Endereço:</strong>  {props.address}<br />
                <strong className="list-person-branch" >Filial:</strong>  {props.filial}<br />
                <strong className="list-person-user" >Usuário:</strong>  {props.id_user}<br />
                <div className='btn-div-list'>
                    <button className='btn-button-list'>{props.update}</button>
                </div>
            </div>
        </div>
    )
}