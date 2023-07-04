import { useState } from "react";
import { PersonForm } from '../../components/persons/PersonForm';
import { postRegister } from "../../services/handleService";
import { PersonsValFields } from '../../components/utils/crypt/Crypt';
import { Dashboard } from "../dashboard/Dashboard";

export type TPersonRegister = {
    id_person?: number | any;
    created_at?: Date | any;
    updated_at?: Date | any ;
    name_pers: string | any;
    cpf_pers: string;
    phone_pers:string;
    address_pers: string;
    fk_name_filial: number;
    fk_id_user:number;
  }

export function FormPerson() {
    const route = 'persons'
    const [person, setPerson] = useState<TPersonRegister>({
        name_pers: "",
        cpf_pers: "",
        phone_pers:"",
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

    async function handleSubmit(e: any) {
        e.preventDefault();
        if (PersonsValFields(person)) {
            person.cpf_pers = person.cpf_pers.replace(/[..-]/g ,'')
            person.phone_pers = person.phone_pers.replace(/[()-]/g ,'')
            postRegister(person, route)
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
