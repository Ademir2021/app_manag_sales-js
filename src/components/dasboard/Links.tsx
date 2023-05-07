import { Link } from "react-router-dom"

import "./styles.css"

export function Links() {
    return (
        <div className="container">
            <nav className="link-nav" >
                <ul className="link-ul">
                    <li> <Link to="/listar">Listar Users</Link> </li>
                    <li> <Link to="/user_update">Atualizar Usuarios</Link> </li><br />
                    <li> <Link to="/sale"> Registar Vendas</Link> </li>
                    <li> <Link to="/list_sale">Listar Vendas</Link> </li> <br />
                    <li> <Link to="/form_product">Registrar Produtos</Link> </li>
                    <li> <Link to="/list_product">Listar Produtos</Link> </li><br />
                    <li> <Link to="/form_person">Registrar Pessoas</Link> </li>
                    <li> <Link to="/list_person">Listar Pessoas</Link> </li>
                </ul>
            </nav>
        </div>
    )
}