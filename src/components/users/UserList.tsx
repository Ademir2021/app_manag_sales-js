import React from "react"
import { IUsers } from '../../useCases/users/IUser';

// interface Props{
//    user :IUsers
// }

const ListUSers: React.FC<any> = (
    { id, created_at, name, username, password, update }: IUsers) => {
    return (
        <>
            <div className="main_list">
                <div className="container_list">
                    <div className="update_list">
                        <strong className="list_id">ID_User: </strong><strong>{id}</strong><br />
                        <strong className="list_create">Criado: </strong><strong>{created_at}</strong><br />
                        <strong className="list_name">Nome Completo: </strong><strong>{name}</strong><br />
                        <strong className="list_email">Email: </strong><strong>{username}</strong><br />
                        {/* <strong className="list_password">Senha: </strong><strong>{password}</strong><br /> */}
                        <button className="btn_update">{update}</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export { ListUSers }