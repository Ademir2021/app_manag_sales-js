import React from "react"
import { IUsers } from '../../useCases/users/IUser';

// interface Props{
//    user :IUsers
// }

const ListUSers: React.FC<any> = (
    { id, created_at, name, username, password, update }: IUsers) => {
    return (

        <div className="container-list">
            <div className="update-list">
                <strong className="list-id">ID_User: </strong><strong>{id}</strong><br />
                <strong className="list-create">Criado: </strong><strong>{created_at}</strong><br />
                <strong className="list-name">Nome Completo: </strong><strong>{name}</strong><br />
                <strong className="list-email">Email: </strong><strong>{username}</strong><br />
                {/* <strong className="list-password">Senha: </strong><strong>{password}</strong><br /> */}
                <button className="">{update}</button>
                </div>
        </div>
    )
}
export { ListUSers }