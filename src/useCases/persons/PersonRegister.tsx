import { useState } from "react";
import { PersonForm } from '../../components/persons/PersonForm';
import api from '../../services/api/api'
import { Dashboard } from "../dashboard/Dashboard";

export type TPersonRegister = {
    id_person?: number;
    created_at?: Date | any;
    name_pers: string | any;
    cpf_pers: string;
    address_pers: string;
    fk_name_filial: number;
    fk_id_user:number;
  }


export function FormPerson() {

    const [person, setPerson] = useState<TPersonRegister>({
        name_pers: "",
        cpf_pers: "",
        address_pers: "",
        fk_name_filial: 1,
        fk_id_user:0
    })

    const res:any = localStorage.getItem('u')
    const [userIdLogged ] = useState(JSON.parse(res))
    person.fk_id_user = userIdLogged[0].id

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson(values => ({ ...values, [name]: value }))
    }

    function valFields(person: TPersonRegister) {
        let msg = ''
        if (person.name_pers == "") { msg += "Digite o seu Nome Completo !\n" };
        if (person.cpf_pers == "") { msg += "Digite seu CPF !\n" };
        if (person.address_pers == "") { msg += "Digite seu Endereço !\n" };
        if (person.fk_name_filial == 0) { msg += "Informe o num Loja !\n" };
        if (msg != '') {
            alert(msg)
            return false;
        };
        return true;
    };

    async function handlePerson() {
        await api.post<TPersonRegister>('/persons', person)
            .then(response => {
                alert(response.data)
            }).catch(error => alert(error))
    };

    async function handleSubmit(e: any) {
        e.preventDefault();
        if (valFields(person)) {
            handlePerson()
        }
    }

    return (
        <>
        <Dashboard/>
            <PersonForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            >
                {person}
            </PersonForm>
        </>
    )
}
