import '../listStyles/module-list.css'

export type PropsUsers = {
    id: number;
    created_at:'date' | any;
    name: string;
    username: string;
    password?: string;
    update?: 'date' | any;
}

export const ListUSers = (
    {
        id,
        created_at,
        name,
        username,
        password,
        update
    }: PropsUsers) => {

    return (
        <>
            <div className="container-module-list">
                <div className="main-module-list">
                    <strong className="list-user-id">ID_User: </strong><strong>{id}</strong><br />
                    <strong className="list-user-create">Criado: </strong><strong>{created_at}</strong><br />
                    <strong className="list-user-name">Nome Completo: </strong><strong>{name}</strong><br />
                    <strong className="list-user-email">Email: </strong><strong>{username}</strong><br />
                    {/* <strong className="list-user-password">Senha: </strong><strong>{password}</strong><br /> */}
                    <button className='list-user-btn'>{update}</button>
                    <hr />
                </div>
            </div>
        </>
    )
}