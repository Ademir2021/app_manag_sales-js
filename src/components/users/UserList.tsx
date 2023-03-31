import React from "react"

import { IUsers } from '../../useCases/users/IUser';


// interface Props{
//    user :IUsers
// }

const ListUSers:React.FC<any> = (
    { id, created_at, name, username, password }:IUsers) => {

    return (
        <>
            <div style={{ color: "#00ff", fontSize: "12px", display: "inline" }} >
                <strong>ID_User: </strong> {id}  <br />
                <strong>Criado: </strong> {created_at} <br />
                <strong>Nome Completo: </strong> {name} <br />
                <strong>Email: </strong> {username} <br />
                {/* <strong>Senha: </strong> {password} <br /> */}
                <br />
            </div>
        </>
    )
}

export { ListUSers }