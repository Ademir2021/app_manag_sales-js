import { useState, useEffect, useRef } from 'react';
import { UserFormUpdate } from "../../components/users/UserFormUpdate";
import { ListUSers } from "../../components/users/UserList";
import { FormatDate } from "../../components/utils/formatDate";
import { crypt, UsersValFields } from '../../components/utils/crypt/Crypt'
import { IUpdUsers, } from './IUser'
import api from '../../services/api/api'

import '../../App.css'

export function UserUpdate() {

    const [users, setUsers] = useState<IUpdUsers[]>([])
    const [user, setUser] = useState<IUpdUsers>({
        id: 0,
        name: "",
        username: "",
        password: "",
        psw_repeat: ""
    })

    const [dropdown, setDropdown] = useState<string>("");
    const modalRef = useRef<any>(null);

    function listUpdate(id: number, name: string, username: string) {
        user.id = id
        user.name = name
        user.username = username
        getUsers()
        toggleDropdown()
    }

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(values => ({ ...values, [name]: value }))
    }

    async function registerUser() {
        await api.post<IUpdUsers[]>('/users', user)
            .then(response => {
                alert(response.data)
            }).catch(error => console.log(error))
    }

    async function updateUser() {
        await api.put<IUpdUsers>(`/users/${user.id}`, user)
            .then(response => {
                alert(response.data)
            })
            .catch(error => alert(error))
    }

    async function getUsers() {
        await api.get<IUpdUsers[]>(`/users`)
            .then(response => {
                const res: IUpdUsers[] = response.data
                setUsers(res)
                for (let i = 0; res.length > i; i++) {
                    if (user.id === res[i].id) {
                        user.name = res[i].name
                        user.username = res[i].username
                    }
                }
            })
    }

    useEffect(() => {
        getUsers()
    }, [user.id])

    async function handleSubmit(e: any) {
        e.preventDefault();
        if (UsersValFields(user)) {
            user.password = crypt(user.password)
            registerUser()
        } else {
            alert("Digite um Novo Usuário")
        }
    }

    async function handleUpdate(e: any) {
        e.preventDefault();
        if (UsersValFields(user)) {
            user.password = crypt(user.password)
            getUsers()
            updateUser()
            user.password = ''
            user.psw_repeat = ''
        }
    }

    async function handleDelete(e: any) {
        e.preventDefault();
        setUser({
            id: 0,
            name: "",
            username: "",
            password: "",
            psw_repeat: ""
        })
        alert("Digite um novo Usuário !!")
    }

    function toggleDropdown() {
        setDropdown("modal-show");
    }

    function closeDropdown(event: { stopPropagation: () => void; target: any; }) {
        event.stopPropagation();
        const contain = modalRef.current.contains(event.target);
        if (contain) {
            setDropdown("");
            document.body.removeEventListener("click", closeDropdown);
        }
    }

    return (
        <>
            < a className='menu-home' href="/dashboard">------| Menu Principal |------</a>
            <UserFormUpdate
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handleChange={handleChange}
                close={closeDropdown}
                className={dropdown}
                modalRef={modalRef}
            >
                {user}
            </UserFormUpdate>

            {users.length === 0 ? <p>Carregando...</p> : (
                users.map((user) => (
                    <ListUSers
                        key={user.id}
                        id={user.id}
                        created_at={FormatDate(user.created_at)}
                        name={user.name}
                        username={user.username}
                        password={user.password}
                        update={<div onClick={() =>
                            listUpdate(user.id, user.name, user.username)}>Atualizar</div>}
                    />
                )))}
        </>
    )
}

