import '../../components/listStyles/module-list.css'

export type TPropsPerson = {
    id_person: any;
    create: 'date' | any;
    name: string
    cpf: string;
    phone: string;
    address: string;
    filial: number;
    id_user: number;
    update: any
}

export const PersonList = (
    {
        id_person,
        create,
        name,
        cpf,
        phone,
        address,
        filial,
        id_user,
        update
    }: TPropsPerson) => {

    return (
        <>
            <div className="container-module-list" >
                <div className="main-module-list">
                    <strong className="list-person-id" >ID:</strong> {id_person}<br />
                    <strong className="list-person-create" >Data Cadastro:</strong>  {create}<br />
                    <strong className="list-person-name" >Nome Pessoa:</strong>  {name}<br />
                    <strong className="list-person-cpf" >CPF:</strong>  {cpf}<br />
                    <strong className="list-person-phone" >Telefone:</strong>  {phone}<br />
                    <strong className="list-person-address" >Endereço:</strong>  {address}<br />
                    <strong className="list-person-branch" >Filial:</strong>  {filial}<br />
                    <strong className="list-person-user" >Usuário:</strong>  {id_user}<br />
                    <button className='list-user-btn'>{update}</button>
                    <hr />
                </div>
            </div>
        </>
    )
}