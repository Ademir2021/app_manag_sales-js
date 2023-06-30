import '../global-module-list.css'

export type PropsUsers = {
    id: number;
    created_at:Date | any;
    updated_at:Date | any;
    name: string;
    username: string;
    password?: string;
    update?: Date | any;
};

export const ListUSers = (props: PropsUsers) => {
    return (
        <>
            <div className="container-module-list">
                <div className="main-module-list">
                    <strong className="list-user-id">ID: </strong><strong>{props.id}</strong><br />
                    <strong className="list-user-create">Criado: </strong><strong>{props.created_at}</strong><br />
                    <strong className="list-user-create">Atualizado: </strong><strong>{props.updated_at}</strong><br />
                    <strong className="list-user-name">Nome completo: </strong><strong>{props.name}</strong><br />
                    <strong className="list-user-email">Email: </strong><strong>{props.username}</strong><br />
                </div>
            </div>
        </>
    )
}