import { useState, useEffect } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { PersonList } from "../../components/persons/PersonList";
import { TPersonRegister } from './PersonRegister'
import api from "../../services/api/api";

export function PersonsList() {

    const [person, setPerson] = useState<TPersonRegister[]>([])

    const getPerson = async () => {
        try {
            await api.get<TPersonRegister[]>('persons')
                .then(response => {
                    setPerson(response.data)
                })
        } catch (err) {
            alert("error occurred !!" + err)
        }
    }
    useEffect(() => {
        getPerson()
    }, [])

    return (
        <>
            <div style={{ fontSize: '18px' }}>Lista de Pessoas</div>
            {person.length === 0 ? <p>Carregando...</p> : (
                person.map((person: TPersonRegister) => (
                    <PersonList
                        key={person.id_person}
                        id={person.id_person}
                        create={FormatDate(person.created_at)}
                        name={person.name_pers}
                        cpf={person.cpf_pers}
                        address={person.address_pers}
                        filial={person.fk_name_filial}
                    />
                )))}
        </>
    )
}