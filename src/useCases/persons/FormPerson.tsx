import { useState } from "react";
import { PersonForm } from '../../components/persons/PersonForm';
import { IPerson } from "./IPerson";
import api from '../../services/api/api'

export function FormPerson() {

    const [person, setPerson] = useState<IPerson>({
        name_pers: "Ademir",
        cpf_pers: "323232",
        address_pers: "Aveinda Brasil",
        fk_name_filial: 1
    })

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson(values => ({ ...values, [name]: value }))
    }

    function valFields(person: IPerson) {
        let msg = ''
        if (person.name_pers == '') { msg += '- Digite o seu Nome Completo !! -\n' };
        if (person.cpf_pers == '') { msg += '- Digite seu CPF !! -\n' };
        if (person.address_pers == '') { msg += "- Digite seu Endereço !! -\n" };
        if (person.fk_name_filial == 0) { msg += "- informe o num !! -\n" };
        if (msg != '') {
            alert(msg)
            return false;
        };
        return true;
    };

    async function handlePerson() {
        await api.post<IPerson>('/persons', person)
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
            <PersonForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            >
                {person}
            </PersonForm>
        </>
    )
}
