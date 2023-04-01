import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomePage } from "./useCases/home/HomePage";
import { UserRegister } from './useCases/users/UserRegister';
import { SetUsers } from './useCases/users/UserList';
import { UserLogin } from './useCases/users/UserLogin';
import { Sale } from './components/sales/Sale';
import { ListSales } from './useCases/sales/ListSale';
import { ListProduct } from './useCases/products/ListProduct';
import { FormPerson } from "./useCases/persons/FormPerson";
import { ListPerson } from './useCases/persons/ListPerson';
import { FormProduct } from "./useCases/products/FormProduct";

export function AppRoutes() {

    return (
        <Router>
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/login" Component={UserLogin} />
                <Route path="/register" Component={UserRegister} />
                <Route path="/listar" Component={SetUsers} />
                <Route path="/sale" Component={Sale} />
                <Route path="/list_sale" Component={ListSales} />
                <Route path="/form_product" Component={FormProduct} />
                <Route path="/list_product" Component={ListProduct} />
                <Route path="/form_person" Component={FormPerson} />
                <Route path="/list_person" Component={ListPerson} />
                
            </Routes>
        </Router>
    )
}