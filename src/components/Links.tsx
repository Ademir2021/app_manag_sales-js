import { Link } from "react-router-dom"

export function Links() {
    return (
        <>
            <nav style={{ fontSize: "22px" }}>
                <ul style={{ color: "gray" }}>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/login">Login</Link> </li>
                    <li> <Link to="/register">Registrar</Link> </li>
                    <li> <Link to="/listar">Listar Users</Link> </li>
                    <li> <Link to="/sale">Vendas</Link> </li>
                    <li> <Link to="/list_sale">Listar Vendas</Link> </li>
                    <li> <Link to="/list_product">Listar Produtos</Link> </li>
                </ul>
            </nav>
        </>
    )
}