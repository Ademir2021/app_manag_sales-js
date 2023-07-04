import { useState, useEffect } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { PersonList } from "../../components/persons/PersonList";
import { TPersonRegister } from './PersonRegister'
import { BackHome } from "../../components/utils/backHome/BackHome"
//import { GetPersons } from "../../services/handleService";
import api from "../../services/api/api";

export function PersonsList() {

    const [person, setPerson] = useState<TPersonRegister[]>([])

    const getPerson = async () => {
        try {
            await api.get('/persons')
                .then(response => {
                    setPerson(response.data)
                })
        } catch (err) {
            alert("error occurred !!" + err)
        }
    };
    useEffect(() => {
        getPerson()
    }, [])

    return (
        <>
            <BackHome />
            {person.length === 0 ? <p>Carregando...</p> : (
                person.map((person: TPersonRegister) => (
                    <PersonList
                        key={person.id_person}
                        id_person={person.id_person}
                        created_at={FormatDate(person.created_at)}
                        updated_at={(person.updated_at === null ?
                            "não houve atualização" : FormatDate(person.updated_at))}
                        name={person.name_pers}
                        phone={person.phone_pers}
                        address={person.address_pers}
                        cpf={person.cpf_pers}
                        id_user={person.id_person}
                        filial={person.fk_name_filial}
                        update={'Inativo'}

                    />
                )))}
        </>
    )
}