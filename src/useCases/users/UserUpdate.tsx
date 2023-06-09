import { useState, useEffect, useRef, useContext } from 'react';
import { UserFormUpdate } from "../../components/users/UserFormUpdate";
import { ListUSers, PropsUsers } from "../../components/users/UserList";
import { FormatDate } from "../../components/utils/formatDate";
import { crypt, UsersValFields } from '../../components/utils/crypt/Crypt'
import { BackHome } from "../../components/utils/backHome/BackHome"
import { AuthContext } from '../../context/auth'
import api from '../../services/api/api'

import '../../App.css'

type TUpdateUser = {
    id: number;
    created_at?: 'date' | 'null' | undefined;
    name: string;
    username: string;
    password?: string;
    psw_repeat: string;
}

export function UserUpdate() {
    const { user: isLogged }: any = useContext(AuthContext);
    const [users, setUsers] = useState<TUpdateUser[]>()
    const [user, setUser] = useState<TUpdateUser>({
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

    const handleChange = (e:any) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(values => ({ ...values, [name]: value }))
    }

    async function registerUser(): Promise<void> {
        await api.post<TUpdateUser[]>('/users', user)
            .then(response => {
                alert(response.data)
            }).catch(error => console.log(error))
    }

    async function updateUser(): Promise<void> {
        await api.put<TUpdateUser>(`/users/${user.id}`, user)
            .then(response => {
                alert(response.data)
            })
            .catch(error => alert(error))
    }

    async function getUsers(): Promise<void> {
        await api.get<TUpdateUser[]>(`/users`)
            .then(response => {
                const res: TUpdateUser[] = response.data
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
        setUsers(users)
    }, [users])

    async function handleSubmit(e: Event) {
        e.preventDefault();
        if (UsersValFields(user)) {
            user.password = crypt(user.password)
            registerUser()
        } else {
            alert("Digite um novo usuário")
        }
    }

    async function handleUpdate(e: Event) {
        e.preventDefault();
        if (UsersValFields(user)) {
            user.password = crypt(user.password)
            getUsers()
            updateUser()
            user.password = ''
            user.psw_repeat = ''
        }
    }

    async function handleDelete(e: Event) {
        e.preventDefault();
        setUser({
            id: 0,
            name: "",
            username: "",
            password: "",
            psw_repeat: ""
        })
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
            <BackHome />
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
            {isLogged.length === 0 ? <p>Carregando...</p> : (
                isLogged.map((user: PropsUsers) => (
                    <ListUSers
                        key={user.id}
                        id={user.id}
                        created_at={'date' || FormatDate(user.created_at)}
                        name={'null'}
                        username={user.username}
                        password={user.password}
                        update={<div onClick={() =>
                            listUpdate(user.id, user.name, user.username)}>Atualizar</div>}
                    />
                )))}
        </>
    )
}
