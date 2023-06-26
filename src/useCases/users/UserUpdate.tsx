import { useState, useRef, useContext } from 'react';
import { UserFormUpdate } from "../../components/users/UserFormUpdate";
import { crypt, UsersValFields } from '../../components/utils/crypt/Crypt'
import { BackHome } from "../../components/utils/backHome/BackHome"
import { AuthContext } from '../../context/auth'
import { ButtonOnClick } from '../../components/utils/btnOnClick/BtnOnClick';
import api from '../../services/api/api'

import '../../App.css'

type TUpdateUser = {
    id: number;
    created_at?:Date | any;
    name: string;
    username: string;
    password: string;
    psw_repeat: string;
}

export function UserUpdate() {
    const { user: isLogged }: any = useContext(AuthContext);
    const [,setUsers] = useState<TUpdateUser[]>([])
    const [user, setUser] = useState<TUpdateUser>({
        id: 0,
        name: "",
        username: "",
        password: "",
        psw_repeat: ""
    })

    const [dropdown, setDropdown] = useState<string>("");
    const modalRef = useRef<any>(null);

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
        await api.get<TUpdateUser[]>(`/user/${isLogged[0].id}`)
            .then(response => {
                const res: TUpdateUser[] = response.data
                setUsers(res)
                user.id = res[0].id
                user.name = res[0].name
                user.username = res[0].username
            })
        };

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
        getUsers()
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
            <ButtonOnClick
            onClickHandle={toggleDropdown}
            text={"Entrar"}/>
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
          
        </>
    )
}
