import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React, { useContext } from 'react'
import { HomePage } from "./useCases/home/HomePage";
import { UserLogin } from './useCases/users/UserLogin';
import { Dashboard } from "./useCases/dashboard/Dashboard";
import { UserRegister } from './useCases/users/UserRegister';
import { ListUsers } from './useCases/users/UserList';
import { UserUpdate } from "./useCases/users/UserUpdate";
import { Sale } from './components/sales/Sale';
import { ListSales } from './useCases/sales/ListSale';
import { FormProduct } from "./useCases/products/FormProduct";
import { ListProduct } from './useCases/products/ListProduct';
import { FormPerson } from "./useCases/persons/FormPerson";
import { ListPerson } from './useCases/persons/ListPerson';
import { AuthProvider, AuthContext } from "./context/auth";
import { Logout } from "./components/utils/logout/Logout";

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
                    <Route path="/register" Component={UserRegister} />
                    <Route path="/dashboard" element={<Private><Dashboard/></Private>} />
                    <Route path="/list_users" element={<Private><ListUsers/></Private>} />
                    <Route path="/user_update" element={<Private><UserUpdate/></Private>} />
                    <Route path="/sale" element={<Private><Sale/></Private>} />
                    <Route path="/list_sale" element={<Private><ListSales/></Private>} />
                    <Route path="/form_product" element={<Private><FormProduct/></Private>} />
                    <Route path="/list_product" element={<Private><ListProduct/></Private>} />
                    <Route path="/form_person" element={<Private><FormPerson/></Private>} />
                    <Route path="/list_person" element={<Private><ListPerson/></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}