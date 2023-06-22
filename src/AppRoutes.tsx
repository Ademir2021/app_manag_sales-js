import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React, { useContext } from 'react'
import { HomePage } from "./useCases/home/HomePage";
import { UserLogin } from './useCases/users/UserLogin';
import { Dashboard } from "./useCases/dashboard/Dashboard";
import { UserRegister } from './useCases/users/UserRegister';
import { UsersList } from './useCases/users/UsersList';
import { UserUpdate } from "./useCases/users/UserUpdate";
import { RegisterSale } from "./useCases/sales/RegisterSale";
import { ProcessItensSale } from './useCases/sales/ProcessItensSale';
import { ListSales } from './useCases/sales/ListSale';
import { FormProduct } from "./useCases/products/ProductRegister";
import { ProductsList } from './useCases/products/ProductList';
import { FormPerson } from "./useCases/persons/PersonRegister";
import { PersonUpdate } from "./useCases/persons/PersonUpdate";
import { PersonsList } from './useCases/persons/PersonList';
import { AuthProvider, AuthContext } from "./context/auth";
import { Logout } from "./components/utils/logout/Logout";
import { FormModel } from "./useCases/formModel/FormModel";

export function AppRoutes() {
    const Private = ({ children }: any) => {
        const { authenticated, loading }: any = useContext(AuthContext)
        
        if(loading){
            return <div className="loading">Carregando...</div>
        }
        
        if (!authenticated) {
            return <Navigate to="/login" />
        }
        return children
    };

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/login" Component={UserLogin} />
                    <Route path="/logout" Component={Logout} />
                    <Route path="/form_model" Component={FormModel} />
                    <Route path="/register" Component={UserRegister} />
                    <Route path="/dashboard" element={<Private><Dashboard/></Private>} />
                    <Route path="/users_list" element={<Private><UsersList/></Private>} />
                    <Route path="/user_update" element={<Private><UserUpdate/></Private>} />
                    <Route path="/process_sale" element={<Private><ProcessItensSale/></Private>} />
                    <Route path="/sale" element={<Private><RegisterSale/></Private>} />
                    <Route path="/list_sale" element={<Private><ListSales/></Private>} />
                    <Route path="/form_product" element={<Private><FormProduct/></Private>} />
                    <Route path="/product_list" element={<Private><ProductsList/></Private>} />
                    <Route path="/form_person" element={<Private><FormPerson/></Private>} />
                    <Route path="/person_list" element={<Private><PersonsList/></Private>} />
                    <Route path="/person_update" element={<Private><PersonUpdate/></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}