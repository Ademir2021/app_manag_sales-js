import React from "react"
import { useState, useEffect } from 'react';
import { UserFormUptdate } from "../../components/users/UserFormUpdate";

import { FormatDate } from "../../components/utils/formatDate";
import { IUpdUsers } from './IUser'
import api from '../../services/api/api'
import { ListUSers } from "../../components/users/UserList";

export function UserUpdate() {
    let [counter, updateCounter] = useState(0)
    const [users, setUsers] = useState<IUpdUsers[]>([])
    const [user, setUser] = useState<IUpdUsers>({
        id: 0,
        name: "",
        username: "",
        password: "$2a$10$fCflcY3us.ENJ/I/mTeQ2uaFMdLNFF6nKj07qwx7cce6krVv2XcNy"
    })

    function listUpdate(id: number, name: string, username: string) {
        user.id = id
        user.name = name
        user.username = username
        getUsers()
    }

    function handleDecrement(e: any) {
        e.preventDefault();
        getUsers()
        if (counter > 1) {
            updateCounter(counter - 1)
        } else {
            alert("Fim")
        }
    }

    function handleIncrement(e: any) {
        e.preventDefault();
        getUsers()
        if (counter != null) {
            // user.name = ""
            // user.username = ""
            updateCounter(counter + 1)
        } else {
            alert("Fim")
        }
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
    }, [user.id] )

  
    async function handleSubmit(e: any) {
        e.preventDefault();
        if (user.name && user.username != "") {
            registerUser()
        } else {
            alert("Digite um Usuário")
        }
    }

    async function handleUpdate(e: any) {
        e.preventDefault();
        getUsers()
        updateUser()
    }

    async function handleDelete(e: any) {
        e.preventDefault();
        alert("delete")
    }

    return (
        <>
            <UserFormUptdate
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handleChange={handleChange}
            >
                {user}
            </UserFormUptdate>

            <div></div>
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
                            listUpdate(user.id, user.name, user.username)}>
                             <a style={{textDecoration:"none",
                             color:"white"}}
                             href='#'>Atualizar</a></div>}
                    />
                )))}
                                
        </>
    )
}

