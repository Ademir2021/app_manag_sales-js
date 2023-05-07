import { Link } from "react-router-dom"

import"./styles.css"

export function Links() {
    return (
        <div className="container">
        <nav className="link-nav" >
            <ul className="link-ul">
                <li className="link-li"> <Link to="/">Home</Link> </li><br />
                <li> <Link to="/login">Login</Link> </li><br />
                <li> <Link to="/register">Registrar Users</Link> </li> 
            </ul>
        </nav>
        </div>
    )
}