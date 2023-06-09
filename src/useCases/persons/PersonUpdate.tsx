import { useState, useEffect, useRef, useContext } from "react"
import { FormatDate } from "../../components/utils/formatDate";
import { PersonFormUpdate } from "../../components/persons/PersonFormUpdate";
import { PersonList } from "../../components/persons/PersonList";
import { TPersonRegister } from './PersonRegister'
import { PersonsValFields } from "../../components/utils/crypt/Crypt";
import { BackHome } from "../../components/utils/backHome/BackHome"
import { AuthContext } from '../../context/auth'
import api from "../../services/api/api";

import "../../App.css"

export function PersonUpdate() {
    const { user: isLogged }: any = useContext(AuthContext);
    const [persons, setPersons] = useState<TPersonRegister[]>([])
    const [person, setPerson] = useState<TPersonRegister>({
        id_person: 0,
        created_at: '',
        name_pers: '',
        cpf_pers: "",
        phone_pers: "",
        address_pers: "",
        fk_name_filial: 1,
        fk_id_user: 0
    })

    const [dropdown, setDropdown] = useState<string>("");
    const modalRef = useRef<any>(null);

    function listUpdate(id_person: number, name_pers: string,
        cpf_pers: string, phone_pers: string, address_pers: string) {
        person.id_person = id_person
        person.name_pers = name_pers
        person.cpf_pers = cpf_pers
        person.phone_pers = phone_pers
        person.address_pers = address_pers
        getPersons()
        toggleDropdown()
    }

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson(values => ({ ...values, [name]: value }))
    }

    async function registerPerson(): Promise<void> {
        await api.post<TPersonRegister[]>('/persons', person)
            .then(response => {
                alert(response.data)
            }).catch(error => console.log(error))
    }

    async function updatePerson(): Promise<void> {
        await api.put<TPersonRegister>(`/persons/${person.id_person}`, person)
            .then(response => {
                alert(response.data)
            })
            .catch(error => alert(error))
    }

    async function getPersons(): Promise<void> {
        await api.get<TPersonRegister[]>(`/person_users/${isLogged[0].id}`)
            .then(response => {
                const res: TPersonRegister[] = response.data
                setPersons(res)
                for (let i = 0; res.length > i; i++) {
                    if (person.id_person === res[i].id_person) {
                        person.name_pers = res[i].name_pers
                        person.cpf_pers = res[i].cpf_pers
                        person.phone_pers = res[i].phone_pers
                        person.address_pers = res[i].address_pers
                        person.fk_name_filial = res[i].fk_name_filial
                        person.fk_id_user = res[0].fk_id_user
                    }
                }
            })
    }

    if(person.fk_id_user === 0){ /** Busca Person somente 1 vez ! */
        getPersons()
        person.fk_id_user = isLogged[0].id
    }

    useEffect(() => {
    },[person.id_person] )

    async function handleSubmit(e: Event) {
        e.preventDefault();
        if (PersonsValFields(person)) {
            person.cpf_pers = person.cpf_pers.replace(/[..-]/g, '')
            person.phone_pers = person.phone_pers.replace(/[()-]/g, '')
            registerPerson()
        } else {
            alert("Digite um novo usuário")
        }
    }

    async function handleUpdate(e: Event) {
        e.preventDefault();
        if (PersonsValFields(person)) {
            person.cpf_pers = person.cpf_pers.replace(/[..-]/g, '')
            person.phone_pers = person.phone_pers.replace(/[()-]/g, '')
            updatePerson()
            getPersons()
        }
    }

    async function handleDelete(e: Event) {
        e.preventDefault();
        setPerson({
            id_person: 0,
            created_at: '',
            name_pers: '',
            cpf_pers: "",
            phone_pers: "",
            address_pers: "",
            fk_name_filial: 1,
            fk_id_user: 0
        })
        person.fk_id_user = isLogged[0].id
        alert("Digite um novo usuário !!")
    }

    function toggleDropdown(): void {
        setDropdown("modal-show");
    }

    function closeDropdown(e: Event) {
        e.stopPropagation();
        const contain = modalRef.current.contains(e.target);
        if (contain) {
            setDropdown("");
            document.body.removeEventListener("click", closeDropdown);
        }
    }

    return (
        <>
            <PersonFormUpdate
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handleChange={handleChange}
                close={closeDropdown}
                className={dropdown}
                modalRef={modalRef}
            >
                {person}
            </PersonFormUpdate>
            <BackHome />
            {persons.length === 0 ? <p>Carregando...</p> : (
                persons.map((person: TPersonRegister) => (
                    <PersonList
                        key={person.id_person}
                        id_person={person.id_person}
                        create={FormatDate(person.created_at)}
                        name={person.name_pers}
                        phone={person.phone_pers}
                        address={person.address_pers}
                        cpf={person.cpf_pers}
                        id_user={person.fk_id_user}
                        filial={person.fk_name_filial}
                        update={<div onClick={() =>
                            listUpdate(person.id_person, person.name_pers, person.phone_pers,
                                person.address_pers, person.cpf_pers)}>Atualizar</div>}
                    />
                )))}
        </>
    )
}





